import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  gap: 0.5rem;

  .bio {
    width: 20rem;
    background-color: #fff1;
    padding: 1rem;
    border-radius: 5px;
  }

  .full-name {
    font-size: 1.25rem;
  }
`;
