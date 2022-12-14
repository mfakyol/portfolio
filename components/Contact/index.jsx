import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import useTranslation from "store/LangContext";
import classes from "./style.module.scss";
import connects from "@constants/connects";
import { useRouter } from "next/router";

function Contact() {
  const router = useRouter();
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const subjectInputRef = useRef();
  const messageInputRef = useRef();

  const t = useTranslation();
  const [initScript, setInitScript] = useState(false);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  useEffect(() => {
    setInitScript(true);
  }, []);

  return (
    <>
      {initScript && (
        <Script
          onLoad={() => setIsScriptLoaded(true)}
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
        />
      )}

      <section id="contact" className={classes.contactSection} inpagescroll="">
        <h2 className={classes.title}>{t("contact").toLocaleCapitalCase(router.locale)}</h2>
        <div className={classes.contactWrapper}>
          <div className={classes.infoContainer}>
            <img className={classes.infoImage} src="/images/computer.jpg" alt="" />

            <p className={classes.infoName}>Fatih AKYOL</p>
            <p className={classes.infoJob}>Frontend Developer</p>
            <p className={classes.infoText}>
              {"I am available for freelance or full-time positions. Contact me and let's talk."}
            </p>

            <p className={classes.connectTitle}>{t("socials").toLocaleUpperCase(router.locale)}</p>
            <ul className={classes.connectList}>
              {connects.map((connect, index) => (
                <li key={index} className={classes.connectItem}>
                  <Link href={connect.href}>
                    <a className={classes.connectItemContent} rel="noopener noreferrer" target="_black">
                      <img src={connect.iconSrc} alt={connect.label} />
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <form className={classes.contactForm}>
            <h3 className={classes.contactTitle}>{t("contact_with_me").toLocaleUpperCase(router.locale)}</h3>

            <label htmlFor="name" className={classes.label}>
              {t("name").toLocaleCapitalCase(router.locale)}
            </label>
            <input ref={nameInputRef} className={classes.input} type="text" name="name" id="name" />

            <label htmlFor="email" className={classes.label}>
              {t("email").toLocaleCapitalCase(router.locale)}
            </label>
            <input ref={emailInputRef} className={classes.input} type="text" name="email" id="email" />

            <label htmlFor="subject" className={classes.label}>
              {t("subject").toLocaleCapitalCase(router.locale)}
            </label>
            <input ref={subjectInputRef} className={classes.input} type="text" name="subject" id="subject" />

            <label htmlFor="message" className={classes.label}>
              {t("message").toLocaleCapitalCase(router.locale)}
            </label>
            <textarea ref={messageInputRef} className={classes.textarea} name="message" id="message"></textarea>
            <button className={classes.submitButton}>{t("submit").toLocaleCapitalCase(router.locale)}</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
