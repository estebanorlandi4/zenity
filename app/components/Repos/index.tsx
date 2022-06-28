import ExtLink from 'components/ExtLink';
import useRepos from 'hooks/github/useRepos';
import { HTMLProps, useEffect } from 'react';
import { Container, Repo } from './styled';

interface Props extends HTMLProps<HTMLLIElement> {}

function Repos({}: Props) {
  const { repos } = useRepos();

  useEffect(() => {
    console.log(repos);
  }, []);

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
