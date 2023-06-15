import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Card from "./components/todoCard";
import { todoList } from "./mocks/todos";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App__todoList">
        {todoList.map((todo) => (
          <Card data={todo} key={todo.id} />

        ))}
      </div>
    </div>
  );
}

export default App;
