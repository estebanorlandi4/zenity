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
  height: 100vh;
`;

interface Props {
  time: number;
}

function Landing({ time }: Props) {
  return (
    <Container>
      <Center>
        <Clock server={time} />
        <ListShortcuts />
      </Center>
    </Container>
  );
}

export async function getServerSideProps() {
  const time = new Date().getTime();
  return { props: { time } };
}

export default Landing;
