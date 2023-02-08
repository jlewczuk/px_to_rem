import {DropdownModel} from "../components";

export const convertToRem = (pxValues: string, dropdownItem: DropdownModel) => {
  const dropdownValue = dropdownItem?.value;
  const remValues = pxValues?.split(",").map(elem => parseFloat(elem) / dropdownValue).filter(Boolean);

  return remValues;
}