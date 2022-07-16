import Repo from './repo';
import useRepos from 'hooks/github/useRepos';
import { Container } from './styled';
import { Variants } from 'framer-motion';
import { useState } from 'react';

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

interface Options {
  search?: string;
  sort?: 'full_name' | 'pushed' | 'created' | 'updated';
  direction?: 'asc' | 'desc';
}
function Repos() {
  const [options, setOptions] = useState<Options>({
    search: '',
    sort: 'full_name',
    direction: 'asc',
  });
  const { repos, isLoading } = useRepos(options);

  const handleSort = () => {
    const arr: Options['sort'][] = [
      'full_name',
      'pushed',
      'created',
      'updated',
    ];
    const index = arr.findIndex((value) => options.sort === value);
    if (index + 1 >= arr.length)
      return setOptions((old) => ({ ...old, sort: arr[0] }));
    return setOptions((old) => ({ ...old, sort: arr[index + 1] }));
  };

  const handleDirection = () => {
    const arr: Options['direction'][] = ['asc', 'desc'];
    const index = arr.findIndex((value) => options.direction === value);
    if (index + 1 >= arr.length)
      return setOptions((old) => ({ ...old, direction: arr[0] }));
    return setOptions((old) => ({ ...old, direction: arr[index + 1] }));
  };

  return (
    <Container>
      <div>
        <input
          type="text"
          value={options.search}
          onChange={(e) =>
            setOptions((old) => ({ ...old, search: e.target.value }))
          }
        />
        <button onClick={handleSort}>{options.sort}</button>
        <button onClick={handleDirection}>{options.direction}</button>
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
