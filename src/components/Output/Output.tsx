import React, {useContext, useEffect, useState} from "react";
import "./Output.scss";
import {CalcContext} from "../../modules/CalcContext";
import {copyToClipboard} from "../../helpers/copyToClipboard";
import {convertToRem} from "../../helpers/convertToRem";

export const Output = () => {
  const {inputValue, dropdownItem} = useContext(CalcContext);
  const [output, setOutput] = useState<number[]>();

  useEffect(() => {
    if (inputValue && dropdownItem) {
      const output = convertToRem(inputValue, dropdownItem);
      setOutput(output);
    }
  }, [inputValue, dropdownItem])

  const renderOutput = (output: number[] | undefined) => {
    const outputNode: React.ReactNode[] = [];

    output?.map((item, key) => {
      return outputNode.push(<div className="Output__item" key={key} onClick={copyToClipboard}>{item}</div>)
    })

    return outputNode;
  }

  return (
      <div className="Output">{renderOutput(output)}</div>
  )
};