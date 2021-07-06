import { useState, useCallback } from 'react';

import { IPokemon } from '../../interfaces/IPokemon';
import { PokemonDetailModal } from '../PokemonDetailModal';
import { PokemonItem } from '../PokemonItem';
import { Container } from './styles';

interface IPokemonListProps {
  pokemons: Pick<IPokemon, 'name'>[];
}

export function PokemonList({ pokemons }: IPokemonListProps) {
  const [isPokemonDetailModalOpen, setIsPokemonDetailModalOpen] = useState(false);
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
      <PokemonDetailModal
        isOpen={isPokemonDetailModalOpen}
        onRequestClose={handleClosePokemonDetailModal}
        pokemon={chosenPokemon}
      />
    </Container>
  );
}