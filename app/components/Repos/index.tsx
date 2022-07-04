import Repo from './repo';
import useRepos from 'hooks/github/useRepos';
import { Container } from './styled';
import { AnimatePresence, Variants } from 'framer-motion';
import { useEffect, useState } from 'react';

const N_PLACEHOLDERS = 3;

interface VariantProps {
  timeout?: number;
  exit_timeout?: number;
}

const variants: Variants = {
  hidden: {
    x: 200,
    opacity: 0,
  },
  fadein: ({ timeout }: VariantProps) => ({
    x: 0,
    opacity: 1,
    transition: { delay: timeout },
  }),

  exit: ({ exit_timeout }: VariantProps) => ({
    x: -200,
    opacity: 0,
    transition: { delay: exit_timeout },
  }),
};

function Repos() {
  const { repos, isLoading } = useRepos({ test: true });

  return (
    <Container>
      <input type="text" />

      {isLoading &&
        Array.from({ length: N_PLACEHOLDERS }).map((_, i) => (
          <Repo
            key={`placeholder-${i}`}
            initial="hidden"
            animate="fadein"
            variants={variants}
            custom={{ timeout: i * 0.5, exit_timeout: i * 0.5 }}
            placeholder
          />
        ))}

      {!isLoading &&
        repos.map((repo: any, i) => (
          <Repo
            key={repo.id}
            initial="hidden"
            animate="fadein"
            variants={variants}
            custom={{ timeout: i * 0.25 }}
            repo={repo}
          />
        ))}
    </Container>
  );
}

export default Repos;
