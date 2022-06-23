import Link from 'next/link';

import { useRouter } from 'next/router';
import { routes } from './routes';

import { Nav, Section } from './styled';
import Avatar from 'components/Avatar';

function Navbar() {
  const router = useRouter();

  return (
    <Nav>
      <div className="container">
        <div>
          <h1>Zenity</h1>

          {Object.entries(routes.top).map(([section, paths]) => (
            <Section key={section}>
              <ul>
                {paths.map(({ label, path, icon }) => (
                  <li key={label}>
                    <Link href={path}>
                      <a className={router.pathname === path ? 'active' : ''}>
                        {icon}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </Section>
          ))}
        </div>

        <div>
          {/*
          Object.entries(routes.bottom).map(([section, paths]) => (
            <Section key={section}>
              <ul>
                {paths.map(({ label, path, icon }) => (
                  <li key={label}>
                    <a href={path} target="_blank" rel="noreferrer">
                      {icon}
                    </a>
                  </li>
                ))}
              </ul>
            </Section>
          ))
            */}

          <Section>
            <Avatar />
          </Section>
        </div>
      </div>
    </Nav>
  );
}

export default Navbar;
