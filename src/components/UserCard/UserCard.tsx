import { GitHubLocalUser } from "../../types";
import { UserInfo } from "../UserInfo";
import { UserStats } from "../UserStats";
import { UserTitle } from "../UserTitle";
import styles from "./UserCard.module.scss";

interface UserCardProps extends GitHubLocalUser {}

export const UserCard = (props: UserCardProps) => (
  <div className={styles.userCard} data-testid="UserCard">
    <img src={props.avatar} alt={props.login} className={styles.avatar} />
    <UserTitle
      created={props.created}
      login={props.login}
      name={props.name}
      updated={props.updated}
    />
    <p className={`${styles.bio} ${styles.bio ? "" : `${styles.empty}`}`}>
      {props.bio || "This profile has no bio "}
    </p>
    <UserStats
      repos={props.repos}
      followers={props.followers}
      following={props.following}
    />
    <UserInfo {...props} />
  </div>
);
