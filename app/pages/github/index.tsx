import { NextPageContext } from 'next';
import GithubUser from 'components/GithubUser';
import Navbar from 'components/Navbar';
import RepoDetails from 'components/RepoDetails';
import Repos from 'components/Repos';
import { GithubProvider } from 'contexts/githubContext';
import { getSession } from 'next-auth/react';

const styles = {
  padding: '5rem 0 0 0',
  width: '90%',
  margin: '0 auto 2vh auto',
  display: 'grid',
  gridTemplateColumns: 'minmax(20rem, 1fr) 1fr minmax(20rem, 1fr)',
  gap: '3rem',
};

function Github() {
  return (
    <GithubProvider>
      <Navbar />

      <main style={styles}>
        <GithubUser />
        <Repos />
        <RepoDetails />
      </main>
    </GithubProvider>
  );
}

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession();
  if (!session)
    return { props: {}, redirect: { permanent: false, destination: '/' } };
  return { props: {} };
}

export default Github;
