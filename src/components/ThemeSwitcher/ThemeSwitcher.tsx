import { useEffect, useState } from "react";
import { ReactComponent as Moon } from "../../assets/icon-moon.svg";
import { ReactComponent as Sun } from "../../assets/icon-sun.svg";
import styles from "./ThemeSwitcher.module.scss";

enum Theme {
  Dark = "Dark",
  Light = "Light",
}

export const ThemeSwitcher = () => {
  const [isDark, setDark] = useState(false);
  const themeText = isDark ? Theme.Light : Theme.Dark;
  const ThemeIcon = isDark ? Sun : Moon;

  useEffect(() => {
    document.body.setAttribute("data-theme", isDark ? Theme.Dark : Theme.Light);
  }, [isDark]);
  return (
    <div className={styles.themeSwitcher} onClick={() => setDark(!isDark)}>
      <span>{themeText}</span>
      <ThemeIcon className={styles.icon} />
    </div>
  );
};
