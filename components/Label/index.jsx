import { forwardRef } from "react";
import classes from "./style.module.scss";

const Label = forwardRef(({ className = "", children, ...rest }, ref) => (
  <label ref={ref} className={`${classes.label} ${className}`} {...rest}>
    {children}
  </label>
));

Label.displayName = "Label";

export default Label;
