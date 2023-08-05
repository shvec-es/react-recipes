import { useState } from "react";
import { FiShoppingCart, FiAlignJustify } from "react-icons/fi";
import { Container } from "../Container/Container";
import { MobileMenu } from "../MobileMenu/MobileMenu";
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";
import styles from "./Header.module.css";

export const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleMenu = () => {
    setIsOpenMenu((prevState) => !prevState);
  };

  return (
    <header>
      <Container>
        <div className={styles.flexContainer}>
          <nav className={styles.nav}>
            <ul className={styles.list}>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/favorites">Favorites</a>
              </li>
            </ul>
          </nav>
          <a href="/" className={styles.logo}>
            <span className={styles.logoAccent}>tasty</span>treats.
          </a>
          <div className={styles.iconsWrapper}>
            <button className={styles.iconBtn}>
              <FiShoppingCart size={24} color="#050505" />
            </button>
            <button className={styles.iconBtn} onClick={handleMenu}>
              <FiAlignJustify
                size={32}
                color="#050505"
                className={styles.burger}
              />
            </button>
            <ThemeSwitcher />
          </div>
        </div>
      </Container>
      {isOpenMenu && <MobileMenu toggleMenu={handleMenu} />}
    </header>
  );
};
