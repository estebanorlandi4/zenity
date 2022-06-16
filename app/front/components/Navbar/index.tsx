import Link from 'next/link';

import { useRouter } from 'next/router';

import { Nav, Section } from './styled';

import { SiWhatsapp } from 'react-icons/si';
import { DiGithubBadge } from 'react-icons/di';
import { BsGearFill } from 'react-icons/bs';
import { MdDashboard } from 'react-icons/md';
import { BiGlobe } from 'react-icons/bi';

const routes = {
  top: {
    menu: [
      { label: 'Dashboard', path: '/', icon: <MdDashboard className="icon" /> },
      { label: 'Sites', path: '/sites', icon: <BiGlobe className="icon" /> },
    ],
    settings: [
      {
        label: 'Settings',
        path: '/settings',
        icon: <BsGearFill className="icon" />,
      },
    ],
  },
  bottom: {
    media: [
      {
        label: 'GitHub',
        path: 'https://github.com',
        icon: <DiGithubBadge className="icon" />,
      },
      {
        label: 'Whatsapp',
        path: 'https://web.whatsapp.com',
        icon: <SiWhatsapp className="icon" />,
      },
    ],
  },
};

function Navbar() {
  const router = useRouter();

  return (
    <Nav>
      <div className="container">
        <div>
          <h1>Zenity</h1>

          {Object.entries(routes.top).map(([section, paths]) => (
            <Section key={section}>
              <p className="section-name">{section}</p>
              <ul>
                {paths.map(({ label, path, icon }) => (
                  <li key={label}>
                    <Link href={path}>
                      <a className={router.pathname === path ? 'active' : ''}>
                        {icon} {label}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </Section>
          ))}
        </div>

        {Object.entries(routes.bottom).map(([section, paths]) => (
          <Section key={section}>
            <p className="section-name">{section}</p>
            <ul>
              {paths.map(({ label, path, icon }) => (
                <li key={label}>
                  <a href={path} target="_blank" rel="noreferrer">
                    {icon} {label}
                  </a>
                </li>
              ))}
            </ul>
          </Section>
        ))}
      </div>
    </Nav>
  );
}

export default Navbar;
