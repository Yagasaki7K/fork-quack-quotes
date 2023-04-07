import React from "react";
import QuackLogo from "../../public/images/quack.svg";
import { IoSearch } from "react-icons/io5";
import Image from "next/image";
import styles from "./Navbar.module.css";
import TagContainer from "../tag/TagContainer";

const Navbar = () => {
  return (
    <>
      <header className={`container ${styles.navbarMain}`}>
        <nav className={styles.searchNav}>
          <form action="submit" className={styles.searchBar}>
            <input
              type="search"
              placeholder="Quotes, author, category..."
              autoComplete="true"
              className={`body-S ${styles.searchInput}`}
            />
            <button type="submit" className={styles.searchButton}>
              <IoSearch />
            </button>
          </form>
        </nav>
        <Image
          src={QuackLogo}
          alt="Quack Redação"
          className={styles.quackLogo}
        />
      </header>
      <TagContainer />
    </>
  );
};

export default Navbar;
