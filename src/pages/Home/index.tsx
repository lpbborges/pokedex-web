import { useCallback, useEffect, useState } from 'react';

import { Header } from '../../components/Header';
import { PokemonList } from '../../components/PokemonList';
import { IPokemon } from '../../interfaces/IPokemon';
import { api } from '../../services/api';
import { Container } from './styles';

export function Home(): JSX.Element {
  const NUMBER_OF_POKEMONS_PER_PAGE = 8;
  const [hasNext, setHasNext] = useState(true);
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [search, setSearch] = useState('');
  const [limit, setLimit] = useState(0);
  const [offsetApiParam, setOffsetApiParam] = useState(
    NUMBER_OF_POKEMONS_PER_PAGE
  );

  useEffect(() => {
    const isSearch = search.length > 2;

    async function loadPokemons(): Promise<void> {
      const { data } = await api.get('pokemon', {
        params: {
          limit: NUMBER_OF_POKEMONS_PER_PAGE,
        },
      });

      const { next, count, results } = data;

      setPokemons(results);
      setLimit(count);
      setHasNext(next !== null);
    }

    async function handleSearch(): Promise<void> {
      const { data } = await api.get('pokemon', {
        params: {
          limit,
        },
      });

      const filteredPokemons = data.results.filter((pokemon: IPokemon) =>
        pokemon.name.startsWith(search.toLowerCase())
      );

      setPokemons(filteredPokemons);
    }

    if (isSearch) handleSearch();
    else loadPokemons();
  }, [limit, search]);

  const handleFetchMorePokemon = useCallback(async (offset: number) => {
    const { data } = await api.get('pokemon', {
      params: {
        limit: NUMBER_OF_POKEMONS_PER_PAGE,
        offset,
      },
    });

    setPokemons(state => [...state, ...data.results]);
    setOffsetApiParam(state => state + NUMBER_OF_POKEMONS_PER_PAGE);
  }, []);

  const handleSearch = useCallback((text: string) => {
    setSearch(text);
  }, []);

  return (
    <>
      <Header onSearch={handleSearch} />
      <Container>
        <PokemonList pokemons={pokemons} />
        {search.length <= 2 && hasNext && (
          <button
            type="button"
            onClick={() => handleFetchMorePokemon(offsetApiParam)}
          >
            Carregar mais
          </button>
        )}
      </Container>
    </>
  );
}
