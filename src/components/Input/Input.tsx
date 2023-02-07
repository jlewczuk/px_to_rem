import React, { useContext } from "react";
import "./Input.scss";
import { Label } from "../Label";
import { CalcContext } from "../../modules/CalcContext";

export const Input = () => {
  const { setValue } = useContext(CalcContext);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue?.(e.target.value);
  }

  return (
      <>
        <input className="Input" type="text" id="input" onChange={onChange}/>
        <Label className="Input__label" htmlFor="input"/>
      </>
  )
};