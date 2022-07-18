import { createContext, useContext, useEffect, useState } from 'react';

import { useIcons, useUser } from 'hooks/github';
import { Repo, IGithubProvider } from 'utils/interfaces/github';
import { Children } from 'utils/interfaces';
import { Octokit } from '@octokit/rest';
import { useSession } from 'next-auth/react';

const initial: IGithubProvider = {
  icons: null,
  user: null,
  octokit: null,
  repo_details: null,
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
  const [repoDetails, setRepoDetails] =
    useState<IGithubProvider['repo_details']>(null);
  const updateDetails = (value: Repo | null) => setRepoDetails(value);

  useEffect(() => {
    if (!session) return setOctokit(null);
    const { accessToken: auth } = session;
    return setOctokit(new Octokit({ auth }));
  }, [session]);

  return (
    <GithubContext.Provider
      value={{ repo_details: repoDetails, updateDetails, icons, user, octokit }}
    >
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

interface DetailsProps {
  owner: string;
  repo: string;
}
export const useRepoDetails = () => {
  const { octokit, repo_details, updateDetails } = useContext(GithubContext);

  const update = async (value: DetailsProps | null) => {
    if (!value) return updateDetails(null);
    const { owner, repo } = value ? value : { owner: null, repo: null };
    if (!octokit || !owner || !repo) return null;
    const { data } = await octokit.request('GET /repos/{owner}/{repo}', {
      owner,
      repo,
    });

    updateDetails(data);
  };

  return { repo_details, update };
};
