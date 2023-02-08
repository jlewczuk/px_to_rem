import React, {useState} from 'react';
import './App.scss';
import {Container, Dropdown, DropdownModel, Header, Input, Output} from "../../components";
import {CalcContext} from "../../modules/CalcContext";

export function App() {
  const [inputValue, setInputValue] = useState<string | undefined>();
  const [dropdownItem, setDropdownItem] = useState<DropdownModel>();
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  return (
      <CalcContext.Provider
          value={{inputValue, setInputValue, dropdownItem, setDropdownItem, isDropdownOpen, setIsDropdownOpen}}>
        <Container>
          <Header header={"REM Calculator"}/>
          <Dropdown title={"Select root value"}/>
          <Input/>
          <Output/>
        </Container>
      </CalcContext.Provider>
  );
}
