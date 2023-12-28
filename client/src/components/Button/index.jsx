import React from "react";
import { twMerge } from "tailwind-merge";

const Button = ({
  children,
  as,
  className,
  generalStylesStatus,
  dataDropdownToggle,
  ...props
}) => {
  const Component = as || "button";

  // General Styles
  const generalStyles = [
    "max-w-fit transition duration-200 border shadow-sm inline-flex items-center px-4 py-4 justify-center rounded-md font-medium cursor-pointer inline-flex items-center justify-center text-base font-medium text-gradient-yellow-300 bg-gradient-yellow-300 hover:text-gradient-yellow-300 hover:bg-gradient-yellow-300", // Default
    "leading-normal shadow-[0_4px_9px_-5px] transition duration-150 ease-in-out hover:shadow-[0_4px_18px_0_rgba(96,255,83,0.2)]",
    "my-2",
  ];

  return (
    <Component
      className={twMerge([generalStylesStatus && generalStyles, className])}
      {...props}
      data-dropdown-toggle={dataDropdownToggle && dataDropdownToggle}
    >
      {children}
    </Component>
  );
};

Button.defaultProps = {
  generalStylesStatus: true,
};

export default Button;
