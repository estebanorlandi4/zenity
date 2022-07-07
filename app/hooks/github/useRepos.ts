import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

import { Endpoints } from '@octokit/types';
import { Octokit } from '@octokit/rest';

interface CustomProps {
  languages?: string[];
}

type ListRepos = (Endpoints['GET /user/repos']['response']['data'] &
  CustomProps)[];

interface Props {}
function useRepos(props?: Props) {
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [repos, setRepos] = useState<any[]>([]);

  useEffect(() => {
    const promise = async () => {
      if (!session || repos.length) return null;

      setIsLoading(true);

      const { accessToken: auth } = session;

      const octokit = new Octokit({ auth });
      const { data } = await octokit.rest.repos.listForAuthenticatedUser();

      Promise.all(
        data.map(async (current) => {
          const { owner, name } = current;
          const { owner_name, repo_name } = {
            owner_name: owner.login ?? '',
            repo_name: name ?? '',
          };
          if (!owner_name || !repo_name) return null;
          const { data: languages } = await octokit.rest.repos.listLanguages({
            owner: owner_name,
            repo: repo_name,
          });

          return { ...current, languages: Object.keys(languages) };
        }),
      ).then((value) => {
        setRepos(value);
        setIsLoading(false);
      });
    };
    promise();
  }, [session, repos.length]);

  return { repos, isLoading };
}

export default useRepos;
