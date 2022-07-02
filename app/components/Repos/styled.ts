import styled, { css } from 'styled-components';

export const Container = styled.ul`
  display: flex;
  flex-flow: column;
  gap: 1rem;
  max-width: 30rem;
  padding: 3.5rem 0;
  margin: 0 auto;

  .column {
    display: flex;
    gap: 0.25rem;
    flex-flow: column;
  }
`;

interface Props {}
export const RepoContainer = styled.li<any>`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row;
  gap: 1rem;
  padding: 0 0 1rem 0;

  :not(:last-child) {
    border-bottom: 1px solid #fff1;
  }

  .repo-left {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: left;
    gap: 1rem;
    height: 100%;
  }

  .repo-right {
    display: flex;
    flex-flow: column;
    align-items: flex-end;
    gap: 0.75rem;
    justify-content: space-between;
    height: 100%;
  }

  .repo-owner {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #aaa;
    font-weight: 300;
    font-size: 0.8rem;
    :hover {
      color: #fff;
    }
  }

  .avatar-container {
    width: 1.5rem;
    height: 1.5rem;
  }

  .repo-avatar {
    display: block;
    border-radius: 100%;
  }

  .repo-visibility,
  .repo-languages {
    padding: 0.25rem 0.5rem;
    border-radius: 5px;
    font-size: 0.75rem;
    color: #fffa;
    background: #0003;
    margin: 0.5rem 0;
  }
  .repo-visibility {
    background: #0003;
    max-width: max-content;
  }
  .repo-languages {
    display: flex;
    gap: 0.5rem;
  }

  .repo-name {
    font-size: 1rem;
    font-weight: 500;
  }

  .repo-clone {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    color: #888;

    .icon {
      width: 1rem;
      height: 1rem;
    }
    :hover {
      color: #fff;
    }
  }
`;
