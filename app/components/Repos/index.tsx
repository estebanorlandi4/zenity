import Repo from './repo';
import useRepos from 'hooks/github/useRepos';
import { Container } from './styled';

function Repos() {
  const { repos, isLoading } = useRepos({ test: true });

  return (
    <Container>
      <input type="text" />

      {true && <p>loading...</p>}

      {false && repos.map((repo: any) => <Repo key={repo.id} repo={repo} />)}
    </Container>
  );
}

export default Repos;
