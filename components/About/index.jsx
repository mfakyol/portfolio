import useTranslation from "store/LangContext";
import classes from "./style.module.scss";

function About() {
  const t = useTranslation();

  const handleOnClick = () => {
    document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" inpagescroll="" className={classes.aboutSection}>
      <h2 className={classes.aboutMeTitle}>{t("about_me")}</h2>

      <div className={classes.aboutMeContent}>
        <article className={classes.aboutMeArticle}>
          {t("about_me_article")}
          <br />
          <button className={classes.contactButton} onClick={() => handleOnClick()}>
            {t("contact_with_me")}
          </button>
        </article>

        <img className={classes.aboutMeArticleImage} src="/images/about-me.svg" alt="" />
      </div>
    </section>
  );
}

export default About;
