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

  type Details = IGithubProvider['repo_details'];
  const [repoDetails, setRepoDetails] = useState<Details>(null);
  const updateDetails = (value: Details | null) => setRepoDetails(value);

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

    const { data: languages } = await octokit.request(
      'GET /repos/{owner}/{repo}/languages',
      {
        owner: data.owner.login,
        repo: data.name,
      },
    );

    if (!Object.keys(languages).length)
      return updateDetails({ ...data, languages: [] });
    const totalBytes = Object.values(languages).reduce(
      (acc, value) => acc + value,
    );

    updateDetails({
      ...data,
      languages: Object.entries(languages).map(([language, bytes]) => {
        const percentage = Math.round((bytes * 100) / totalBytes);
        return { name: language, percentage };
      }),
    });
  };

  return { repo_details, update };
};
