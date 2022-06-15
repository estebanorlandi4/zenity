import Link from 'next/link';

import { useRouter } from 'next/router';

import { MdDashboard, MdHome } from 'react-icons/md';
import { Nav, Section } from './styled';

import { SiWhatsapp } from 'react-icons/si';
import { DiGithubBadge } from 'react-icons/di';
import { BsGearFill } from 'react-icons/bs';

function Navbar() {
  const router = useRouter();

  return (
    <Nav>
      <div className="container">
        <div>
          <h1>Zenity</h1>

          <Section>
            <p className="section-name">Menu</p>
            <ul>
              <li>
                <Link href="/">
                  <a className={router.pathname === '/' ? 'active' : ''}>
                    <MdDashboard className="icon" /> dashboard
                  </a>
                </Link>
              </li>
            </ul>
          </Section>

          <Section>
            <p className="section-name">Settings</p>
            <ul>
              <li>
                <Link href="/settings">
                  <a
                    className={router.pathname === '/settings' ? 'active' : ''}
                  >
                    <BsGearFill className="icon" /> Settings
                  </a>
                </Link>
              </li>
            </ul>
          </Section>
        </div>

        <Section>
          <p className="section-name">Media</p>
          <ul>
            <li>
              <a
                href="https://github.com/estebanorlandi4"
                target="_blank"
                rel="noreferrer"
              >
                <DiGithubBadge className="icon" /> GitHub
              </a>
            </li>
            <li>
              <a
                href="https://web.whatsapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                <SiWhatsapp className="icon" /> Whatsapp
              </a>
            </li>
          </ul>
        </Section>
      </div>
    </Nav>
  );
}

export default Navbar;
