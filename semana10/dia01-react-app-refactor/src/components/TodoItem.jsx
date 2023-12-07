
const TodoItem = ({todo, onCompleted, onRemoveTodo}) => {
  return (
    <li className="flex">
                <input
                  className="border-none rounded-lg mr-2"
                  type="checkbox"
                  checked={todo.completed}
                  data-id ={todo.id}
                  onChange={onCompleted}
                />
                <div className="flex justify-between  w-full items-center">
                  <div className={`${todo.completed ? 'line-through': ''} `}>
                    {todo.title}
                  </div>
                  <button
                    className="bg-red-300 rounded-lg p-1 border 
              border-red-500 hover:bg-red-400 duration-300"
              data-id ={todo.id}
              onClick={onRemoveTodo}
                  >
                    ❌
                  </button>
                </div>
              </li>
  )
}

export default TodoItem