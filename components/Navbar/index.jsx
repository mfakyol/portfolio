import Link from "next/link";
import useTranslation from "store/LangContext";
import classes from "./style.module.scss";
import navListLinks from "@constants/navListLinks";
import { useCallback, useEffect, useState } from "react";
import LangSelect from "@components/LangSelect";
import ThemeSelect from "@components/ThemeSelect";
import BurgerMenuIcon from "@components/_icons/BurgerMenuIcon";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();
  const t = useTranslation();
  const [scroll, setScroll] = useState(false);
  const [isOpen, setIsopen] = useState(false);

  useEffect(() => {
    const scrollEvent = (e) => {
      if (window.scrollY > 100) setScroll(true);
      else setScroll(false);
    };
    window.addEventListener("scroll", scrollEvent);

    return () => window.removeEventListener("scroll", scrollEvent);
  }, []);

  const closeEvent = useCallback(() => setIsopen(false), []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        document.addEventListener("click", closeEvent);
      }, 50);
    }

    return () => {
      document.removeEventListener("click", closeEvent);
    };
  }, [isOpen, closeEvent]);

  const handleOnClick = (e, link) => {
    console.log(link)
    const el = document.querySelector(link)
    el.scrollIntoView({behavior: "smooth" });
    setIsopen(false)
  }

  return (
    <header className={`${classes.header} ${scroll ? classes.boxShadow : ""}`}>
      <Link href="/#home">
        <a className={classes.logo}>Portfolio</a>
      </Link>
      <nav className={`${classes.nav} ${isOpen ? classes.open : ""}`}>
        <ul className={classes.navList}>
          {navListLinks.map((link, index) => (
            <li key={index} className={classes.navItem} onClick={(e) => handleOnClick(e,link.href)}>
              {t(link.label).toLocaleCapitalCase(router.locale)}
            </li>
          ))}
        </ul>
      </nav>
      <ThemeSelect className={classes.themeSelect} />
      <LangSelect className={classes.langSelect} />
      <BurgerMenuIcon className={classes.burgerMenuIcon} onClick={() => setIsopen((prev) => !prev)} />
    </header>
  );
}

export default Navbar;
