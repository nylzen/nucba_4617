import { Toaster } from "@pheralb/toast";
import "./App.css";
import { Counter } from "./components/counter/counter";
import { TodoList } from "./components/todolist/todo-list";

function App() {
  return (
    <>
      <Counter />
      <TodoList />
      <Toaster richColors />
    </>
  );
}

export default App;
