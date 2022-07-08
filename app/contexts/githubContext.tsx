import { createContext } from 'react';

import { useIcons, useUser } from 'hooks/github';
import { IGithubProvider } from 'utils/interfaces/github';
import { Children } from 'utils/interfaces';

const initial = {
  icons: null,
  user: null,
};
const GithubContext = createContext<IGithubProvider>(initial);

interface Props {
  children: Children;
}
export const GithubProvider = ({ children }: Props) => {
  const { icons } = useIcons();
  const { user } = useUser();

  return (
    <GithubContext.Provider value={{ icons, user }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
