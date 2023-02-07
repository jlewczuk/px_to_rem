import React from "react";
import "./Container.scss";

interface ContainerProps {
  children?: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return (
      <div className="Container" >{children}</div>
  )
};