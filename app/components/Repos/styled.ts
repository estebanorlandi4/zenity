import styled, { css } from 'styled-components';

export const Container = styled.ul`
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
  padding: 1rem 0;
  border-bottom: 1px solid #fff1;

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
    button {
      text-align: right;
    }
  }

  .repo-owner {
    color: #888;
    font-weight: 300;
    font-size: 0.8rem;
  }

  .repo-avatar {
    display: block;
    width: 1rem;
    height: 1rem;
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
