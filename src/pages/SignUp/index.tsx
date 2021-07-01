import { useState } from 'react';
import { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { api } from '../../services/api';
import { Container, Content } from './styles';


export function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignUp(event: FormEvent) {
    event.preventDefault();

    if (!username || !password) {
      toast.error('Todos os campos devem ser preenchidos');
      return;
    }

    try {
      await api.post('users', { username, password });

      toast.success('Usuário cadastrado com sucesso');

    } catch (err) {
      console.log(err);
      toast.error('Verifique suas credenciais e tente novamente');
    }
  }

  return (
    <Container>
      <Content>
        <form onSubmit={handleSignUp}>
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
            Cadastrar
          </button>
          <Link to="/">
            Voltar para login
          </Link>
        </form>
      </Content>
    </Container>
  );
}