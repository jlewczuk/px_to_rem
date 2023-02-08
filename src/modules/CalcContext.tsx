import {createContext} from "react";
import {DropdownModel} from "../components";

interface CalcContextType {
  inputValue?: string;
  setInputValue?: (value: string) => void;
  dropdownItem?: DropdownModel;
  setDropdownItem?: (value: DropdownModel) => void;
  isDropdownOpen?: boolean;
  setIsDropdownOpen?: (value: boolean) => void;
}

export const CalcContext = createContext<CalcContextType>({});