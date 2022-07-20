import { useRepoDetails } from 'contexts/githubContext';
import Image from 'next/image';
import Colors from 'assets/colors.json';
import { Section } from './styled';

const colors: { [key: string]: string | null } = Colors;

function RepoDetails() {
  const { repo_details, update } = useRepoDetails();

  if (!repo_details) return <div />;

  const { name, owner, created_at, default_branch, languages } = repo_details;

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

      <ul className="languages">
        {languages.map((language: string, i) => (
          <li
            key={language + i}
            style={{ backgroundColor: colors[language] || '#fff1' }}
            className="language"
          >
            {language}
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default RepoDetails;
