import useUser from 'hooks/github/useUser';
import styled from 'styled-components';

const User = styled.div`
  .bio {
    width: 20rem;
    background-color: #fff1;
    padding: 1rem;
    border-radius: 5px;
  }
`;

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
  } = user;

  const date = new Date(created_at);

  const total_repos = total_private_repos
    ? total_private_repos + public_repos
    : public_repos;

  return (
    <User>
      <h1>{name}</h1>
      <p className="bio">{bio}</p>
      <time>
        {date.getDate()} / {date.getMonth()} / {date.getFullYear()}
      </time>

      <p>
        {login}
        <span>{location}</span>
      </p>
      <div>{total_repos}</div>
    </User>
  );
}

export default GithubUser;
