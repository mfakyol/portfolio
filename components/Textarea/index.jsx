import classes from "./style.module.scss";
import { forwardRef, useCallback } from "react";

const TextArea = forwardRef(({ wrapperClassName = "", className = "", error, setError, onChange, ...rest }, ref) => {
  const handleOnChange = useCallback(
    (e) => {
      setError?.("");
      onChange?.(e);
    },
    [setError, onChange]
  );

  return (
    <div className={`${classes.wrapper} ${wrapperClassName}`}>
      <textarea
        ref={ref}
        className={`${classes.textarea} ${error ? classes.error : ""} ${className}`}
        onChange={handleOnChange}
        {...rest}
      ></textarea>
      {error && <p className={classes.errorText}>{error}</p>}
    </div>
  );
});

TextArea.displayName = "TextArea";

export default TextArea;
