import { useEffect, useState } from 'react';

import { PokemonList } from '../../components/PokemonList';
import { IPokemon } from '../../interfaces/IPokemon';
import { api } from '../../services/api';

import { Container } from './styles';

export function Home() {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [search, setSearch] = useState('');
  const [limit, setLimit] = useState(20);

  useEffect(() => {
    const isSearch = search.length > 2;

    async function loadPokemons() {
      const { data } = await api.get('pokemon');

      setPokemons(data.results);
      setLimit(data.count);
    }

    async function handleSearch() {
      const { data } = await api.get('pokemon', {
        params: {
          limit,
        }
      })

      const filteredPokemons = data.results.filter(
        (pokemon: IPokemon) => pokemon.name.startsWith(search.toLowerCase())
      );


      setPokemons(filteredPokemons);
    }

    if (isSearch) handleSearch();
    else loadPokemons();
  }, [limit, search]);

  return (
    <Container>
      <input
        placeholder="Informe o pokémon que deseja procurar"
        onChange={event => setSearch(event.target.value)}
      />
      <PokemonList pokemons={pokemons} />
    </Container>
  )
}