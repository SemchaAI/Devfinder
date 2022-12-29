export type GitHubLocalUser = {
  login: string;
  id: number;
  avatar: string;
  name: string | null;
  company: string | null;
  location: string | null;
  email: string | null;
  twitter: string | null;
  bio: string | null;
  repos: number;
  followers: number;
  following: number;
  created: string;
  updated: string;
};

export type GitHubUser = {
  login: string;
  id: number;
  avatar_url: string;
  name: string | null;
  company: string | null;
  location: string | null;
  email: string | null;
  twitter_username: string | null;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
};

export type GitHubUserError = {
  message: string;
  documentation_url: string;
};
