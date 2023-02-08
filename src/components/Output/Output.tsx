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
      const output = convertToRem({pxValues: inputValue, dropdownItem: dropdownItem});
      setOutput(output);
    } else {
      setOutput([]);
    }
  }, [inputValue, dropdownItem])

  const renderOutput = () => {
    return (
        <div className="Output">
          {output?.map((item, key) =>
              <div className="Output__item" key={key} onClick={copyToClipboard}>{item}</div>
          )}
        </div>
    )
  }

  return renderOutput()
};