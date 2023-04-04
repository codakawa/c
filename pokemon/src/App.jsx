import { useEffect, useState } from "react";
import { fetchPokemons } from "./api/fetchPokemons";
import { fetchPokemon } from "./api/fetchPokemons";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import Button from "./components/Button/Button";
function App() {
  const limit = 10;
  let countOfPages = 0;
  const setCount = (num) => {
    countOfPages = num;
    console.log(countOfPages);
  }
  // const next = document.querySelector(".pageUp")
  // const prev = document.querySelector(".pageDown")
  // const currPage = document.querySelector(".pageCount")
  // next.onclick = (e) => {
    //   setOffset(offset += limit)
    // }
    
    
  const [ theme, setTheme ] = useState('light')
  const [ pokemonList, setPokemonList ] = useState([]);
  let [offset, setOffset] = useState(0);
  // prev.onclick = (e) => {
  //   if(offset <= 10) {
  //     setOffset(0)
  //   } else {
  //     setOffset(offset -= limit)
  //   }
  // }

  const nextPage = () => {
    setOffset(prev => prev+=1)
  }
  const prevPage = () => {
    if(!(offset <= 0)) {
      setOffset(prev => prev-=1)      
    }
  }


  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme)
  }

  const setPokemonInfo = (data) => {
    setPokemonList(data.results)
    setCount(data.count)
  }

  useEffect(() => {
    fetchPokemons(limit, (offset*10))
    .then((pokeList) => setPokemonInfo(pokeList))
    
    
  }, [offset])
  console.log(pokemonList, 'pokemon list state');



  return (
    <div className={`app ${theme}`}>
      <div className="container">
        <button onClick={toggleTheme}>Theme</button>
        <div className="pokemonList">
          {pokemonList.map(pokemon => <PokemonCard key={pokemon.name} pokemon={pokemon} />)}
        </div>
        <div className="page">
          <Button clickFunc={prevPage}>PREV</Button>
          <span className="pageCount">{offset+1}</span>
          <Button clickFunc={nextPage}>NEXT</Button>
        </div>        
      </div>
    </div>
  );
}

export default App;
