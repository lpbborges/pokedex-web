import { useEffect, useState } from 'react';
import { PokemonList } from '../../components/PokemonList';
import { IPokemon } from '../../interfaces/IPokemon';
import { api } from '../../services/api';

import { Container } from './styles';

export function Home() {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);

  useEffect(() => {
    async function loadPokemons() {
      const response = await api.get('pokemon');

      setPokemons(response.data.results);
    }

    loadPokemons();
  }, []);
  return (
    <Container>
      <input
        placeholder="Informe o pokémon que deseja procurar"
      />
      <PokemonList pokemons={pokemons} />
    </Container>
  )
}