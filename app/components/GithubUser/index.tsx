import useGithubUser from 'hooks/useGithubUser';
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
  const { user } = useGithubUser();

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
      <div>{total_private_repos + public_repos}</div>
    </User>
  );
}

export default GithubUser;
