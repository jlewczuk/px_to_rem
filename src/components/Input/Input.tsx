import React, {useContext} from "react";
import "./Input.scss";
import {Label} from "../Label";
import {CalcContext} from "../../modules/CalcContext";

export const Input = () => {
  const {setInputValue} = useContext(CalcContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const isToBeSeparated = inputValue.includes(" ") && inputValue.at(-1) !== " ";

    event.target.value = inputValue.replace(/[^0-9\s,.]/g, '');

    if (isToBeSeparated) {
      const separatedValue = inputValue.replace(/\s/g, ",");
      event.target.value = separatedValue;
      setInputValue?.(separatedValue);
    } else {
      setInputValue?.(inputValue);
    }
  }

  return (
      <>
        <input className="Input" type="text" id="input" onChange={handleChange}/>
        <Label className="Input__label" htmlFor="input"/>
      </>
  )
};