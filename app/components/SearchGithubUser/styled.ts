import styled from 'styled-components';
import ExtLink from 'components/ExtLink';
import { Variants } from 'framer-motion';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  gap: 1rem;
  height: max-content;
  width: 100%;
  max-width: 30rem;

  .search {
    width: 100%;
  }

  .search-input {
    width: 100%;
  }
`;

export const Users = styled.ul`
  position: absolute;
  top: 100%;
  display: flex;
  flex-flow: column;
  gap: 0.5rem;
  background-color: #1e1e25;
  width: 100%;
  height: 10rem;
  overflow: hidden;
  overflow-y: scroll;
  padding: 0.5rem 1rem 1rem 1rem;
  border-radius: 0 0 0.25rem 0.25rem;

  :not(:last-child) {
    background-color: red;
  }
`;

export const User = styled(ExtLink)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;

  p {
    color: #888;
    font-size: 0.9rem;
  }

  :hover p {
    color: #ddd;
  }

  .avatar-container {
    position: relative;
    width: 2rem;
    height: 2rem;
  }

  .avatar {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 100%;
  }
`;

export const variants: Variants = {
  hidden: {
    x: '100%',
    opacity: 0,
  },
  show: ({ delay }) => ({
    x: 0,
    opacity: 1,

    transition: { delay },
  }),
  toLeft: {
    x: '100%',
    scale: 0,
  },
};
