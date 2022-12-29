import { ReactComponent as Company } from "../../assets/icon-company.svg";
import { ReactComponent as Location } from "../../assets/icon-location.svg";
import { ReactComponent as Twitter } from "../../assets/icon-twitter.svg";
import { ReactComponent as Website } from "../../assets/icon-website.svg";

import { GitHubLocalUser } from "../../types";
import { InfoItem, InfoItemProps } from "../InfoItem";
import styles from "./UserInfo.module.scss";

interface UserInfoProps
  extends Pick<GitHubLocalUser, "company" | "location" | "twitter" | "login"> {}

export const UserInfo = ({
  company,
  location,
  twitter,
  login,
}: UserInfoProps) => {
  const items: InfoItemProps[] = [
    {
      icon: <Location />,
      text: location,
    },
    {
      icon: <Website />,
      text: login,
      isLink: true,
    },
    {
      icon: <Twitter />,
      text: twitter,
    },
    {
      icon: <Company />,
      text: company,
    },
  ];
  return (
    <div className={styles.userInfo}>
      {items.map((item, index) => (
        <InfoItem {...item} key={index} />
      ))}
    </div>
  );
};
