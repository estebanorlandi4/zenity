import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.ul`
  display: flex;
  flex-flow: column;
  gap: 1rem;
  width: 100%;
  max-width: 40rem;
  margin: 0 auto;

  .column {
    display: flex;
    gap: 0.25rem;
    flex-flow: column;
  }
`;

interface Props {}
export const RepoContainer = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row;
  gap: 1rem;
  padding: 0 0 1rem 0;

  :not(:last-child) {
    border-bottom: 1px solid #fff1;
  }

  .repo-left {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: left;
    gap: 1rem;
    height: 100%;
  }

  .repo-right {
    display: flex;
    flex-flow: column;
    align-items: flex-end;
    gap: 0.75rem;
    justify-content: space-between;
    height: 100%;
  }

  .repo-owner {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #aaa;
    font-weight: 300;
    font-size: 0.8rem;
    :hover {
      color: #fff;
    }
  }

  .avatar-container {
    width: 1.5rem;
    height: 1.5rem;
  }

  .repo-avatar {
    display: block;
    border-radius: 100%;
  }

  .repo-visibility,
  .repo-languages {
    padding: 0.25rem 0.5rem;
    border-radius: 5px;
    font-size: 0.75rem;
    color: #fffa;
    background: #0003;
    margin: 0.5rem 0;
  }
  .repo-visibility {
    background: #0003;
    max-width: max-content;
  }
  .repo-languages {
    display: flex;
    gap: 0.5rem;
  }

  .repo-name {
    font-size: 1rem;
    font-weight: 500;
  }

  .clone-container {
    position: relative;
  }

  .repo-clone {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    color: #888;

    .icon {
      width: 1rem;
      height: 1rem;
    }
    :hover {
      color: #fff;
    }
  }
`;

export const PlaceholderContainer = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 4rem;

  :not(:last-child) {
    border-bottom: 1px solid #fff1;
  }

  .left,
  .right {
    display: flex;
    flex-flow: column;
    gap: 0.5rem;
  }
  .right {
    align-items: flex-end;
  }

  .name,
  .visibility,
  .owner-name,
  .owner-image,
  .clone {
    border-radius: 5px;
    background-color: #35353e;
    animation: blink 2s infinite linear;
    opacity: 1;

    @keyframes blink {
      from {
        opacity: 1;
      }
      50% {
        opacity: 0.5;
      }
      to {
        opacity: 1;
      }
    }
  }

  .name {
    width: 8rem;
    height: 1.35rem;
  }
  .visibility {
    width: 3rem;
    height: 1.25rem;
  }

  .owner {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .owner-name {
    width: 7rem;
    height: 0.75rem;
  }
  .owner-image {
    --size: 1.75rem;
    border-radius: 100%;
    width: var(--size);
    height: var(--size);
  }
  .clone {
    width: 3rem;
    height: 0.75rem;
  }
`;
