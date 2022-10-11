import Link from "next/link";
import useTranslation from "store/LangContext";
import classes from "./style.module.scss";
import navListLinks from "@constants/navListLinks";
import { useEffect, useState } from "react";

function Navbar() {
  const t = useTranslation();
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const scrollEvent = (e) => {
      if (window.scrollY > 100) setScroll(true);
      else setScroll(false);
    };
    window.addEventListener("scroll", scrollEvent);

    return () => window.removeEventListener("scroll", scrollEvent);
  }, []);

  return (
    <header className={`${classes.header} ${scroll ? classes.boxShadow : ""}`}>
      <Link href="/#home">
        <a>Logo</a>
      </Link>
      <nav className={classes.nav}>
        <ul className={classes.navList}>
          {navListLinks.map((link, index) => (
            <li key={index} className={classes.navItem}>
              <Link href={link.href}>
                <a className={classes.navItemContent}>{t(link.label)}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
