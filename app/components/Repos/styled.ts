import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  flex-flow: column;
  gap: 0.25rem;
  width: 75%;
  padding: 1rem;
  background-color: #1e1e20;
  border-radius: 0.15rem;
  width: max-content;
`;

export const Repo = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.15rem 0.5rem;

  .repo-link {
    color: #888;
    text-decoration: none;
  }
  .repo-link:hover {
    color: #fff;
    text-decoration: underline;
  }
`;
