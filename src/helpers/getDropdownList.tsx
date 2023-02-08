interface DropdownListProps {
  valueIterator: number,
  quantity: number
}

export const getDropdownList = ({valueIterator, quantity}: DropdownListProps) => {
  let value = 0;
  const dropdownList = [];

  for (let i = 0; i < quantity; i++) {
    value += valueIterator;

    dropdownList.push({
      id: i,
      value: value,
      selected: false,
    })
  }

  return dropdownList;
}