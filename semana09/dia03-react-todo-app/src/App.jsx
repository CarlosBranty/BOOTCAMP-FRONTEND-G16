import { useState } from "react";

const App = () => {
  
 
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);

  const [input,setInput] = useState('');

  const handleChange = (e) => {
   
    const value = e.target.value;
    setInput(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newtodo = {
      id: crypto.randomUUID(),
      title: input,
      completed: false,
    }
    const updatedTodos = [...todos,newtodo];
    setTodos([...todos,newtodo])
    
    localStorage.setItem('todos',JSON.stringify(updatedTodos));

    setInput('');
  }
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

  const completedTodos = () => {
    const completedTodos = todos.filter(todos => todos.completed === true);

    return completedTodos.length;
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
      <h1 className="text-2xl font-bold">TO DO-APP</h1>
     
      <form onSubmit={handleSubmit}>
        <input
          className="w-full border my-3 p-3 rounded-lg"
          type="text"
          placeholder="Que deseseas hacer hoy?"
          required
          value={input}
          onChange={handleChange}
          
        />
      </form>

 {todos.length > 0 && (
      <div className="flex justify-between">
        <span className="font-bold">{completedTodos()} / {todos.length} </span>
        <button
          className="bg-orange-200 rounded-lg px-2 py-1 text-orange-600 border border-orange-600
        hover:bg-orange-300 duration-300" onClick={handleClearTodos}
        >
          Limpiar tareas completadas
        </button>
      </div>
     )}

      <section className="mt-4">
        <ul className="flex flex-col gap-2">
          {todos.map((todo) => {
            return (
              <li className="flex" key={todo.id}>
                <input
                  className="border-none rounded-lg mr-2"
                  type="checkbox"
                  checked={todos.completed}
                  data-id ={todo.id}
                  onChange={handleCompleted}
                />
                <div className="flex justify-between  w-full items-center">
                  <div className={`${todo.completed ? 'line-through': ''} `}>
                    {todo.title}
                  </div>
                  <button
                    className="bg-red-300 rounded-lg p-1 border 
              border-red-500 hover:bg-red-400 duration-300"
              data-id ={todo.id}
              onClick={handleRemoveTodo}
                  >
                    ❌
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
};

export default App;
