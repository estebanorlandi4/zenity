import { createContext, useContext, useEffect, useState } from 'react';

import { useIcons, useUser } from 'hooks/github';
import { IGithubProvider } from 'utils/interfaces/github';
import { Children } from 'utils/interfaces';
import { Octokit } from '@octokit/rest';
import { useSession } from 'next-auth/react';

const initial: IGithubProvider = {
  icons: null,
  user: null,
  octokit: null,
};
const GithubContext = createContext<IGithubProvider>(initial);

interface Props {
  children: Children;
}
export const GithubProvider = ({ children }: Props) => {
  const [octokit, setOctokit] = useState<Octokit | null>(null);
  const { icons } = useIcons();
  const { user } = useUser();
  const { data: session } = useSession();

  useEffect(() => {
    if (!session) return setOctokit(null);
    const { accessToken: auth } = session;
    return setOctokit(new Octokit({ auth }));
  }, [session]);

  return (
    <GithubContext.Provider value={{ icons, user, octokit }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;

export const useOctokit = () => {
  const { octokit } = useContext(GithubContext);
  return octokit;
};

export const useGithubUser = () => {
  const { user } = useContext(GithubContext);
  return user;
};

export const useGithub = () => {
  return useContext(GithubContext);
};
