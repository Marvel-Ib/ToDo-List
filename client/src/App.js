import React, { Fragment } from "react";
import "./App.css";

//componrnt
import InputTodo from "./components/inputTodo";
import ListTodos from "./components/ListTodos";

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputTodo />
        <ListTodos />
      </div>
    </Fragment>
  );
}

export default App;
