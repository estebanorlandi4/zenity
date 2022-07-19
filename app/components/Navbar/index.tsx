import Router from 'next/router';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

import Avatar from 'components/Avatar';
import SearchGithubUser from 'components/SearchGithubUser';
import Private from 'components/Private';

import { routes } from './routes';
import { Nav, NavMenu } from './styled';

interface Props {
  element: JSX.Element | string | (JSX.Element | string)[];
  path: string;
  at?: 'left' | 'right';
  label: string;
}
function GetLink({ path, at, label, element }: Props) {
  return (
    <Link key={path} href={path}>
      <a className="nav-link">
        {at === 'left' && element}
        <span className="label">{label}</span>
        {at === 'right' && element}
      </a>
    </Link>
  );
}

function Navbar() {
  const { data: session, status } = useSession();

  const isLoading = status === 'loading';
  return (
    <Nav>
      <div className="container">
        <NavMenu>
          {routes.left.map(({ label, path, icon: { at, element }, authOnly }) =>
            authOnly ? (
              <Private key={path}>
                <GetLink label={label} path={path} at={at} element={element} />
              </Private>
            ) : (
              <GetLink
                key={path}
                label={label}
                path={path}
                at={at}
                element={element}
              />
            ),
          )}
        </NavMenu>

        <Private>
          <SearchGithubUser />
        </Private>

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
