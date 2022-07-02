import Image from 'next/image';
import ExtLink from 'components/ExtLink';

import { AiOutlineCopy } from 'react-icons/ai';
import { RepoContainer } from './styled';

interface Props {
  repo: any;
}

function Repo({ repo }: any) {
  const { languages, clone_url, owner, id, html_url, visibility, name } = repo;

  const clone_repo = (repo: any) => {
    navigator.clipboard.writeText(repo);
  };

  return (
    <RepoContainer visibility={visibility}>
      <div className="repo-left">
        <ExtLink className="repo-name" href={html_url}>
          {name}
        </ExtLink>
        <div>
          <span className="repo-visibility">{visibility}</span>
          {/*
            languages.length ? (
                    <ul className="repo-languages">
                      {languages.map((lang: string) => (
                        <li key={lang}>{lang}</li>
                      ))}
                    </ul>
                  ) : null 
          */}
        </div>
      </div>

      <div className="repo-right">
        <ExtLink className="repo-owner" href={owner.html_url}>
          {owner.login}
          <div className="avatar-container">
            <Image
              height="50px"
              width="50px"
              src={owner.avatar_url}
              alt={owner.login}
              className="repo-avatar"
            />
          </div>
        </ExtLink>

        <button className="repo-clone" onClick={() => clone_repo(clone_url)}>
          clone <AiOutlineCopy className="icon" />
        </button>
      </div>
    </RepoContainer>
  );
}

export default Repo;
