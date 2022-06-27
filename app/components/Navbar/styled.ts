import styled from 'styled-components';

export const Nav = styled.nav`
  position: fixed;
  z-index: 9999;

  width: 100%;
  height: 3.5rem;

  background-color: #1e1e25;

  .container {
    height: 100%;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
  }

  .nav-link {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    text-transform: capitalize;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  gap: 1rem;
`;
