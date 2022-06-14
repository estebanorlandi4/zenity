import Link from 'next/link';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  height: 2.5rem;
  align-items: center;

  .container {
    width: 95%;
    height: 100%;
    margin: 0 auto;
  }
  ul {
    gap: 1rem;
  }
  ul,
  li,
  a {
    height: 100%;
  }
  a {
    display: flex;
  }
  ul {
    display: flex;
  }
  a {
    display: flex;
    align-items: center;
    padding: 0 0.5rem;
  }
`;

function Navbar() {
  return (
    <Nav>
      <div className="container">
        <ul>
          <li>
            <Link href="/">
              <a>Zenity</a>
            </Link>
          </li>
          <li>
            <Link href="/home">
              <a>Home</a>
            </Link>
          </li>
        </ul>
      </div>
    </Nav>
  );
}

export default Navbar;
