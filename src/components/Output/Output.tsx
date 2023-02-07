import React, { useContext, useEffect, useState } from "react";
import "./Output.scss";
import { CalcContext } from "../../modules/CalcContext";

export const Output = () => {
  const { value } = useContext(CalcContext);
  const [ output, setOutput ] = useState<string>();

  const convertToRem = (pxValues: string) => {
    const remValues = pxValues?.split(",").map(elem => parseFloat(elem) / 16).filter(Boolean).join(" ");
    return remValues;
  }

  useEffect(() => {
    const output = convertToRem(value as string);
    setOutput(output);
  }, [value])

  return (
      <div className="Output">{output}</div>
  )
};