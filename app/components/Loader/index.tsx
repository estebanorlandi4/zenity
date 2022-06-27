import styled from 'styled-components';

const Container = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
  aspect-ratio: 1/1;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border: 3px solid #fff;
    border-radius: 100%;
    animation: lds-ring 1.75s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;
  }

  div:nth-child(1) {
    animation-delay: -0.45s;
  }
  div:nth-child(2) {
    animation-delay: -0.3s;
  }
  div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

function Loader() {
  return (
    <Container>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Container>
  );
}

export default Loader;
