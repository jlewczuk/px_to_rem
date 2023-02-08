import {RefObject, useContext, useEffect} from "react";
import {CalcContext} from "../modules/CalcContext";

export const useHandleOutsideClick = (ref: RefObject<HTMLDivElement>) => {
  const {setIsDropdownOpen} = useContext(CalcContext)

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsDropdownOpen?.(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [ref, setIsDropdownOpen]);
}