import styled from 'styled-components';
import { pink } from 'utils/styled';

export const Container = styled.div`
  font-size: calc(1rem + 2vw);
  width: 100%;
  height: 100vh;
  place-items: center;
  background-color: #0e0e10;

  .message {
    margin: 25vh 0;
  }

  .decoration-container {
    position: relative;
    width: 100%;
    height: 5rem;

    .decoration {
      width: 100%;
      height: 100%;
    }
  }

  .text {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;

    gap: 1rem;
    align-items: center;
    padding: 2rem 0 2rem 0;

    h2 {
      font-size: 2.5rem;
      letter-spacing: 1px;
    }
    p {
      font-size: 1rem;
      font-weight: 300;
      letter-spacing: 0.5px;
      color: #888;
    }
  }

  .instant {
    font-weight: bold;
    margin: 2rem 0 0 0;
    color: ${pink()};
    text-decoration: underline;
    padding: 1rem;
  }
`;
