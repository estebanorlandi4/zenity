import { useRepoDetails } from 'contexts/githubContext';
import Image from 'next/image';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  flex-flow: column;
  gap: 1rem;
  padding: 1rem 2rem;
  background-color: #afafff0a;
  border-radius: 0.5rem;

  .name {
    font-size: 1.5rem;
  }

  .owner {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 0.75rem;
    opacity: 0.5;

    .image-container {
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 100%;
      overflow: hidden;
    }
  }
`;

function RepoDetails() {
  const { repo_details, update } = useRepoDetails();

  if (!repo_details) return <div />;

  console.log(repo_details);
  const { name, owner, created_at, default_branch } = repo_details;

  const time = created_at ? new Date(created_at) : null;
  return (
    <Section>
      <button onClick={() => update(null)}>remove</button>
      <h3 className="name">{name}</h3>

      {owner ? (
        <div className="owner">
          <div className="image-container">
            <Image width="70px" height="70px" src={owner.avatar_url} alt="" />
          </div>
          <h4>{owner.login}</h4>
        </div>
      ) : null}

      <p>
        Created at:
        <time>
          {time?.getDate()}/{time?.getMonth()}/{time?.getFullYear()}
        </time>
      </p>

      <p>{default_branch}</p>
    </Section>
  );
}

export default RepoDetails;
