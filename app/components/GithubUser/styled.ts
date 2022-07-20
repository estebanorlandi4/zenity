import styled from 'styled-components';
import ExtLink from 'components/ExtLink';

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  gap: 0.5rem;
  width: max-content;

  .bio {
    width: 20rem;
    background-color: #1e1e22;
    color: #b5b5b5;
    font-size: 0.9rem;
    padding: 1rem;
    border-radius: 5px;

    .icon-container {
      display: inline-flex;
      align-items: center;
      width: 1.25rem;
      height: 1.25rem;
      transform: translate(0, 17%);
    }

    &.placeholder {
      margin: 1rem 0;
      background-color: transparent;
      padding: 0;
    }
  }

  .full-name {
    font-size: 1.25rem;
  }

  .contacts.placeholder {
    display: flex;
    flex-flow: column;
    gap: 0.5rem;

    > div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }

  .location {
    font-size: 0.9rem;
    color: #fff5;
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }
  .location-container.placeholder {
    display: flex;
    align-items: flex-start;
    flex-flow: column;
    gap: 0.25rem;
    margin: 0.25rem 0 0 0;
  }

  .username {
    font-size: 1rem;

    &.placeholder {
      display: flex;
      flex-flow: column;
      gap: 0.25rem;
      margin: 0.25rem 0 0 0;
    }
  }
`;

export const Contact = styled(ExtLink)`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;
