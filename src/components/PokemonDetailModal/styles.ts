import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  section.pokemon-info {
    figure {
      background: var(--gray-50);

      img {
        width: 240px;
        background: transparent;      
      }
    }

    div {
      padding: 0 0.5rem;
      margin-top: 1rem;

      span {
        font-size: 1.2rem;
        color: var(--gray-200);
        font-weight: bold;
      }

      strong {
        font-size: 1.5rem;
        color: var(--gray-800);
        margin-left: 0.5rem;
      }
    }

    ul {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;

      li {
        div {
          border: 1px solid var(--gray-200);
          text-align: center;
          border-radius: 0.25rem;
          font-size: 1.1rem;
          line-height: 2rem;
        }
      }
    }
  }

  section.complementary-info {
    margin-left: 2rem;

    div {
      strong {
        font-size: 1.2rem;
        color: var(--gray-800);
      }

      span {
        font-size: 1.2rem;
        color: var(--gray-400);
      }

      & + div {
        margin-top: 1rem;
      }
    }    

    h3 {
    margin-top: 1rem;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1rem;

    li {
      margin-top: 0.5rem;
      
      span {
        font-size: 1.1rem;
        color: var(--gray-400);
      }
    }
  }
  }

  
`;