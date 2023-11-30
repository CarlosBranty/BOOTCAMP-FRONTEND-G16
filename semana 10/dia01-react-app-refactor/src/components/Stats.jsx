

const Stats = ({todos, onClearTodos}) => {
    const completedTodos = todos.filter(todo => todo.completed === true);

      
     
  return (
    
        <div className="flex justify-between">
          <span className="font-bold">{completedTodos.length} / {todos.length} </span>
          <button
            className="bg-orange-200 rounded-lg px-2 py-1 text-orange-600 border border-orange-600
          hover:bg-orange-300 duration-300" onClick={onClearTodos}
          >
            Limpiar tareas completadas
          </button>
        </div>
      
  )
}

export default Stats