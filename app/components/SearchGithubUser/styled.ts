import ExtLink from 'components/ExtLink';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-flow: column;
  gap: 1rem;

  .search {
    width: 100%;
  }

  .search-input {
    width: 100%;
  }
`;

export const Users = styled.ul`
  display: flex;
  flex-flow: column;
  gap: 0.5rem;
`;

export const User = styled(ExtLink)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;

  p {
    color: #888;
    font-size: 0.9rem;
  }

  :hover p {
    color: #ddd;
  }

  .avatar-container {
    position: relative;
    width: 2rem;
    height: 2rem;
  }

  .avatar {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 100%;
  }
`;
