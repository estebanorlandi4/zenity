import { useRepoDetails } from 'contexts/githubContext';
import Image from 'next/image';
import Colors from 'assets/colors.json';
import { Section } from './styled';
import getContrastColor from 'utils/getContrastColor';

const colors: { [key: string]: string | null } = Colors;

function RepoDetails() {
  const { repo_details, update } = useRepoDetails();

  if (!repo_details) return <div />;

  const { name, owner, created_at, default_branch, languages } = repo_details;

  languages;

  const time = created_at ? new Date(created_at) : null;
  return (
    <Section>
      <button onClick={() => update(null)}>remove</button>
      <ul className="languages">
        {languages.map((language, i) => (
          <li
            key={language.name + i}
            style={{
              backgroundColor: colors[language.name] || '#ffffff',
              color: getContrastColor(colors[language.name] || '#ffffff'),
              width: `${language.percentage}%`,
            }}
            className="language"
          ></li>
        ))}
      </ul>

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
