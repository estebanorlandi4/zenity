import Repo from './repo';
import useRepos from 'hooks/github/useRepos';
import { Container } from './styled';
import { Variants } from 'framer-motion';

const N_PLACEHOLDERS = 5;

interface VariantProps {
  timeout?: number;
  exit_timeout?: number;
}

const variants: Variants = {
  hidden: {
    y: 200,
    opacity: 0,
  },
  fadein: ({ timeout }: VariantProps) => ({
    y: 0,
    opacity: 1,
    transition: { delay: timeout },
  }),

  exit: ({ exit_timeout }: VariantProps) => ({
    y: -200,
    opacity: 0,
    transition: { delay: exit_timeout },
  }),
};

function Repos() {
  const { repos, isLoading } = useRepos();

  return (
    <Container>
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
        repos.map(
          (repo, i) =>
            repo && (
              <Repo
                key={repo.id}
                initial="hidden"
                animate="fadein"
                variants={variants}
                custom={{ timeout: i * 0.25 }}
                repo={repo}
              />
            ),
        )}
    </Container>
  );
}

export default Repos;
