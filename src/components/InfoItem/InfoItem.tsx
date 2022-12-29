import styles from "./InfoItem.module.scss";

export interface InfoItemProps {
  icon: React.ReactNode;
  text?: string | null;
  isLink?: boolean;
}

export const InfoItem = ({ icon, text, isLink }: InfoItemProps) => {
  const currentText = text || "Not Available";
  let currentHref: string = "";

  if (isLink) {
    currentHref =
      text && text.startsWith("https://github.com/")
        ? text
        : `https://github.com/${text}`;
  }
  return (
    <div className={`${styles.infoItem} ${text ? "" : `${styles.empty}`}`}>
      {icon}
      <div>
        {isLink && text ? (
          <a
            href={currentHref}
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            {text}
          </a>
        ) : (
          currentText
        )}
      </div>
    </div>
  );
};
