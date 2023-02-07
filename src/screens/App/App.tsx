import React from 'react';
import './App.scss';
import { Container, Dropdown, Header, Input, Output } from "../../components";

export function App() {
  return (
        <Container>
          <Header header={"REM Calculator"}></Header>
          <Dropdown />
          <Input />
          <Output />
        </Container>
  );
}
