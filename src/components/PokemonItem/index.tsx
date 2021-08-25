import { useState, useEffect, memo } from 'react';

import { IPokemon } from '../../interfaces/IPokemon';
import { api } from '../../services/api';
import { capitalize } from '../../utils/capitalize';
import { Container } from './styles';

type IPokemonItemProps = {
  name: string;
  onOpenPokemonDetailModal: (pokemon: IPokemon) => void;
};

function PokemonItemComponent({
  name,
  onOpenPokemonDetailModal,
}: IPokemonItemProps): JSX.Element {
  const [pokemon, setPokemon] = useState({} as IPokemon);

  useEffect(() => {
    async function findPokemonByName(): Promise<void> {
      const { data } = await api.get<IPokemon>(`pokemon/${name}`);

      const pokemonData = {
        ...data,
        id: data.id.toString().padStart(3, '0'),
        name: capitalize(data.name),
      };

      setPokemon(pokemonData);
    }

    findPokemonByName();
  }, [name]);

  return (
    <Container onClick={() => onOpenPokemonDetailModal(pokemon)}>
      <figure>
        <img src={pokemon.image_url} alt={pokemon.name} />
      </figure>
      <div>
        <span>#{pokemon.id}</span>
        <strong>{pokemon.name}</strong>
      </div>
    </Container>
  );
}

export const PokemonItem = memo(PokemonItemComponent);
