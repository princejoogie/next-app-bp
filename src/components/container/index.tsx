import React from "react";

const Container: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children, className, ...rest }) => {
  return (
    <div {...rest} className={`container px-4 mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default Container;
