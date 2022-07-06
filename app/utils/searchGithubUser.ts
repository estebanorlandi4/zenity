import { Octokit } from '@octokit/rest';
import { Endpoints } from '@octokit/types';

type Response = Endpoints['GET /search/users']['response']['data'];

const URL = 'GET /search/users?q={query}';

interface Props {
  query: string | null;
  cb?: (_: Response) => void | null | undefined;
  session?: any;
}

const searchGithubUser = async ({ query, cb, session }: Props) => {
  if (!query) return {};
  const octokit = new Octokit({ auth: session?.accessToken });

  const { data } = await octokit.request(URL, { query });

  if (!data) return null;

  const { total_count, incomplete_results, items } = data;

  if (cb) cb(data);
  return data;
};

export default searchGithubUser;
