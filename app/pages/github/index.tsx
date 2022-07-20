import GithubUser from 'components/GithubUser';
import Navbar from 'components/Navbar';
import RepoDetails from 'components/RepoDetails';
import Repos from 'components/Repos';
import { GithubProvider, useGithub } from 'contexts/githubContext';
import privateFactory from 'utils/privateFactory';

const getStyles = (hasDetails: boolean) => ({
  padding: '5rem 0 0 0',
  width: '90%',
  margin: '0 auto 2vh auto',
  display: 'grid',
  gridTemplateColumns: `minmax(20rem, auto) 1fr ${
    hasDetails ? 'minmax(20rem, auto)' : ''
  }`,
  gap: '3rem',
});

interface Props {
  children: JSX.Element | string | (JSX.Element | string)[];
}
function Main({ children }: Props) {
  const { repo_details } = useGithub();
  return <main style={getStyles(!!repo_details)}>{children}</main>;
}

function Github() {
  return (
    <GithubProvider>
      <Navbar />

      <Main>
        <GithubUser />
        <Repos />
        <RepoDetails />
      </Main>
    </GithubProvider>
  );
}

export const getServerSideProps = privateFactory({ permanent: false });

export default Github;
