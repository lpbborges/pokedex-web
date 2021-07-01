import { IPokemon } from '../../interfaces/IPokemon';
import { PokemonItem } from '../PokemonItem';
import { Container } from './styles';

interface IPokemonListProps {
  pokemons: IPokemon[];
}

export function PokemonList({ pokemons }: IPokemonListProps) {
  return (
    <Container>
      <ul>
        {pokemons.map(pokemon => (
          <PokemonItem
            key={pokemon.id}
            name={pokemon.name}
          />
        ))}
      </ul>
    </Container>
  );
}