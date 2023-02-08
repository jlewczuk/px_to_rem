import {DropdownModel} from "../components";

export const convertToRem = (pxValues: string, dropdownItem: DropdownModel) => {
  const dropdownValue = dropdownItem?.value;
  const remValues = pxValues?.replace(/\s/g, "").split(",").map(elem => parseFloat(elem) / dropdownValue).filter(Boolean);

  return remValues;
}