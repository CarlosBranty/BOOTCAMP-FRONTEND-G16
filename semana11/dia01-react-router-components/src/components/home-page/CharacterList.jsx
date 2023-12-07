import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  const fetchCharacters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    return data.results;
  };

  useEffect(() => {
    fetchCharacters().then((result) => setCharacters(result));
  }, []);

  return (
    <>
      <section className="grid grid-cols-4 gap-4 mt-6">
        {characters.map((character) => {
          return (
            <Link key={character.id} to={`/chatacter/${character.id}`}>
              <article className="bg-yellow-200 rounded-lg p-3 cursor-pointer hover:bg-yellow-300">
                <img src={character.image} alt={character.name} />

                <div className="font-bold text-center mt-2">
                  {character.name}
                </div>
                <div className="text-center text-yellow-900 font-bold bg-yellow-400 rounded-md">
                  {character.species}
                </div>
              </article>
            </Link>
          );
        })}
        {/* <pre>{JSON.stringify(characters, null, 2)}</pre>; */}
      </section>
    </>
  );
};

export default CharacterList;
