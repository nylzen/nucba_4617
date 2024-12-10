import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addTodo } from "../../redux/slices/todo-slice";
import { toast } from "@pheralb/toast";

export const TodoList = () => {
  const [todo, setTodo] = useState("");

  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setTodo(e.target.value);
  }

  const handleAddTodo = () => {
    if(!todo) {
      toast.error({
        text: 'No se puede agregar una tarea vacia'
      })
      return
    }
    dispatch(addTodo(todo))
    setTodo('')
    toast.success({
      text: 'Tarea agregada correctamente'
    })
  }

  return (
    <>
      <h1>Todo</h1>
      <input
        type="text"
        value={todo}
        onChange={handleChange}
        placeholder="Nueva tarea"
      />
      <button onClick={handleAddTodo}>Enviar</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.todo}</li>
        ))}
      </ul>
    </>
  );
};

