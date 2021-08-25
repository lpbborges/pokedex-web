import styled from 'styled-components';

export const Container = styled.section`
  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;

    @media (max-width: 1080px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 720px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
