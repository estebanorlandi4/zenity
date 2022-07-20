import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-flow: column;
  gap: 1rem;
  padding: 1rem 2rem;
  background-color: #afafff0a;
  border-radius: 0.5rem;
  height: 50vh;

  .name {
    font-size: 1.5rem;
  }

  .owner {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 0.75rem;
    opacity: 0.5;

    .image-container {
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 100%;
      overflow: hidden;
    }
  }
  .languages {
    display: flex;
    width: 100%;

    .language {
      position: relative;
      height: 0.5rem;
      min-width: 0.75rem;
      font-size: 0.7rem;
      font-weight: 600;
      letter-spacing: 0.5px;

      :first-child {
        border-radius: 1rem 0 0 1rem;
      }
      :last-child {
        border-radius: 0 1rem 1rem 0;
      }

      transition: all 0.25s;
      :hover {
        min-width: 10%;
      }
    }
  }
`;
