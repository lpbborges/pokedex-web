import { createContext, useState, useContext, ReactNode } from 'react';

import { api } from '../services/api';

interface User {
  id: string;
  username: string;
}

interface AuthState {
  token: string;
  user: User;
}

interface SignInCredentials {
  username: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@Pokemon:token');
    const user = localStorage.getItem('@Pokemon:user');

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  async function signIn({ username, password }: SignInCredentials) {
    const response = await api.post<{ token: string; user: User }>('sign-in', {
      username,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem('@Pokemon:token', token);
    localStorage.setItem('@Pokemon:user', JSON.stringify(user));

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, user });
  };

  function signOut() {
    localStorage.removeItem('@Pokemon:token');
    localStorage.removeItem('@Pokemon:user');

    setData({} as AuthState);
  };

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };