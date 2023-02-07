import React from "react";
import "./Header.scss";

interface HeaderProps {
  header?: string;
}

export const Header = ({header}: HeaderProps) => {
  return (
      <div className="Header" >{header}</div>
  )
};