import { useContext } from 'react';
import { SiGmail, SiTwitter } from 'react-icons/si';
import { GoLocation } from 'react-icons/go';

import GithubContext from 'contexts/githubContext';
import { Contact, Container } from './styled';
import { Placeholder } from 'components/Placeholder';
import parseIcons from 'utils/parseIcons';

function GithubUser() {
  const { icons, user } = useContext(GithubContext);

  const contact = (
    <div>
      <Placeholder size={['1.5rem', '1.5rem']} />
      <Placeholder size={['15rem', '1.25rem']} />
    </div>
  );

  if (!user)
    return (
      <Container>
        <Placeholder size={['15rem', '1.25rem']} />

        <div className="location placeholder">
          <Placeholder size={['10rem', '.9rem']} />
          <Placeholder size={['7rem', '1rem']} />
        </div>

        <div className="bio placeholder">
          <Placeholder size={['20rem', '7rem']} radius=".5rem" />
        </div>

        <div className="contacts placeholder">
          {Array.from({ length: 2 }).map(() => contact)}
        </div>
      </Container>
    );
  const { bio, created_at, location, login, name, email, twitter_username } =
    user;

  const date = new Date(created_at);

  const parsedBio = bio && parseIcons({ icons, str: bio, size: '20px' });

  return (
    <Container>
      <h2 className="full-name">{name}</h2>
      <div>
        <div className="location">
          <GoLocation size={14} />
          {location}
        </div>
        <div className="username">{login}</div>
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
