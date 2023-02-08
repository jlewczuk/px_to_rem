import {useContext, useEffect} from "react";
import {CalcContext} from "../modules/CalcContext";

export const useHandleOutsideClick = (ref: any) => {
  const {setIsDropdownOpen} = useContext(CalcContext)
  
  useEffect(() => {
    function handleOutsideClick(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsDropdownOpen?.(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [ref, setIsDropdownOpen]);
}