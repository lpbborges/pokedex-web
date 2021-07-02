import { useMemo } from 'react';
import Modal from 'react-modal';

import closeImg from '../../assets/close.svg';
import { IPokemon } from '../../interfaces/IPokemon';
import { capitalize } from '../../utils/capitalize';
import { Container } from './styles';

interface IPokemonDetailModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  pokemon: IPokemon;
}

export function PokemonDetailModal(
  { isOpen, onRequestClose, pokemon }: IPokemonDetailModalProps) {
  const formattedPokemon = useMemo(() => {
    return {
      ...pokemon,
      height: pokemon.height / 100,
      weight: pokemon.weight / 100,
      abilities: pokemon.abilities.map(ability => capitalize(ability))
    }
  }, [pokemon]);


  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <Container>
        <section className="pokemon-info">
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
          <ul>
            {formattedPokemon.types.map(type => (
              <li key={type} >
                <div className={`background-color-${type}`}>
                  {type}
                </div>
              </li>
            ))}
          </ul>
        </section>
        <section className="complementary-info">
          <div>
            <strong>Altura: </strong>
            <span>
              {formattedPokemon.height} m
            </span>
          </div>
          <div>
            <strong>Peso: </strong>
            <span>
              {formattedPokemon.weight} kg
            </span>
          </div>
          <h3>Habilidades</h3>
          <ul>
            {formattedPokemon.abilities.map(ability => (
              <li key={ability}>
                <span>
                  {ability}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </Container>
    </Modal>
  )
}