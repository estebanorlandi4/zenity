import styled from 'styled-components';

export const Nav = styled.nav`
  position: relative;
  left: 0;
  top: 0;
  z-index: 999;
  display: flex;
  width: max-content;
  background: #1e2025;
  padding: 0 0.75rem;
  color: #fff;

  .menu-button {
    position: absolute;
    top: 1rem;
    right: 0;
    transform: translate(50%, 0);
    display: grid;
    place-items: center;
    width: 1.5rem;
    height: 1.5rem;
    background-color: #f0f0f0;
    border-radius: 100%;
    color: #1e2025;
  }

  .container {
    position: sticky;
    top: 0;
    left: 0;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    width: 100%;
    height: 100vh;
  }

  h1 {
    margin: 1.5rem 0 2rem 0;
    font-size: 1.15rem;
  }

  .bottom {
    justify-self: flex-end;
  }
`;

export const Section = styled.div`
  position: relative;
  width: 100%;
  padding: 0.5rem 0;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background-color: #fff1;
    width: 100%;
    height: 1px;
  }

  ul {
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
  }

  li {
    margin: 0.5rem 0;
    width: max-content;
  }

  a {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    gap: 0.5rem;

    font-size: 0.8rem;
    font-weight: 400;
    letter-spacing: 0.5px;
    text-transform: capitalize;
    border-radius: 0.25rem;
    outline: 2px solid transparent;
    transition: all 0.25s;

    .icon {
      --size: 1rem;
      width: var(--size);
      height: var(--size);
    }

    :hover {
      outline: 2px solid #8653d9ff;
    }
  }
  .active {
    background-color: #8653d9ff;
  }
`;
