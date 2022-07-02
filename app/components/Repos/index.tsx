import useRepos from 'hooks/github/useRepos';
import { HTMLProps } from 'react';
import Repo from './repo';
import { Container } from './styled';

interface Props extends HTMLProps<HTMLLIElement> {}

function Repos({}: Props) {
  const { repos } = useRepos();

  console.log(repos[1]);

  return (
    <Container>
      <input type="text" />

      {repos.map((repo: any) => (
        <Repo key={repo.id} repo={repo} />
      ))}
    </Container>
  );
}

export default Repos;
