import Repo from './repo';
import useRepos from 'hooks/github/useRepos';
import { Container } from './styled';
import { Variants } from 'framer-motion';
import { useState } from 'react';
import { Direction, ReposOptions, Sort } from 'utils/interfaces/github';

import { BiSort } from 'react-icons/bi';

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

const sorts: Sort[] = ['full_name', 'pushed', 'created', 'updated'];
const directions: Direction[] = ['asc', 'desc'];

const sort_labels = {
  full_name: 'Name',
  pushed: 'Pushed',
  created: 'Created',
  updated: 'Updated',
};

function cicleArray<T>(current: T, array: T[]): T {
  const index = array.findIndex((value) => value === current);
  const isLastItem = index + 1 >= array.length;
  return isLastItem ? array[0] : array[index + 1];
}

function Repos() {
  const [options, setOptions] = useState<ReposOptions>({
    search: '',
    sort: 'full_name',
    direction: 'asc',
  });
  const { repos, refetch, isLoading } = useRepos({ search: options.search });

  const handleSort = () => {
    if (!options.sort) return;
    const sort = cicleArray<Sort>(options.sort, sorts);

    refetch({ ...options, sort });
    return setOptions((old) => ({ ...old, sort }));
  };

  const handleDirection = () => {
    if (!options.direction) return;
    const direction = cicleArray<Direction>(options.direction, directions);

    refetch({ ...options, direction });
    return setOptions((old) => ({ ...old, direction }));
  };

  return (
    <Container>
      <div className="filters">
        <input
          className="search"
          type="text"
          value={options.search}
          onChange={(e) =>
            setOptions((old) => ({ ...old, search: e.target.value }))
          }
        />

        <div className="buttons">
          <button className="filter-btn" onClick={handleSort}>
            {options.sort && sort_labels[options.sort]}
          </button>
          <button className="filter-btn" onClick={handleDirection}>
            {options.direction} <BiSort />
          </button>
        </div>
      </div>

      {isLoading ||
        (!repos.length &&
          Array.from({ length: N_PLACEHOLDERS }).map((_, i) => (
            <Repo
              key={`placeholder-${i}`}
              initial="hidden"
              animate="fadein"
              variants={variants}
              custom={{ timeout: i * 0.5, exit_timeout: i * 0.5 }}
              placeholder
            />
          )))}

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
