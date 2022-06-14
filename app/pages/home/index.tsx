import { motion } from 'framer-motion';
import styled from 'styled-components';

const Main = styled(motion.main)`
  background-color: red;
`;

const variants = {
  visible: {
    x: 0,
    opacity: 1,
  },
  hidden: {
    x: '-100%',
    opacity: 0,
  },
};

function Home() {
  return (
    <Main initial="hidden" animate="visible" variants={variants}>
      asdf
    </Main>
  );
}

export default Home;
