interface UserProps {
  login: string;
  name: string;
  bio: string;
  avatar_url: string;
  html_url: string;
  repos_url: string;
  public_repos: number;
  followers: number;
  created_at: string;
}

interface LanguagesProps {
  [key: string]: string;
}

export { UserProps, LanguagesProps };
