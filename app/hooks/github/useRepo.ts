import { useOctokit } from 'contexts/githubContext';
import { useEffect, useState } from 'react';

interface Params {
  owner: string;
  repo: string;
}
function useRepo({ owner, repo }: Params) {
  const octokit = useOctokit();

  const [state, setState] = useState({ repo: null });
  useEffect(() => {
    (async function () {
      if (!octokit || !owner || !repo) return null;
      const { data } = await octokit.request('GET /repos/{owner}/{repo}', {
        owner,
        repo,
      });

      console.log(data);
    })();
  }, [owner, repo, octokit]);
  return { ...state };
}

export default useRepo;
