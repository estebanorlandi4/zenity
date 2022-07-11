import { DiGithubBadge } from 'react-icons/di';
import { MdDashboard } from 'react-icons/md';
import { HiLogin } from 'react-icons/hi';

import { NavbarRoutes } from 'utils/interfaces';

interface NavbarSections {
  left: NavbarRoutes;
  right: NavbarRoutes;
}
export const routes: NavbarSections = {
  left: [
    {
      label: 'Dashboard',
      path: '/',
      icon: { at: 'left', element: <MdDashboard size={20} className="icon" /> },
    },
    {
      label: 'github',
      path: '/github',
      icon: {
        at: 'left',
        element: <DiGithubBadge size={26} className="icon" />,
      },
    },
  ],
  right: [
    {
      label: 'login',
      path: '/auth/login',
      authOnly: true,
      icon: {
        at: 'right',
        element: <HiLogin size={14} className="icon" />,
      },
      anchor: { className: 'login' },
    },
  ],
};
