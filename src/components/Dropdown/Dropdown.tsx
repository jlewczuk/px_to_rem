import React, {useContext, useRef} from "react";
import "./Dropdown.scss";
import {CalcContext} from "../../modules/CalcContext";
import {getDropdownList} from "../../helpers/getDropdownList";
import {ICONS} from "../../constants/constants";
import {useHandleOutsideClick} from "../../hooks/useOutsideClick";

interface DropdownProps {
  title?: string;
}

export interface DropdownModel {
  id: number,
  value: number,
  selected: boolean,
}

export const Dropdown = ({title}: DropdownProps) => {
  const {isDropdownOpen, setIsDropdownOpen, dropdownItem, setDropdownItem} = useContext(CalcContext)
  const dropdownList = getDropdownList({startValue: 8, iteratorValue: 2, maxValue: 64});
  const isValueSelected = dropdownItem?.value;
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleList = () => {
    setIsDropdownOpen?.(!isDropdownOpen);
  }

  const selectItem = (item: DropdownModel) => {
    setDropdownItem?.(item);
    toggleList();
  }

  useHandleOutsideClick(dropdownRef);

  return (
      <div className="Dropdown" ref={dropdownRef}>
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
          <img className="Dropdown__header-icon" src={isDropdownOpen ? ICONS.ICON_UP : ICONS.ICON_DOWN}
               alt="dropdownIcon"/>
        </button>
        {isDropdownOpen && (
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