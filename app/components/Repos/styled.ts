import styled, { css } from 'styled-components';

export const Container = styled.ul`
  display: flex;
  flex-flow: column;
  gap: 1rem;
  max-width: 30rem;
  margin: 1rem auto;

  .column {
    display: flex;
    gap: 0.25rem;
    flex-flow: column;
  }
`;

interface Props {}
export const Repo = styled.li<any>`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-flow: row;
  gap: 1rem;
  border-bottom: 1px solid #fff1;
  padding: 0 0 1rem 0;

  .repo-left {
    display: flex;
    align-items: center;
    flex-flow: row;
    gap: 1rem;
  }

  .repo-right {
    display: flex;
    flex-flow: column;
    align-items: flex-end;
    gap: 0.5rem;
    justify-content: space-between;
    height: 100%;
    button {
      text-align: right;
    }
  }

  .repo-owner {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #aaa;
    font-weight: 300;
    font-size: 0.8rem;
  }

  .avatar-container {
    width: 1.5rem;
    height: 1.5rem;
  }
  .repo-avatar {
    display: block;
    border-radius: 100%;
  }

  .repo-visibility {
    background: #0003;
    border-radius: 5px;
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
    max-width: max-content;
    color: #fffa;
  }

  .repo-name {
    font-size: 1rem;
    font-weight: 500;
  }
`;
