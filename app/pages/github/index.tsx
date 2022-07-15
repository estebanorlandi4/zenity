import GithubUser from 'components/GithubUser';
import Navbar from 'components/Navbar';
import Repos from 'components/Repos';
import { GithubProvider } from 'contexts/githubContext';

const styles = {
  padding: '5rem 0 0 0',
  width: '90%',
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: 'minmax(22rem, auto) 1fr',
  gap: '3rem',
};

function Github() {
  return (
    <GithubProvider>
      <Navbar />

      <main style={styles}>
        <GithubUser />
        <Repos />
      </main>
    </GithubProvider>
  );
}

export default Github;
