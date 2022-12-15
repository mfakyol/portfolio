import dynamic from "next/dynamic";
import Label from "@components/Label";
import { useRouter } from "next/router";
import classes from "./style.module.scss";
import TextArea from "@components/Textarea";
import TextInput from "@components/TextInput";
import useTranslation from "store/LangContext";
import { useCallback, useRef, useState } from "react";
import { sendForm } from "@emailjs/browser";

function Contact() {
  const router = useRouter();

  const formRef = useRef();
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const subjectInputRef = useRef();
  const messageInputRef = useRef();

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [messageError, setMessageError] = useState("");

  const t = useTranslation();

  const handleOnSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const name = nameInputRef.current.value;
      const email = emailInputRef.current.value;
      const subject = subjectInputRef.current.value;
      const message = messageInputRef.current.value;

      let isValid = true;
      if (!name) {
        setNameError(t("name_required"));
        isValid = false;
      }
      if (!email) {
        setEmailError(t("email_required"));
        isValid = false;
      }
      if (!subject) {
        setSubjectError(t("subject_required"));
        isValid = false;
      }
      if (!message) {
        setMessageError(t("message_required"));
        isValid = false;
      }

      if (isValid) {
        sendForm("service_xjgjpqj", "portfolio_contact", formRef.current, "B0hRDPxNxHMLim6g1").then((res) => {
          if (res.status == 200) {
            nameInputRef.current.value = "";
            emailInputRef.current.value = "";
            subjectInputRef.current.value = "";
            messageInputRef.current.value = "";
            // will show success alert
          } else {
            // will show error alert
          }
        });
      }
    },
    [t]
  );

  return (
    <>
      <section id="contact" className={classes.contactSection} inpagescroll="">
        <h2 className={classes.title}>{t("contact").toLocaleCapitalCase(router.locale)}</h2>
        <div className={classes.contactWrapper}>
          <img src="/images/contact.svg" alt="" className={classes.contactImage} />

          <form ref={formRef} className={classes.contactForm} onSubmit={handleOnSubmit}>
            <h3 className={classes.contactTitle}>{t("contact_with_me").toLocaleUpperCase(router.locale)}</h3>

            <Label htmlFor="name">{t("name").toLocaleCapitalCase(router.locale)}</Label>
            <TextInput ref={nameInputRef} name="name" id="name" error={nameError} setError={setNameError} />

            <Label htmlFor="email">{t("email").toLocaleCapitalCase(router.locale)}</Label>
            <TextInput ref={emailInputRef} name="email" id="email" error={emailError} setError={setEmailError} />

            <Label htmlFor="subject"> {t("subject").toLocaleCapitalCase(router.locale)}</Label>
            <TextInput
              ref={subjectInputRef}
              name="subject"
              id="subject"
              error={subjectError}
              setError={setSubjectError}
            />

            <Label htmlFor="message">{t("message").toLocaleCapitalCase(router.locale)}</Label>
            <TextArea
              ref={messageInputRef}
              name="message"
              id="message"
              error={messageError}
              setError={setMessageError}
            />

            <button className={classes.submitButton}>{t("submit").toLocaleCapitalCase(router.locale)}</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
