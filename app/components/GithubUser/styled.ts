import styled from 'styled-components';
import ExtLink from 'components/ExtLink';

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  gap: 0.5rem;

  .bio {
    width: 20rem;
    background-color: #2e2e34;
    padding: 1rem;
    border-radius: 5px;
  }

  .full-name {
    font-size: 1.25rem;
  }
`;

export const Contact = styled(ExtLink)`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;
