import ExtLink from 'components/ExtLink';
import useUser from 'hooks/github/useUser';
import { SiTwitter } from 'react-icons/si';
import { Container } from './styled';

function GithubUser() {
  const { user } = useUser();

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

  console.log(user);

  const date = new Date(created_at);

  const total_repos = total_private_repos
    ? total_private_repos + public_repos
    : public_repos;

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

      <p className="bio">{bio}</p>
      {email && <ExtLink href={`mailto:${email}`}>{email}</ExtLink>}
      {twitter_username && (
        <ExtLink href={`https://www.twitter.com/${twitter_username}`}>
          <SiTwitter />
          {twitter_username}
        </ExtLink>
      )}
    </Container>
  );
}

export default GithubUser;
