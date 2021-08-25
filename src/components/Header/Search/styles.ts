import styled from "styled-components";

export const Input = styled.input`
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
`;