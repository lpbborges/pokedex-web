import { CgPokemon } from 'react-icons/cg';

import { useAuth } from '../../hooks/auth';
import { Container, Content } from './styles';

interface IHeaderProps {
  onSearch: (text: string) => void;
}

export function Header({ onSearch }: IHeaderProps) {
  const { signOut } = useAuth();

  return (
    <Container>
      <Content>
        <input
          placeholder="Informe o pokémon que deseja procurar"
          onChange={event => onSearch(event.target.value)}
        />
        <button
          type="button"
          onClick={() => signOut()}
        >
          <CgPokemon color="#6e7fab" size={24} />
          Logout
        </button>
      </Content>
    </Container>
  )
}