export const getDropdownList = (valueIterator: number) => {
  let value = 0;
  const dropdownList = [];

  for (let i = 0; i < 16; i++) {
    value += valueIterator;
    dropdownList.push({
      id: i,
      value: value,
      selected: false,
    })
  }

  return dropdownList;
}