import { Input } from './styles';

interface ISearchProps {
  onSearch: (text: string) => void;
}

export function Search({ onSearch }: ISearchProps): JSX.Element {
  return (
    <Input
      placeholder="Informe o pokémon que deseja procurar"
      onChange={event => onSearch(event.target.value)}
    />
  );
}
