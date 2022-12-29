import styles from "./Search.module.scss";
import { ReactComponent as SearchIcon } from "../../assets/icon-search.svg";
// import { useRef } from "react";
import { Button } from "../Button";

interface SearchProps {
  hasError: boolean;
  onSubmit: (text: string) => void;
}

type FormFields = {
  username: HTMLInputElement;
};

export const Search = ({ hasError, onSubmit }: SearchProps) => {
  // const searchRef = useRef<HTMLInputElement | null>(null);
  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement & FormFields>
  ) => {
    event.preventDefault();
    const text = event.currentTarget.username.value;
    // const text = searchRef.current?.value || "";
    // if (text) {
    //   onSubmit(text);
    //   if (searchRef.current) {
    //     searchRef.current.value = "";
    //   }
    // }
    if (text.trim()) {
      onSubmit(text);
      event.currentTarget.reset();
    }
  };
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className={styles.search}>
        <label htmlFor="search" className={styles.label}>
          <SearchIcon />
        </label>
        <input
          type="text"
          className={styles.textField}
          id="search"
          name="username"
          placeholder="Set GitHub username id..."
          // ref={searchRef}
        />
        {hasError && <div className={styles.error}>No result</div>}
        <Button children="Search" />
      </div>
    </form>
  );
};
