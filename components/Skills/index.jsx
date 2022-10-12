import classes from "./style.module.scss";
import skills from "@constants/skills";
import useTranslation from "store/LangContext";
import { useRouter } from "next/router";

function Skills() {
  const router = useRouter();
  const t = useTranslation();

  return (
    <section id="skills" className={classes.skillsSection} inpagescroll="">
      <h2 className={classes.title}>{t("skills").toLocaleCapitalCase(router.locale)}</h2>

      <div className={classes.skills}>
        {skills.map((skill, index) => (
          <div key={index} className={classes.skill}>
            <div className={classes.skillIconWrapper}>
              <img className={classes.skillIcon} src={skill.src} alt={skill.label} />
            </div>
            <span className={classes.skillLabel}>{skill.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
