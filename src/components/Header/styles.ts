import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  background: var(--white);
  width: 100%;

  -webkit-box-shadow: 0 2px 3px 2px var(--gray-200);  
  -moz-box-shadow:    0 2px 3px 2px var(--gray-200);  
  box-shadow:         0 2px 3px 2px var(--gray-200);
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 2rem;

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

  button {
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
  }
`;