import { useState } from 'react';
import { FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';
import { Container, Content } from './styles';


export function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();
  const { push } = useHistory();

  async function handleSignIn(event: FormEvent) {
    event.preventDefault();

    try {
      await signIn({ username, password });

      setUsername('');
      setPassword('');

      push('home');
    } catch (err) {
      toast.error('Verifique suas credenciais e tente novamente');
    }
  }

  return (
    <Container>
      <Content>
        <img src={logoImg} />
        <form onSubmit={handleSignIn}>
          <input
            placeholder="Nome de usuário"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">
            Entrar
          </button>
          <Link to="/sign-up">
            Criar usuário
          </Link>
        </form>
      </Content>
    </Container>
  );
}