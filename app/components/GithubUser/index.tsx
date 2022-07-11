import Image from 'next/image';
import { useContext } from 'react';
import { SiGmail, SiTwitter } from 'react-icons/si';

import GithubContext from 'contexts/githubContext';
import { Contact, Container } from './styled';
import { Icons } from 'utils/interfaces/github';

interface Params {
  icons: Icons | null;
  str: string;
}
const parseIcons = ({ icons, str }: Params) => {
  const codes = str.match(/\:\w+\:/g);
  if (!icons || !codes) return str;

  const words = str.split(/\s/g);

  return words.map((word) => {
    if (!/\:\w+\:/.test(word)) return `${word} `;

    const icon = icons[word.replaceAll(/\:/gi, '')];
    return (
      <span key={word} className="icon-container">
        <Image width="20px" height="20px" alt="" src={icon} />
      </span>
    );
  });
};

function GithubUser() {
  const { icons, user } = useContext(GithubContext);

  if (!user) return <div />;
  const {
    bio,
    blog,
    created_at,
    location,
    login,
    name,
    public_repos,
    total_private_repos,
    id,
    email,
    twitter_username,
  } = user;

  const date = new Date(created_at);

  const total_repos = total_private_repos
    ? total_private_repos + public_repos
    : public_repos;

  const parsedBio = bio && parseIcons({ icons, str: bio });

  return (
    <Container>
      <h2 className="full-name">{name}</h2>
      <div>
        <div>{location}</div>
        <div>{login}</div>
      </div>

      <time>
        {date.getDate()} / {date.getMonth()} / {date.getFullYear()}
      </time>

      <p className="bio">{parsedBio}</p>
      {email && (
        <Contact href={`mailto:${email}`}>
          <SiGmail />
          {email}
        </Contact>
      )}
      {twitter_username && (
        <Contact href={`https://www.twitter.com/${twitter_username}`}>
          <SiTwitter />
          {twitter_username}
        </Contact>
      )}
    </Container>
  );
}

export default GithubUser;
