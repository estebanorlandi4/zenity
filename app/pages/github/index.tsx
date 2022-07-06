import GithubUser from 'components/GithubUser';
import Navbar from 'components/Navbar';
import Repos from 'components/Repos';
import SearchGithubUser from 'components/SearchGithubUser';

const styles = {
  padding: '5rem 2rem 0 2rem',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '3rem',
};

function Github() {
  return (
    <div>
      <Navbar />
      <main style={styles}>
        <GithubUser />
        <Repos />
        <SearchGithubUser />
      </main>
    </div>
  );
}

export default Github;
