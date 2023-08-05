import { useEffect } from "react";
import { useState } from "react";
import styles from "./ThemeSwitcher.module.css";

export const ThemeSwitcher = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    localStorage.setItem("theme", dark ? "dark" : "light");
    document.body.classList.add(dark ? "dark" : "light");
    document.body.classList.remove(dark ? "light" : "dark");
  });

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setDark(true);
    }
  }, []);

  const handleClick = () => {
    setDark((prevState) => !prevState);
  };
  console.log(dark);
  return (
    <div className={styles.checkbox}>
      <label className={styles.checklabel}>
        <input
          className={styles.checkinput}
          type="checkbox"
          checked={dark}
          onChange={handleClick}
        />
        <span className={styles.check}></span>
      </label>
    </div>
  );
};
