import Link from 'next/link';
import { useSession } from 'next-auth/react';

import { routes } from './routes';
import Avatar from 'components/Avatar';
import { Nav, NavMenu } from './styled';
import Router from 'next/router';
import SearchGithubUser from 'components/SearchGithubUser';

function Navbar() {
  const { data: session, status } = useSession();

  const isLoading = status === 'loading';
  return (
    <Nav>
      <div className="container">
        <NavMenu>
          {routes.left.map(({ label, path, icon: { at, element } }) => (
            <Link key={path} href={path}>
              <a className="nav-link">
                {at === 'left' && element} {label} {at === 'right' && element}
              </a>
            </Link>
          ))}
        </NavMenu>

        <SearchGithubUser />

        <div className="right">
          {!isLoading && !session ? (
            <Link href="/auth/login">
              <a className="login">Login</a>
            </Link>
          ) : (
            <Avatar
              as="button"
              onClick={() => Router.push('/auth/logout')}
              isLoading={isLoading}
              user={session?.user}
            />
          )}
        </div>
      </div>
    </Nav>
  );
}

export default Navbar;
