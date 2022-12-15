import classes from "./style.module.scss";
import socials from "@constants/socials.json";
import Link from "next/link";

function Social() {
  return (
    <div className={classes.socials}>
      {socials.map((social, index) => (
        <Link className={classes.social} key={index} href={social.href} target="_blank">
          <img className={classes.image} src={social.iconSrc} alt="" />
        </Link>
      ))}
    </div>
  );
}

export default Social;
