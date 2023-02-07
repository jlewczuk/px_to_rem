import { createContext } from "react";

interface CalcContextType {
  value?: string;
  setValue?: (value: string) => void;
}

export const CalcContext = createContext<CalcContextType>({});