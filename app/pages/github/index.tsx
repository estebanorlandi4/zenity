import GithubUser from 'components/GithubUser';
import Navbar from 'components/Navbar';
import Repos from 'components/Repos';
import SearchGithubUser from 'components/SearchGithubUser';
import { IconsProvider } from 'contexts/iconsContext';

const styles = {
  padding: '5rem 2rem 0 2rem',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '3rem',
};

function Github() {
  return (
    <IconsProvider>
      <Navbar />
      <main style={styles}>
        <GithubUser />
        <Repos />
        <SearchGithubUser />
      </main>
    </IconsProvider>
  );
}

export default Github;
