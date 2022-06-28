import axios from 'axios';
import ExtLink from 'components/ExtLink';
import useRepos from 'hooks/github/useRepos';
import Image from 'next/image';
import { HTMLProps, useEffect } from 'react';
import { Container, Repo } from './styled';

interface Props extends HTMLProps<HTMLLIElement> {}

function Repos({}: Props) {
  const { repos } = useRepos();

  if (repos && repos.length) console.log(repos[0]);

  useEffect(() => {
    const promise = async () => {
      await axios(`https://`);
    };
  }, []);

  const clone_repo = (repo: any) => {
    console.log(repo);
  };

  return (
    <Container>
      {repos.map(
        ({ clone_url, owner, id, html_url, visibility, name }: any) => (
          <Repo key={id} visibility={visibility}>
            <div className="repo-left">
              <Image
                height="50px"
                width="50px"
                src={owner.avatar_url}
                alt={owner.login}
                className="repo-avatar"
              />
              <div className="column">
                <ExtLink className="repo-name" href={html_url}>
                  {name}
                </ExtLink>
                <span className="repo-visibility">{visibility}</span>
              </div>
            </div>

            <div className="repo-right">
              <ExtLink className="repo-owner" href={owner.html_url}>
                {owner.login}
              </ExtLink>
              <button onClick={() => clone_repo(clone_url)}>clone</button>
            </div>
          </Repo>
        ),
      )}
    </Container>
  );
}

export default Repos;
