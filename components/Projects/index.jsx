import Link from "next/link";
import classes from "./style.module.scss";
import useTranslation from "store/LangContext";
import { useRouter } from "next/router";

function Projects() {
  const router = useRouter();
  const t = useTranslation();

  return (
    <section id="projects" className={classes.projectsSection} inpagescroll="">
      <h2 className={classes.title}>{t("projects").toLocaleCapitalCase(router.locale)}</h2>

      <div className={classes.projects}>
        <Link href="">
          <a className={classes.project}>
            <img className={classes.projectImage} src="/images/test.png" alt="" />

            <div className={classes.projectOverlay}>
              <h3 className={classes.projectTitle}>Project title</h3>
              <p className={classes.projectTechnology}>Next.js</p>

              <span className={classes.seeMore}>{t("see_more")}</span>
            </div>
          </a>
        </Link>
        <Link href="">
          <a className={classes.project}>
            <img className={classes.projectImage} src="/images/test.png" alt="" />

            <div className={classes.projectOverlay}>
              <h3 className={classes.projectTitle}>Project title</h3>
              <p className={classes.projectTechnology}>Next.js</p>

              <span className={classes.seeMore}>{t("see_more")}</span>
            </div>
          </a>
        </Link>
        <Link href="">
          <a className={classes.project}>
            <img className={classes.projectImage} src="/images/test.png" alt="" />

            <div className={classes.projectOverlay}>
              <h3 className={classes.projectTitle}>Project title</h3>
              <p className={classes.projectTechnology}>Next.js</p>

              <span className={classes.seeMore}>{t("see_more")}</span>
            </div>
          </a>
        </Link>
        <Link href="">
          <a className={classes.project}>
            <img className={classes.projectImage} src="/images/test.png" alt="" />

            <div className={classes.projectOverlay}>
              <h3 className={classes.projectTitle}>Project title</h3>
              <p className={classes.projectTechnology}>Next.js</p>

              <span className={classes.seeMore}>{t("see_more")}</span>
            </div>
          </a>
        </Link>
      </div>
    </section>
  );
}

export default Projects;
