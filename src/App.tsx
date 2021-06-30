import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/global'
import { Routes } from './routes';

import { AuthProvider } from './hooks/auth';

export function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <GlobalStyle />
        <Routes />
      </AuthProvider>
    </BrowserRouter>
  );
}

