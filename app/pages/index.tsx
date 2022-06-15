import { motion } from 'framer-motion';
import styled from 'styled-components';

import ListFavorites from '../components/ListPages';
import Container from '../components/Container';

import useClock from '../hooks/useClock';

import { IDate } from '../utils/interfaces';

const Time = styled.time`
  color: #fff6;
  display: block;
  font-size: 5rem;
  font-weight: 800;
  margin: 0 auto 5rem auto;
  width: max-content;
`;

const Center = styled(motion.div)`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Clock = ({ date }: { date: IDate | null }) => {
  return date ? (
    <Time>
      {date.hh} : {date.mm} : {date.ss}
    </Time>
  ) : (
    <Time>HH : MM : SS</Time>
  );
};

function Landing(): JSX.Element {
  const date = useClock();

  return (
    <Container>
      <Center>
        <Clock date={date} />
        <ListFavorites />
      </Center>
    </Container>
  );
}

export default Landing;
