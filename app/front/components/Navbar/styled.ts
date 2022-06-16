import styled from 'styled-components';

export const Nav = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  display: flex;
  height: 100%;
  width: 15rem;
  background: #1e2025;
  padding: 1rem 1rem;
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
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    width: 100%;
  }

  h1 {
    margin: 0.5rem 0 2rem 0.5rem;
  }

  .bottom {
    justify-self: flex-end;
  }
`;

export const Section = styled.div`
  margin: 1rem 0;
  width: 100%;
  ul {
    width: 100%;
  }

  .section-name {
    font-size: 0.65rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #fff8;
    margin: 0 0.75rem;
  }

  li {
    margin: 0.5rem 0;
    width: 100%;
  }

  a {
    display: flex;
    align-items: center;
    padding: 0.5rem 0.75rem;
    gap: 0.5rem;

    font-size: 0.8rem;
    font-weight: 400;
    letter-spacing: 0.5px;
    text-transform: capitalize;
    border-radius: 0.25rem;
    outline: 2px solid transparent;
    transition: all 0.25s;

    .icon {
      width: 1.5rem;
      height: 1.5rem;
    }

    :hover {
      outline: 2px solid #8653d9ff;
    }
  }
  .active {
    background-color: #8653d9ff;
  }
`;
