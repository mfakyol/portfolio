import classes from "./style.module.scss";
import { forwardRef, useCallback } from "react";

const TextInput = forwardRef(({ wrapperClassName = "", className = "", error, setError, onChange, ...rest }, ref) => {
  const handleOnChange = useCallback(
    (e) => {
      setError?.("");
      onChange?.(e);
    },
    [setError, onChange]
  );

  return (
    <div className={`${classes.wrapper} ${wrapperClassName}`}>
      <input
        ref={ref}
        className={`${classes.input} ${error ? classes.error : ""} ${className}`}
        onChange={handleOnChange}
        type="text"
        {...rest}
      />
      {error && <p className={classes.errorText}>{error}</p>}
    </div>
  );
});

TextInput.displayName = "TextInput";

export default TextInput;
