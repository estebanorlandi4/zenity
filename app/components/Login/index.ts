import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #0e0e10;
  height: 100vh;

  .decoration {
    display: block;

    background: url('/static/decoration.png');
    background-size: cover;
    background-position: center;

    width: 35vw;
    height: 100%;
  }

  .form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;

    > div {
      display: flex;
      flex-flow: column;
      align-items: flex-start;
      gap: 2rem;
    }
  }

  h2 {
    margin: 0 0 0.5rem 0;
    font-size: 2rem;
  }
  p {
    opacity: 0.25;
    max-width: 30rem;
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
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2rem 1rem 1rem;
  height: 3rem;
  border-radius: 5px;
  font-weight: bold;

  ${({ bg }: { bg: string }) =>
    bg &&
    css`
      color: ${bg};
    `};
  background: #fff1;
  :hover {
    background: #ffffff1e;
  }
`;
