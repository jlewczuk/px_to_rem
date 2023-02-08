import {DropdownModel} from "../components";

interface ConvertToRemProps {
  pxValues: string,
  dropdownItem: DropdownModel
}

export const convertToRem = ({pxValues, dropdownItem}: ConvertToRemProps) => {
  const dropdownValue = dropdownItem?.value;
  return pxValues?.replace(/\s/g, "").split(",").map(elem => parseFloat(elem) / dropdownValue).filter(Boolean);
}