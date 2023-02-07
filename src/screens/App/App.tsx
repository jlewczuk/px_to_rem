import React, {useContext, useState} from 'react';
import './App.scss';
import { Container, Dropdown, Header, Input, Output } from "../../components";
import { CalcContext } from "../../modules/CalcContext";

export function App() {
  const [value, setValue] = useState<string | undefined>();

  return (
      <CalcContext.Provider value={{ value, setValue }}>
        <Container>
          <Header header={"REM Calculator"}></Header>
          <Dropdown />
          <Input />
          <Output />
        </Container>
      </CalcContext.Provider>
  );
}
