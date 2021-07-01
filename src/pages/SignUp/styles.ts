import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background: var(--orange-700);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  background: var(--white);
  width: 435px;
  padding: 3rem 2.5rem;
  border-radius: 0.25rem;  

  form {
    display: flex;
    flex-direction: column;
    align-items: center;    

    input {
      height: 3.5rem;
      width: 100%;
      border-radius: 0.25rem;

      border: 1px solid var(--gray-400);
      
      font-size: 1rem;
      font-weight: 400;
      padding: 0 1.5rem;

      &::placeholder {
        color: var(--gray-600);
      }

      & + input {
        margin-top: 1rem;
      }
    }

    button[type="submit"] {
      width: 100%;
      padding: 0 1.5rem;
      height: 3.5rem;
      background: var(--orange-400);
      color: #FFF;
      border-radius: 0.25rem;
      border: 0;
      font-size: 1rem;
      margin-top: 1.5rem;
      font-weight: bold;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }

    a {
      margin-top: 1.5rem;
      color: #6e7fab;
      font-weight: bold;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`;