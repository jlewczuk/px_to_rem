import React, {useContext, useState} from "react";
import "./Dropdown.scss";
import {CalcContext} from "../../modules/CalcContext";
import {getDropdownList} from "../../helpers/getDropdownList";
import {ICONS} from "../../constants/constants";

interface DropdownProps {
  title?: string;
}

export interface DropdownModel {
  id: number,
  value: number,
  selected: boolean,
}

export const Dropdown = ({title}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const {dropdownItem, setDropdownItem} = useContext(CalcContext)
  const dropdownList = getDropdownList(2);
  const isValueSelected = dropdownItem?.value;

  const toggleList = () => {
    setIsOpen(!isOpen);
  }

  const selectItem = (item: DropdownModel) => {
    if (setDropdownItem) {
      setDropdownItem(item);
      toggleList();
    }
  }

  return (
      <div className="Dropdown">
        <button
            type="button"
            className="Dropdown__header"
            onClick={toggleList}
        >
          {!isValueSelected
              ? <div className="Dropdown__header-title">{title}</div>
              : (
                  <div className="Dropdown__header-title">Root value
                    <div className="Dropdown__header-value">{dropdownItem?.value}px</div>
                  </div>
              )
          }
          <img className="Dropdown__header-icon" src={isOpen ? ICONS.ICON_UP : ICONS.ICON_DOWN} alt="dropdownIcon"/>
        </button>
        {isOpen && (
            <div
                role="list"
                className="Dropdown__list"
            >
              {dropdownList.map((item) => (
                  <button
                      type="button"
                      className="Dropdown__list-item"
                      key={item.id}
                      onClick={() => selectItem(item)}
                  >
                    {item.value}
                  </button>
              ))}
            </div>
        )}
      </div>
  )
};