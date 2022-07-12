import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

import { pink } from 'utils/styled';

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

  h2,
  p {
    color: #aaa;
  }

  h2 {
    margin: 0 0 0.5rem 0;
    font-size: 2.5rem;
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

export const Button = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2rem 1rem 1rem;
  height: 3rem;
  border-radius: 5px;
  font-weight: bold;

  background: #fff1;
  transform: translate(0, 0);
  transition: all 0.25s;

  :hover {
    background: var(--pink);
    transform: translate(0, -5px);
    box-shadow: 0 0.6rem 1rem -0.5rem ${pink`38`};
  }
`;
