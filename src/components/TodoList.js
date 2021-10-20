import React from "react";
import Todo from "./Todo";

function TodoList({todos, markTodo, deleteTodo}) {

    const allTodos = todos.map((todo, index) => {
        return (
            <Todo todo={todo} index={index} deleteTodo={deleteTodo} markTodo={markTodo}  key={todo.id}/>
        )
    })
  return (
    <div className="container">
      <div className="row">
        {allTodos}
      </div>
    </div>
  );
}

export default TodoList;
