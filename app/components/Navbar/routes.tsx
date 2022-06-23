import { SiWhatsapp } from 'react-icons/si';
import { DiGithubBadge } from 'react-icons/di';
import { BsGearFill } from 'react-icons/bs';
import { MdDashboard } from 'react-icons/md';
import { BiGlobe } from 'react-icons/bi';

interface RouteOptions {
  label?: string;
  path: string;
  icon: JSX.Element;
}

interface Routes {
  top: { [key: string]: RouteOptions[] };
  bottom: { [key: string]: RouteOptions[] };
}

export const routes: Routes = {
  top: {
    menu: [
      {
        label: 'Dashboard',
        path: '/',
        icon: <MdDashboard size={20} className="icon" />,
      },
      {
        label: 'Sites',
        path: '/sites',
        icon: <BiGlobe size={20} className="icon" />,
      },
    ],
    settings: [
      {
        label: 'Settings',
        path: '/settings',
        icon: <BsGearFill size={20} className="icon" />,
      },
    ],
  },
  bottom: {
    media: [],
  },
};
