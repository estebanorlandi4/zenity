import styled from 'styled-components';

import ListShortcuts from 'components/ListShortcuts';
import Container from 'components/Container';
import Clock from 'components/Clock';

const Center = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  height: 100%;
`;

function Landing(): JSX.Element {
  return (
    <Container>
      <Center>
        <Clock />
        <ListShortcuts />
      </Center>
    </Container>
  );
}

export default Landing;
