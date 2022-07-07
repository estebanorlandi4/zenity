import Image from 'next/image';
import ExtLink from 'components/ExtLink';

import { AiOutlineCopy } from 'react-icons/ai';
import { PlaceholderContainer, RepoContainer } from './styled';
import { toClipboard } from 'utils/toClipboard';
import { AnimatePresence, MotionProps } from 'framer-motion';
import { useEffect, useState } from 'react';
import Toast from 'components/Toast';

function Placeholder(props: MotionProps) {
  return (
    <PlaceholderContainer {...props}>
      <div className="left">
        <div className="name"></div>
        <div className="visibility"></div>
      </div>
      <div className="right">
        <div className="owner">
          <span className="owner-name"></span>
          <span className="owner-image"></span>
        </div>
        <div className="clone"></div>
      </div>
    </PlaceholderContainer>
  );
}

interface Props extends MotionProps {
  repo?: any;
  placeholder?: boolean;
}

function Repo({ repo, placeholder, ...others }: Props) {
  const [cloned, setCloned] = useState(false);
  useEffect(() => {
    if (cloned) setTimeout(() => setCloned(false), 1.5 * 1000);
  }, [cloned]);

  if (placeholder) return <Placeholder {...others} />;

  const { languages, clone_url, owner, id, html_url, visibility, name } = repo;
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
            {cloned && <Toast label="Cloned!" />}
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
