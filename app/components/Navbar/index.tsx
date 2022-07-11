import Link from 'next/link';
import { useSession } from 'next-auth/react';

import { routes } from './routes';
import Avatar from 'components/Avatar';
import { Nav, NavMenu } from './styled';

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

        <div className="right">
          {routes.right.map(
            ({ authOnly, label, path, icon: { at, element }, anchor }) =>
              authOnly &&
              !session && (
                <Link key={path} href={path}>
                  <a className="nav-link" {...anchor}>
                    {at === 'left' && element} {label}{' '}
                    {at === 'right' && element}
                  </a>
                </Link>
              ),
          )}

          {isLoading ? 'loading' : null}
          {!isLoading && session ? (
            <Link href="/auth/logout">
              <a>
                <Avatar user={session?.user} />
              </a>
            </Link>
          ) : null}
        </div>
      </div>
    </Nav>
  );
}

export default Navbar;
