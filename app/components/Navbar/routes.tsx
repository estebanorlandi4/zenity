import { DiGithubBadge } from 'react-icons/di';
import { MdDashboard } from 'react-icons/md';

import { NavbarRoutes } from 'utils/interfaces';

export const routes: NavbarRoutes = [
  {
    label: 'Dashboard',
    path: '/',
    icon: <MdDashboard size={20} className="icon" />,
  },
  {
    label: 'github',
    path: '/github',
    icon: <DiGithubBadge size={26} className="icon" />,
  },
];
