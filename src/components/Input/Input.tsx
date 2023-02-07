import React from "react";
import "./Input.scss";
import { Label } from "../Label";

export const Input = () => {
  return (
      <>
        <input className="Input" type="text" id="input"/>
        <Label className="Input__label" htmlFor="input"/>
      </>
  )
};