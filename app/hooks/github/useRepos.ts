import { useCallback, useEffect, useState } from 'react';

import { RepoWithLanguages, ReposOptions, Repo } from 'utils/interfaces/github';
import { useGithub } from 'contexts/githubContext';

interface State {
  repos: RepoWithLanguages[];
  isLoading: boolean;
}

function useRepos({ search }: ReposOptions) {
  const { octokit, user } = useGithub();

  const [state, setState] = useState<State>({
    repos: [],
    isLoading: true,
  });

  const getLanguages = useCallback(
    (repos: Repo[]) => {
      const promises = repos.map(async (current) => {
        if (!current || !current.owner || !octokit)
          return { ...current, languages: [] };
        const params = {
          owner: current.owner.login,
          repo: current.name,
        };

        if (!params.owner || !params.repo) return { ...current, languages: [] };
        const { data: languages } = await octokit.request(
          'GET /repos/{owner}/{repo}/languages',
          params,
        );

        return { ...current, languages: Object.keys(languages) };
      });

      return Promise.all(promises);
    },
    [octokit],
  );

  useEffect(() => {
    (async function () {
      if (!octokit || !search || !user) return null;

      const {
        data: { items },
      } = await octokit.request('GET /search/repositories', {
        q: `${search}+user:${user.login}`,
      });

      getLanguages(items)?.then((repos) => {
        setState((old) => ({ ...old, repos, isLoading: false }));
      });
    })();
  }, [octokit, search, user, getLanguages]);

  useEffect(() => {
    const promise = async () => {
      if (!octokit || repos.length) return null;

      setState((old) => ({ ...old, isLoading: true }));
      const { data } = await octokit.request('GET /user/repos');

      getLanguages(data)?.then((repos) => {
        setState((old) => ({ ...old, repos, isLoading: false }));
      });
    };
    promise();
  }, [octokit, state, getLanguages]);

  const refetch = async (options: ReposOptions) => {
    if (!octokit) return null;

    setState((old) => ({ ...old, isLoading: true }));
    const { data } = await octokit.request('GET /user/repos', { ...options });

    getLanguages(data)?.then((repos) => {
      setState((old) => ({ ...old, repos, isLoading: false }));
    });
  };

  return { refetch, ...state };
}

export default useRepos;
