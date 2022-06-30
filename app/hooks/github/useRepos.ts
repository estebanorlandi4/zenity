import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import axios from 'axios';

import {
  Endpoints,
  GetResponseDataTypeFromEndpointMethod,
} from '@octokit/types';
import { Octokit } from '@octokit/rest';

function getHeaders(token: any) {
  return {
    headers: {
      accept: 'application/vnd.github.v3+json',
      Authorization: `token ${token}`,
    },
  };
}

type ListRepos = Endpoints['GET /user/repos']['response']['data'];

interface IListRepos extends ListRepos {
  languages?: string[];
}

function useRepos() {
  const { data: session } = useSession();
  const [repos, setRepos] = useState<IListRepos[]>([]);

  useEffect(() => {
    const promise = async () => {
      if (!session) return null;

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
        console.log(value);
        setRepos(value);
      });
    };
    promise();
  }, [session]);

  return { repos };
}

export default useRepos;
