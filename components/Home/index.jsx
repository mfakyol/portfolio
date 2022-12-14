import Shape3 from "@components/_icons/shape3";
import useTranslation from "store/LangContext";
import classes from "./style.module.scss";

function Home() {
  const t = useTranslation();

  return (
    <section id="home" inpagescroll="" className={classes.home}>
      <div className={classes.heroes}>
        <div className={classes.content}>
          <h1 className={classes.title}>
            {t("home_title_1")} <br /> {t("home_title_2")} <br /> {t("home_title_3")}
          </h1>
          <p className={classes.slogan}>{t("slogan")}</p>
        </div>

        <Shape3 className={classes.shapeTop} />
        <Shape3 className={classes.shapeBottom} />
      </div>
    </section>
  );
}

export default Home;
