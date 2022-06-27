import styled from 'styled-components';

import Clock from 'components/Clock';
import ListShortcuts from 'components/ListShortcuts';
import Navbar from 'components/Navbar';
import useRepos from 'hooks/github/useRepos';
import ExtLink from 'components/ExtLink';
import Repos from 'components/Repos';

const Container = styled.div`
  min-height: 100vh;

  .center {
    height: 100vh;
    display: grid;
    place-items: center;
  }

  .shortcuts {
    display: flex;
    flex-flow: column;
    gap: 10vh;
    margin: 1rem 0 0 0;
  }
`;

function Landing() {
  const { repos } = useRepos();
  console.log(repos);
  return (
    <Container>
      <Navbar />
      <div className="center">
        <div className="shortcuts">
          <Clock />
          <ListShortcuts />
        </div>
      </div>

      <section>
        <h2>Repos</h2>
        <Repos />
      </section>
    </Container>
  );
}

export default Landing;
