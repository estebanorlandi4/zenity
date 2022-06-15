import { motion } from 'framer-motion';
import styled from 'styled-components';

import ListFavorites from '../components/ListPages';
import Container from '../components/Container';
import Clock from '../components/Clock';

const Center = styled(motion.div)`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 5rem;
`;

function Landing(): JSX.Element {
  return (
    <Container>
      <Center>
        <Clock />

        <ListFavorites />
      </Center>
    </Container>
  );
}

export default Landing;
