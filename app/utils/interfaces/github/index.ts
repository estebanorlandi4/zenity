import { Endpoints } from '@octokit/types';

type User = Endpoints['GET /user']['response']['data'];

export interface IGithubProvider {
  icons?: { [icons: string]: string } | null;
  user?: User | null;
}
