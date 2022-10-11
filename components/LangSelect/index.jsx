import GlobeIcon from "@components/_icons/GlobeIcon";
import { useRouter } from "next/router";
import useTranslation from "store/LangContext";
import classes from "./style.module.scss";
import translations from "@constants/translations";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

const langs = Object.keys(translations);

function LangSelect({className=""}) {
  const ref = useRef();
  const router = useRouter();
  const t = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const event = useCallback((e) => {
    if (ref.current.contains(e.target)) return;
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        document.addEventListener("click", event, { once: true });
      }, 50);
    }

    return () => {
      document.removeEventListener("click", event);
    };
  }, [isOpen, event]);

  return (
    <div className={`${classes.langSelect} ${className}`}>
      <div className={classes.selectedLang} onClick={() => setIsOpen((prev) => !prev)}>
        <GlobeIcon className={classes.globeIcon} /> <span className={classes.selectedLangText}>{router.locale}</span>
      </div>
      <ul ref={ref} className={`${classes.langList} ${isOpen ? classes.show : ""}`}>
        {langs.map((lang) => (
          <li key={lang} className={`${classes.langItem} ${router.locale == lang ? classes.selected : ""}`}>
            <Link href={router.pathname} locale={lang}>
              <a
                className={classes.langItemContent}
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                {t(lang)}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LangSelect;
