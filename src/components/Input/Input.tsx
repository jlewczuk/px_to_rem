import React, {useContext} from "react";
import "./Input.scss";
import {Label} from "../Label";
import {CalcContext} from "../../modules/CalcContext";

export const Input = () => {
  const {setInputValue} = useContext(CalcContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.replace(/[^0-9\s,]/g, '');

    event.target.value = inputValue;
    setInputValue?.(inputValue);
  }

  return (
      <>
        <input className="Input" type="text" id="input" onChange={handleChange}/>
        <Label className="Input__label" htmlFor="input"/>
      </>
  )
};