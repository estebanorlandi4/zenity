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
          {routes.map(({ label, path, icon }: any) => (
            <Link href={path} key={path}>
              <a className="nav-link">
                {icon} {label}
              </a>
            </Link>
          ))}
        </NavMenu>

        <div className="right">
          {isLoading ? 'loading' : null}
          {!isLoading && session ? (
            <Link href="/auth/logout">
              <a>
                <Avatar user={session?.user} />
              </a>
            </Link>
          ) : null}
          {!isLoading && !session ? (
            <Link href="/auth/login">
              <a>Login</a>
            </Link>
          ) : null}
        </div>
      </div>
    </Nav>
  );
}

export default Navbar;
