import { createContext } from 'react';

import { useIcons, useUser } from 'hooks/github';
import { IGithubProvider } from 'utils/interfaces/github';

const GithubContext = createContext<IGithubProvider>({});

interface Props {
  children: JSX.Element | JSX.Element[];
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
