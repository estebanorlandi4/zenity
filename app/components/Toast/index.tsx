import styled from 'styled-components';
import { motion, Variants } from 'framer-motion';

const Container = styled(motion.div)`
  position: absolute;
  z-index: 5555;
  left: 50%;

  background-color: #000;
  color: #fff;
  border-radius: 5px;
  padding: 0.25rem 0.75rem;
  font-size: 0.75em;
  box-shadow: 0 0.25rem 0.5rem #0003;
`;

const variants: Variants = {
  hide: {
    y: '-100%',
    x: '-50%',
    opacity: 0,
  },
  show: {
    y: '-150%',
    x: '-50%',
    opacity: 1,
  },
};

interface Props {
  label: string;
}
function Toast({ label }: Props) {
  return (
    <Container exit="hide" initial="hide" animate="show" variants={variants}>
      {label}
    </Container>
  );
}

export default Toast;
