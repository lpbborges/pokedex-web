import { useState } from 'react';

import { IPokemon } from '../../interfaces/IPokemon';
import { PokemonDetailModal } from '../PokemonDetailModal';
import { PokemonItem } from '../PokemonItem';
import { Container } from './styles';

interface IPokemonListProps {
  pokemons: IPokemon[];
}

export function PokemonList({ pokemons }: IPokemonListProps) {
  const [isPokemonDetailModalOpen, setIsPokemonDetailModalOpen] = useState(false);
  const [chosenPokemon, setChosenPokemon] = useState({} as IPokemon);

  function handleOpenPokemonDetailModal(pokemon: IPokemon) {
    setIsPokemonDetailModalOpen(true);
    setChosenPokemon(pokemon);
  }

  function handleClosePokemonDetailModal() {
    setIsPokemonDetailModalOpen(false);
  }

  return (
    <Container>
      <ul>
        {pokemons.map(pokemon => (
          <PokemonItem
            key={pokemon.id}
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