import { useState } from "react";

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsername = (e)=>{
        // e.preventDefault();
        const valor = e.target.value;
        setUsername(valor)
        
    }
    const handlePassword = (e)=>{
        const valor = e.target.value;
        setPassword(valor)
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        // console.log('estoy listo para enviar la informacion');

        const URL = 'https://dummyjson.com/auth/login';
        const options = {
            method: 'POST',
            headers:{'content-type': 'application/json'},
            body:JSON.stringify({username, password})
        }
        const response = await fetch(URL, options)
        const data = await response.json()
        console.log(data);
        if(response.ok){
            localStorage.setItem('auth-data', JSON.stringify(data))
        }
        
    }

  return (
    <>
      <h2 className="text-center text-4xl font-bold text-emerald-500">Login</h2>
      <p className="text-gray-500 font-light text-center">
        Ingresa un nombre de usuario y contraseña
      </p>
      <form onSubmit={handleSubmit} className="mt-6 space-y-4" action="">
        <input
          autoFocus
          type="text"
          name="userName"
          required
          className="w-full appearance-none rounded-lg border
            border-gray-300 p-4 text-gray-900 placeholder:text-gray-400 
            focus:border-indigo-500  outline-none"
          placeholder="user Name"
          onChange={handleUsername}
          value={username}
        />
        <input
          type="password"
          autoFocus
          required
          name="password"
          placeholder="password"
          className="w-full appearance-none rounded-lg border
            border-gray-300 p-4 text-gray-900 placeholder:text-gray-400 
            focus:border-indigo-500 outline-none"
            onChange={handlePassword}
            value={password}
        />
        <button type="submit"
          className="w-full rounded-lg border border-transparent bg-indigo-600
            p-4 font-medium text-white hover:bg-indigo-700 focus:outline-none"
        >
          Ingresar
        </button>
      </form>
    </>
  );
}

export default Login;
