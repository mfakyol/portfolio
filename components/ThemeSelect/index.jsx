import classes from "./style.module.scss";
import useTranslation from "store/LangContext";
import AutoThemeIcon from "@components/_icons/AutoThemeIcon";
import DarkThemeIcon from "@components/_icons/DarkThemeIcon";
import LightThemeIcon from "@components/_icons/LightThemeIcon";
import { useCallback, useEffect, useRef, useState } from "react";
import themes from "@constants/themes";
import { useRouter } from "next/router";

const themeIconMap = {
  auto: AutoThemeIcon,
  light: LightThemeIcon,
  dark: DarkThemeIcon,
};

function ThemeSelect({ className = "" }) {
  const ref = useRef();
  const router = useRouter();
  const t = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState("auto");

  useEffect(() => {
    setSelectedTheme(localStorage.getItem("theme"));

    return () => {};
  }, []);

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

  const browserThemeChangeEvent = (event) => {
    document.documentElement.setAttribute("theme", event.matches ? "dark" : "light");
  };

  useEffect(() => {
    if (selectedTheme == "auto") {
      window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", browserThemeChangeEvent);
    }

    return () => {
      window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", browserThemeChangeEvent);
    };
  }, [selectedTheme]);

  const handleChangeTheme = useCallback((theme) => {
    setIsOpen(false);

    localStorage.setItem("theme", theme);
    if (theme == "auto") {
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.setAttribute("theme", "dark");
      } else {
        document.documentElement.setAttribute("theme", "light");
      }
    } else {
      document.documentElement.setAttribute("theme", theme);
    }

    setSelectedTheme(theme);
  }, []);

  const ThemeIconComponent = themeIconMap[selectedTheme || "auto"];

  return (
    <div className={`${classes.themeSelect} ${className}`}>
      <div className={classes.selectedTheme} onClick={() => setIsOpen((prev) => !prev)}>
        <ThemeIconComponent className={classes.themeIcon} />
        <span className={classes.selectedThemeText}>{t("theme").toLocaleUpperCase(router.locale)}</span>
      </div>
      <ul ref={ref} className={`${classes.themeList} ${isOpen ? classes.show : ""}`}>
        {themes.map((theme) => (
          <li
            key={theme}
            className={`${classes.themeItem} ${selectedTheme == theme ? classes.selected : ""}`}
            onClick={() => handleChangeTheme(theme)}
          >
            {t(theme)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ThemeSelect;
