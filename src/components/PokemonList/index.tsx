import { useState, useCallback, lazy, Suspense } from 'react';

import { IPokemon } from '../../interfaces/IPokemon';
import { PokemonItem } from '../PokemonItem';
import { Container } from './styles';

interface IPokemonListProps {
  pokemons: Pick<IPokemon, 'name'>[];
}

const PokemonDetailModal = lazy(() => import('../PokemonDetailModal'));

export function PokemonList({ pokemons }: IPokemonListProps): JSX.Element {
  const [isPokemonDetailModalOpen, setIsPokemonDetailModalOpen] =
    useState(false);
  const [chosenPokemon, setChosenPokemon] = useState({} as IPokemon);

  const handleOpenPokemonDetailModal = useCallback((pokemon: IPokemon) => {
    setIsPokemonDetailModalOpen(true);
    setChosenPokemon(pokemon);
  }, []);

  const handleClosePokemonDetailModal = useCallback(() => {
    setIsPokemonDetailModalOpen(false);
  }, []);

  return (
    <Container>
      <ul>
        {pokemons.map(pokemon => (
          <PokemonItem
            key={pokemon.name}
            name={pokemon.name}
            onOpenPokemonDetailModal={handleOpenPokemonDetailModal}
          />
        ))}
      </ul>
      <Suspense fallback={<div>loading...</div>}>
        <PokemonDetailModal
          isOpen={isPokemonDetailModalOpen}
          onRequestClose={handleClosePokemonDetailModal}
          pokemon={chosenPokemon}
        />
      </Suspense>
    </Container>
  );
}
