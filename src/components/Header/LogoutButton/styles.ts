import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;

  height: 3rem;
  margin-left: 2rem;
  background: transparent;
  padding: 0 2rem;

  font-size: 1.5rem;
  font-weight: 500;
  color: var(--blue-300);

  border-radius: 1.5rem;
  border: 2px solid var(--blue-300);

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  svg {
    margin-right: 0.5rem;
  }
`;