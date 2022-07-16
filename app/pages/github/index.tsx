import GithubUser from 'components/GithubUser';
import Navbar from 'components/Navbar';
import Repos from 'components/Repos';
import { GithubProvider } from 'contexts/githubContext';

const styles = {
  padding: '5rem 0 0 0',
  width: '90%',
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: 'minmax(20rem, 1fr) 1fr minmax(20rem, 1fr)',
};

function Github() {
  return (
    <GithubProvider>
      <Navbar />

      <main style={styles}>
        <GithubUser />
        <Repos />
        <div />
      </main>
    </GithubProvider>
  );
}

export default Github;
