import { GitHubLocalUser } from "../../types";
import styles from "./UserTitle.module.scss";

export interface UserTitleProps
  extends Pick<GitHubLocalUser, "login" | "name" | "created" | "updated"> {}

const localDate = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

export const UserTitle = ({
  created,
  login,
  updated,
  name,
}: UserTitleProps) => {
  const joinedDate = localDate.format(new Date(created));
  const updatedDate = localDate.format(new Date(updated));
  return (
    <div className={styles.userTitle}>
      <div className={styles.containerFlex}>
        <div>
          <h2>{name}</h2>
          <h3>{login}</h3>
        </div>
        <div>
          <span>{joinedDate}</span>
          <span>{updatedDate}</span>
        </div>
      </div>
    </div>
  );
};
