import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: row;
  gap: 1rem;
  background-color: #0e0e15;
  height: max-content;
  padding: 1rem;
  margin: 10vh auto;
  border-radius: 0.5rem;
`;

export const Button = styled.button`
  display: grid;
  place-items: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 5px;
  font-weight: bold;

  ${({ bg }: { bg: string }) =>
    bg &&
    css`
      background: ${bg};
    `};
`;
