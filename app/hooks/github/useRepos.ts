import { useEffect, useState } from 'react';

import { RepoWithLanguages } from 'utils/interfaces/github';
import { useOctokit } from 'contexts/githubContext';

interface Params {
  search?: string;
  sort?: 'full_name' | 'pushed' | 'created' | 'updated';
  direction?: 'asc' | 'desc';
}

function useRepos({ search, sort, direction }: Params) {
  const octokit = useOctokit();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [repos, setRepos] = useState<RepoWithLanguages[]>([]);

  useEffect(() => {
    console.log(search);
  }, [search]);

  useEffect(() => {
    const promise = async () => {
      if (!octokit) return null;

      setIsLoading(true);
      const { data } = await octokit.rest.repos.listForAuthenticatedUser({
        sort,
        direction,
      });

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
  }, [octokit, repos.length, sort, direction]);

  return { repos, isLoading };
}

export default useRepos;
