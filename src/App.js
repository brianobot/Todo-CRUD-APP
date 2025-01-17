import React, { useReducer, createContext } from 'react';
import ToDoList from './components/TodoList';


const todosInitialState = {
  todos: [
    { id: 1, text: "finishing writing hooks chapter" },
    { id: 2, text: "play with kids" },
    { id: 3, text: "read bible" }
  ]
};

function todosReducer(state, action) {
  switch (action.type) {
    case 'delete':
      const filteredTodoState = state.todos.filter(todo => todo.id !== action.payload.id)
      return { ...state, todos: filteredTodoState }

    default:
      return todosInitialState
  }
}
export const TodosContext = createContext()

function App() {
  const [state, dispatch] = useReducer(todosReducer, todosInitialState);

  return (
    <div>
      <TodosContext.Provider value={{ state, dispatch }}>
        <ToDoList />
      </TodosContext.Provider>
    </div>
  );
}

export default App;
