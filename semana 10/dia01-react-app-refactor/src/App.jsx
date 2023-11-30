import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Stats from "./components/Stats";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);

  
  const handleRemoveTodo = (e)=>{
    const idSelected = e.target.dataset.id;
    const newTodos = todos.filter(todo=>todo.id !== idSelected);
    setTodos(newTodos);
    localStorage.setItem('todos',JSON.stringify(newTodos));
  }

  const handleCompleted = (e)=>{
    console.log("completanmdo tarea")
    const idSelected = e.target.dataset.id;
    const isCheked = e.target.checked;
    const newTodos = todos.map(todo =>{
      if(todo.id === idSelected){
        return {...todo,completed:isCheked}
      }
      return todo;
      
    })
    setTodos(newTodos);
    localStorage.setItem('todos',JSON.stringify(newTodos));
  }


  const handleSubmit = (newtodo) => {
      const updatedTodos = [...todos,newtodo];

     setTodos(updatedTodos)
    //  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);
     localStorage.setItem('todos',JSON.stringify(updatedTodos));
  }
  const handleClearTodos = ()=>{
    const incompletedTodos = todos.filter(todo => todo.completed === false);
    setTodos(incompletedTodos);
  }

  return (
    <main
      className="bg-yellow-100 w-full max-w-sm mx-auto 
    mt-10 border border-yellow-600 rounded-lg shadow-lg p-4"
    >
      <Header/>
      <Form onSubmit={handleSubmit}/>
      {todos.length > 0 && <Stats todos={todos} onClearTodos={handleClearTodos} />}
      
 

      <section className="mt-4">
        <TodoList 
        todos={todos} 
        onCompleted={handleCompleted} 
        onRemoveTodo={handleRemoveTodo}/>
        
      </section>
    </main>
  );
};

export default App;
