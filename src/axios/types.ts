export interface IUserNameResult {
  avatar_url: string;
  blog: string;
  company: string;
  created_at: string;
  location: string;
  public_repos: number;
  followers: number;
  following: number;
  twitter_username: string | null;
  name: string;
  login: string;
  url: string;
  bio: string;
}

export interface IUserReposResult {
  name: string;
  description: string;
  html_url: string;
  updated_at: string;
  created_at: string;
  topics: string[];
}
