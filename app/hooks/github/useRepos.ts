import { useEffect, useState } from 'react';

import { RepoWithLanguages, ReposOptions } from 'utils/interfaces/github';
import { useOctokit } from 'contexts/githubContext';

function useRepos({ search }: ReposOptions) {
  const octokit = useOctokit();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [repos, setRepos] = useState<RepoWithLanguages[]>([]);

  useEffect(() => {
    (async function () {
      if (!octokit || !search) return null;

      const { data } = await octokit.request('/search/repositories', {
        q: search,
      });
      console.log(data);
    })();
  }, [octokit, search]);

  useEffect(() => {
    const promise = async () => {
      if (!octokit || repos.length) return null;

      setIsLoading(true);
      const { data } = await octokit.request('GET /user/repos');

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
    console.log('hola');
    promise();
  }, [octokit, repos.length]);

  const refetch = async (options: ReposOptions) => {
    if (!octokit) return null;

    setIsLoading(true);
    const { data } = await octokit.request('GET /user/repos', { ...options });

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

  return { repos, refetch, isLoading };
}

export default useRepos;
