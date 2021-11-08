import React from "react";
import TodoList from "./Todo/TodoList";
import Context from "./context";
import AddTodo from "./Todo/AddTodo";

function App() {
    const [todos, setTodos] = React.useState([
        {id: 1, completed: false, title: "Купить хлеб", time: " 00-00"},
        {id: 2, completed: true, title: "Купить молоко", time: " 00-00"},
        {id: 3, completed: false, title: "Купить масло", time: " 00-00"},
    ],
    );


    function toggleTodo(id){
        setTodos(
            todos.map(todo => {
                if (todo.id === id){
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        )
    }
    function changeTodo(id, title){
        setTodos(
            todos.map(todo =>{
                if (todo.id === id){
                    todo.title = title;
                }
                return todo;
            }
        ))
    }
    function findTitle(title){
        for(let i = 0; i < todos.length; i++){
            if (todos[i].title === title) return false;
        }
        return true
    }
    function removeTodo(id){
        setTodos(todos.filter(todo => todo.id !== id))
    }

    function addTodo(title){
        let currentdate = new Date();
        let datetime = " " + currentdate.getDate() + "/"
            + (currentdate.getMonth()+1)  + "/"
            + currentdate.getFullYear() + " @ "
            + currentdate.getHours() + ":"
            + currentdate.getMinutes() + ":"
            + currentdate.getSeconds();
        setTodos(todos.concat([{
            title,
            id: Date.now(),
            completed: false,
            time:  datetime
        }]))
    }
  return (

      <Context.Provider value={{removeTodo,changeTodo}}>
        <div className="wrapper">
          <h1>Todo App</h1>
          <AddTodo onCreate={addTodo} fT = {findTitle}/>
          {todos.length ? <TodoList todos={todos} onToggle={toggleTodo} cT = {changeTodo} fT = {findTitle}/> : <p>No todos!</p>}
        </div>
      </Context.Provider>
  );
}

export default App;
