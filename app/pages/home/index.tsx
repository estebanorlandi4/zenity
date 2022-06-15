import Container from '../../components/Container';

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
    <Container initial="hidden" animate="visible" variants={variants}>
      asdf
    </Container>
  );
}

export default Home;
