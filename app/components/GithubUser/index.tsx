import Image from 'next/image';
import { useContext } from 'react';
import { SiGmail, SiTwitter } from 'react-icons/si';

import { Contact, Container } from './styled';
import GithubContext from 'contexts/githubContext';

type Icons = { [icon: string]: string } | null | undefined;
interface Params {
  icons: Icons;
  str: string;
}
const parseIcons = ({ icons, str }: Params) => {
  const codes = str.match(/\:\w+\:/g);
  if (!icons || !codes) return null;
  const parsed: (string | JSX.Element)[] = str.split(':');
  const change: { [key: string]: number } = {};

  codes.map((code: string) => {
    const key = code.split(':').join('');
    const index = parsed.findIndex((value) => value === key);

    change[key] = index;
  });

  Object.entries(change).map(([key, value]: [key: string, value: number]) => {
    const icon = icons[key];
    parsed[value] = (
      <Image key={value} width="20px" height="20px" alt="" src={icon} />
    );
  });
  return parsed;
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
