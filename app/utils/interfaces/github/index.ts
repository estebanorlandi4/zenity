import { Octokit } from '@octokit/rest';
import { Endpoints } from '@octokit/types';

export type User = Endpoints['GET /user']['response']['data'];
export type Users = Endpoints['GET /search/users']['response']['data']['items'];
export type Icons = Endpoints['GET /emojis']['response']['data'];
export type Repos = Endpoints['GET /user/repos']['response']['data'];
export type ReposSearch =
  Endpoints['GET /search/repositories']['response']['data']['items'];

export interface IGithubProvider {
  icons: Icons | null;
  user: User | null;
  octokit: Octokit | null;
}

export type Languages = string[];
export type Repo = Repos[number] | ReposSearch[number];
export type RepoWithLanguages = Repo & { languages: Languages };

export type Sort = 'full_name' | 'pushed' | 'created' | 'updated';
export type Direction = 'asc' | 'desc';
export interface ReposOptions {
  search?: string;
  sort?: Sort;
  direction?: Direction;
}
