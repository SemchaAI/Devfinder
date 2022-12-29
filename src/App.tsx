import { useState } from "react";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { UserCard } from "./components/UserCard";
import { defaultUser } from "./mock";
import { GitHubLocalUser, GitHubUser, GitHubUserError } from "./types";
import { extractLocalUser } from "./utils/extractLocalUser";
import { isGithubUser } from "./utils/typeguards";

const BASE_URL = "https://api.github.com/users/";

function App() {
  const [user, setUser] = useState<GitHubLocalUser | null>(defaultUser);
  const fetchUser = async (username: string) => {
    const url = BASE_URL + username;
    const responce = await fetch(url);
    const user = (await responce.json()) as GitHubUser | GitHubUserError;
    if (isGithubUser(user)) {
      setUser(extractLocalUser(user));
    } else {
      setUser(null);
    }
  };
  return (
    <Container>
      <Header />
      <Search hasError={!user} onSubmit={fetchUser} />
      {user && (
        <UserCard
          // repos={defaultUser.repos}
          // followers={defaultUser.followers}
          // following={defaultUser.following}
          {...user}
        />
      )}
    </Container>
  );
}

export default App;
