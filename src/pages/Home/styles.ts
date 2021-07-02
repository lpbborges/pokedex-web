import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 8rem 2.5rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;  

  section {
    margin-top: 2rem;
  }

  button {
    height: 3rem;
    margin-top: 2rem;
    background: var(--blue-300);
    padding: 0 2rem;

    font-size: 1.5rem;
    font-weight: 500;
    color: var(--white);

    border-radius: 0.25rem;
    border: 0;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;