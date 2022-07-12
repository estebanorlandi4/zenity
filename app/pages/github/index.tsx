import GithubUser from 'components/GithubUser';
import Navbar from 'components/Navbar';
import Repos from 'components/Repos';
import { GithubProvider } from 'contexts/githubContext';

const styles = {
  padding: '5rem 2rem 0 2rem',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
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
