import Jumbotron from "./components/Jumbotron";
import React from "react";
import "./App.css";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";

class App extends React.Component{

  state = {
    todos : []
  }



  componentDidMount(){
    let data = [];
    if(localStorage.data){
      data = JSON.parse(localStorage.data)
    }
    this.setState({todos: data})
  }


  markTodo =(index) => {
    const copyTodos = [...this.state.todos];
    copyTodos[index].done = !copyTodos[index].done
    localStorage.data = JSON.stringify(copyTodos)
    this.setState({todos: copyTodos})
  }


  deleteTodo = (index) =>{
    const copyTodos = [...this.state.todos]
    copyTodos.splice(index, 1);
    localStorage.data = JSON.stringify(copyTodos)
    this.setState({todos: copyTodos})
  }

  addIntoTodo = (todo) => {
    // todo = this.state
    todo.id = Math.floor(Math.random() *(10000-10)-10);
    localStorage.data = JSON.stringify([...this.state.todos, todo])
    this.setState({todos: [...this.state.todos, todo]})
  }
  render(){
    return(
      <div>
        <Jumbotron  />
        <NewTodo  addIntoTodo={this.addIntoTodo} />
        <TodoList markTodo={this.markTodo}  todos={this.state.todos} deleteTodo={this.deleteTodo}  />
      </div>
    )
  }
}

export default App;
