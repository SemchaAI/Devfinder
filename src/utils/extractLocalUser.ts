import { GitHubLocalUser, GitHubUser } from "../types";

export const extractLocalUser = (user: GitHubUser): GitHubLocalUser => ({
  login: user.login,
  id: user.id,
  avatar: user.avatar_url,
  name: user.name,
  company: user.company,
  location: user.location,
  email: user.email,
  twitter: user.twitter_username,
  bio: user.bio,
  repos: user.public_repos,
  followers: user.followers,
  following: user.following,
  created: user.created_at,
  updated: user.updated_at,
});
