import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 3rem 2.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    width: 100%;
    height: 3rem;
    padding: 1.5rem 1rem;

    border: 1px solid var(--gray-100);
    border-radius: 0.25rem;

    font-size: 1.3rem;
    color: var(--gray-600);

    &::placeholder {
      color: var(--gray-200);
    }
  }

  section {
    margin-top: 2rem;
  }

  button {
    height: 3rem;
    margin-top: 2rem;
    background: #6e7fab;
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