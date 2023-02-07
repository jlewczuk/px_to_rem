import React, { useContext, useEffect, useState } from "react";
import "./Output.scss";
import { CalcContext } from "../../modules/CalcContext";
import { copyToClipboard } from "../../helpers/copyToClipboard";
import { convertToRem } from "../../helpers/convertToRem";

export const Output = () => {
  const { value } = useContext(CalcContext);
  const [ output, setOutput ] = useState<number[]>();

  useEffect(() => {
    const output = convertToRem(value as string);
    setOutput(output);
  }, [value])

  const renderOutput = (output: number[] | undefined) => {
    const outputNode: React.ReactNode[] = [];

    output?.map((item, key) => {
        outputNode.push(<div className="Output__item" key={key} onClick={copyToClipboard}>{item}</div>)
      })

    return outputNode;
  }

  return (
      <div className="Output">{renderOutput(output)}</div>
  )
};