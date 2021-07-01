import { useState, useEffect, useMemo } from 'react';

import { IPokemon } from '../../interfaces/IPokemon';
import { api } from '../../services/api';
import { capitalize } from '../../utils/capitalize';
import { Container } from './styles';

type PokemonItemProps = {
  name: string;
}

export function PokemonItem({ name }: PokemonItemProps) {
  const [pokemon, setPokemon] = useState({} as IPokemon);

  useEffect(() => {
    async function findPokemonByName() {
      const { data } = await api.get<IPokemon>(`pokemon/${name}`);

      setPokemon(data);
    }

    findPokemonByName();
  }, [name]);

  const formattedPokemon = useMemo(() => {
    return {
      ...pokemon,
      id: pokemon.id ? pokemon.id.toString().padStart(3, "0") : '',
      name: pokemon.name ? capitalize(pokemon.name) : '',
    }
  }, [pokemon]);

  return (
    <Container>
      <figure>
        <img
          src={formattedPokemon.image_url}
          alt={formattedPokemon.name}
        />
      </figure>
      <div>
        <span>
          #{formattedPokemon.id}
        </span>
        <strong>{formattedPokemon.name}</strong>
      </div>
    </Container>
  );
}