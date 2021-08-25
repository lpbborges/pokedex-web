import styled from 'styled-components';

export const Container = styled.li`
  width: 200px;
  display: flex;
  flex-direction: column;

  cursor: pointer;

  border: 1px solid var(--gray-50);
  border-radius: 0.25rem;

  transition: border-color 0.2s;

  &:hover {
    border-color: var(--gray-200);
  }

  figure {
    background: var(--gray-100);

    img {
      width: 200px;
      background: transparent;
    }
  }

  div {
    padding: 0.6rem;

    span {
      font-size: 0.8rem;
      color: var(--gray-200);
      font-weight: bold;
    }

    strong {
      font-size: 1.2rem;
      color: var(--gray-800);
      margin-left: 0.5rem;
    }
  }
`;
