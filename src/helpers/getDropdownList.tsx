interface DropdownListProps {
  startValue: number,
  iteratorValue: number,
  maxValue: number
}

export const getDropdownList = ({startValue, iteratorValue, maxValue}: DropdownListProps) => {
  const dropdownList = [];
  const quantity = (maxValue - startValue) / iteratorValue;

  for (let i = 0; i <= quantity; i++) {
    dropdownList.push({
      id: i,
      value: startValue,
      selected: false,
    })

    startValue += iteratorValue;
  }

  return dropdownList;
}