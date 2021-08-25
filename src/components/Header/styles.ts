import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  background: var(--white);
  width: 100%;

  -webkit-box-shadow: 0 2px 3px 2px var(--gray-200);
  -moz-box-shadow: 0 2px 3px 2px var(--gray-200);
  box-shadow: 0 2px 3px 2px var(--gray-200);
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 2rem;
`;
