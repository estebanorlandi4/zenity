import ExtLink from 'components/ExtLink';
import useRepos from 'hooks/github/useRepos';
import { Container, Repo } from './styled';

function Repos() {
  const { repos } = useRepos();
  return (
    <Container>
      {repos.map(({ id, html_url, visibility, name }: any) => (
        <Repo key={id}>
          <ExtLink className="repo-link" href={html_url}>
            {name}
          </ExtLink>
        </Repo>
      ))}
    </Container>
  );
}

export default Repos;
