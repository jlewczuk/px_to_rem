import {createContext} from "react";
import {DropdownModel} from "../components";

interface CalcContextType {
  inputValue?: string;
  setInputValue?: (value: string) => void;
  dropdownItem?: DropdownModel;
  setDropdownItem?: (value: DropdownModel) => void;
}

export const CalcContext = createContext<CalcContextType>({});