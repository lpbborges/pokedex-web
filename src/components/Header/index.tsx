import { LogoutButton } from './LogoutButton';
import { Search } from './Search';
import { Container, Content } from './styles';

interface IHeaderProps {
  onSearch: (text: string) => void;
}

export function Header({ onSearch }: IHeaderProps): JSX.Element {
  return (
    <Container>
      <Content>
        <Search onSearch={onSearch} />
        <LogoutButton />
      </Content>
    </Container>
  );
}
