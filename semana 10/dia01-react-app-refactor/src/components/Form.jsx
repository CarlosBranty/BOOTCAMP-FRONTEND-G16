import { useState } from 'react'



const Form = ({onSubmit}) => {

    const [input,setInput] = useState('');
    // 

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
        onSubmit(newtodo)
    
    
        setInput('');
      }
  return (
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
  )
}

export default Form