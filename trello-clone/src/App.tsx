import React from 'react';
import { AppContainer } from "./styles"
import {Column} from "./Column";
import {Card} from "./Card";
import {AddNewItem} from "./AddNewItem";

function App() {
  return (
    <AppContainer className="App">
        <Column text={"To Do"}>
            <Card text={"Generate app scaffold"} />
        </Column>
        <Column text={"In Progress"}>
            <Card text={"Learn TypeScript"} />
        </Column>
        <Column text={"Done"}>
            <Card text={"Being to use static typing"} />
        </Column>
        <AddNewItem onAdd={console.log} toggleButtonText={"+ Add another list"} />
    </AppContainer>
  );
}

export default App;
