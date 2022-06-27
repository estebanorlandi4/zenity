import styled, { css } from 'styled-components';

export const Container = styled.div`
  height: max-content;
  border-radius: 0.5rem;
  width: 100%;

  .form {
    max-width: 20rem;
    margin: 10vh auto;
  }

  h2 {
    margin: 0 0 0.5rem 0;
    text-align: center;
    font-size: 2rem;
  }

  .providers {
    display: flex;
    justify-content: center;
    flex-flow: row;
    gap: 1rem;
    padding: 0.5rem 0 0 0;
  }
  .random-img {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
    object-position: bottom;
  }
  .decoration {
    display: block;
    position: relative;
    aspect-ratio: 1/1;
    width: 100%;
    height: 55vh;
  }
`;

export const Button = styled.button`
  display: grid;
  place-items: center;
  width: 3.5rem;
  height: 3rem;
  border-radius: 5px;
  font-weight: bold;

  ${({ bg }: { bg: string }) =>
    bg &&
    css`
      color: ${bg};
    `};
  background: #fff1;
`;
