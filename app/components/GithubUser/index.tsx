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
  } = user;
  console.log({});

  return (
    <User>
      <h1>{name}</h1>
      <p className="bio">{bio}</p>
      <time>{created_at}</time>

      <p>
        {login}
        <span>{location}</span>
      </p>
    </User>
  );
}

export default GithubUser;
