import React from "react";

interface LabelProps {
  className: string;
  htmlFor: string;
}

export const Label = ({className, htmlFor}: LabelProps) => {
  return <label className={className} htmlFor={htmlFor}>px to rem</label>
};