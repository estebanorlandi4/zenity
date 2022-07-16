import { Octokit } from '@octokit/rest';
import { Endpoints } from '@octokit/types';

export type User = Endpoints['GET /user']['response']['data'];
export type Users = Endpoints['GET /search/users']['response']['data']['items'];
export type Icons = Endpoints['GET /emojis']['response']['data'];
export type Repos = Endpoints['GET /user/repos']['response']['data'];

export interface IGithubProvider {
  icons: Icons | null;
  user: User | null;
  octokit: Octokit | null;
}

export type Languages = string[];
export type RepoWithLanguages =
  | (Repos[number] & { languages: Languages })
  | null;

export type Sort = 'full_name' | 'pushed' | 'created' | 'updated';
export type Direction = 'asc' | 'desc';
export interface ReposOptions {
  search?: string;
  sort?: Sort;
  direction?: Direction;
}
