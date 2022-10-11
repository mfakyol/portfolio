import React from "react";

function IconWrapper({ children, fill = "black", ...rest }) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill={fill} {...rest}>
      {children}
    </svg>
  );
}

export default IconWrapper;
