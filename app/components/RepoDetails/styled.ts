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
    gap: 0.5rem;

    .language {
      padding: 0.25rem 0.5rem;
      font-size: 0.85rem;
    }
  }
`;
