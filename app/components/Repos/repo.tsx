import Image from 'next/image';
import ExtLink from 'components/ExtLink';

import { AiOutlineCopy } from 'react-icons/ai';
import { PlaceholderContainer, RepoContainer } from './styled';
import { toClipboard } from 'utils/toClipboard';
import { AnimatePresence, MotionProps } from 'framer-motion';
import { useEffect, useState } from 'react';
import Toast from 'components/Toast';
import { RepoWithLanguages } from 'utils/interfaces/github';
import { Placeholder } from 'components/Placeholder';

interface Props extends MotionProps {
  repo?: RepoWithLanguages;
  placeholder?: boolean;
}

function Repo({ repo, placeholder, ...others }: Props) {
  const [cloned, setCloned] = useState(false);
  useEffect(() => {
    const timeout = cloned
      ? setTimeout(() => setCloned(false), 1.5 * 1000)
      : null;
    return () => {
      timeout && clearTimeout(timeout);
    };
  }, [cloned]);

  if (placeholder)
    return (
      <PlaceholderContainer>
        <div className="left">
          <Placeholder size={['10rem', '1.5rem']} />
          <Placeholder size={['5rem', '1rem']} />
        </div>
        <div className="right">
          <div className="owner">
            <Placeholder size={['7rem', '1rem']} />
            <Placeholder size={['1.75rem', '1.75rem']} />
          </div>
          <Placeholder size={['5rem', '.9rem']} />
        </div>
      </PlaceholderContainer>
    );

  if (!repo) return null;
  const { clone_url, owner, html_url, visibility, name } = repo;
  const handleCopy = (value: string) => {
    toClipboard(value);
    setCloned(true);
  };

  return (
    <RepoContainer {...others}>
      <div className="repo-left">
        <ExtLink className="repo-name" href={html_url}>
          {name}
        </ExtLink>
        <div>
          <span className="repo-visibility">{visibility}</span>
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

        <div className="clone-container">
          <AnimatePresence>
            {cloned && <Toast label="Copied!" />}
          </AnimatePresence>
          <button className="repo-clone" onClick={() => handleCopy(clone_url)}>
            clone <AiOutlineCopy className="icon" />
          </button>
        </div>
      </div>
    </RepoContainer>
  );
}

export default Repo;

/*
            languages.length ? (
                    <ul className="repo-languages">
                      {languages.map((lang: string) => (
                        <li key={lang}>{lang}</li>
                      ))}
                    </ul>
                  ) : null 
          */
