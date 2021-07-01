import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 3rem 1rem;

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
    margin-left: 3rem;
  }
`;