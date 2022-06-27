import { DiGithubBadge } from 'react-icons/di';
import { MdDashboard } from 'react-icons/md';

export const routes: any = [
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
