import styled from 'styled-components';

import ListFavorites from 'front/components/ListPages';
import Container from 'front/components/Container';
import Clock from 'front/components/Clock';

const Center = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 5rem;
`;

function Landing(): JSX.Element {
  return (
    <Container>
      <Center>
        <Clock />
        <ListFavorites />
      </Center>
      <div>hola</div>
    </Container>
  );
}

export default Landing;
