import { useEffect, useState } from "react"

export default function App() {
  const [pokemons,setPokemons] = useState([])


  useEffect(() => {
    console.log('Solo se ejecuta la primera vez!')
    const fetchPokemons = async () => {
      const responde = await fetch('https://pokeapi.co/api/v2/pokemon')
      const data = await responde.json()
      console.log(data)
      setPokemons(data.results)
    }
    fetchPokemons()
  }, [])
  return (
    <header className="w-1/2 m-auto">
<h1 className="text-3xl font-bold mb-3 text-center">
      Hello world!
    </h1>
    {/* <pre>{JSON.stringify(pokemons,null,2)}</pre> */}
    {pokemons.map(pokemon=>{
      const id = pokemon.url.split('/').at(-2)
      const pokemonImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
      return(
        <article className="border mb-2 flex flex-col items-center rounded-lg
        bg-slate-100" key={pokemon.url}>
          <h3 className="font-bold uppercase text-center p-3">{pokemon.name}</h3>
          <img src={pokemonImg} alt="" className="w-40" />
        </article>
      )
    })}
    </header>
    
  )
}