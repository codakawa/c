import { useEffect, useState } from "react";
import { fetchPokemons } from "api/fetchPokemons";
import PokemonCard from "components/PokemonCard/PokemonCard";
import Button from "components/Button/Button";
import { Link, Router } from "react-router-dom";
import Pagination from "components/Pagination/Pagination";

const MainPage = () => {
    const limit = 10;
    const [countOfPages, setCountOfPages] = useState(0)
    // const next = document.querySelector(".pageUp")
    // const prev = document.querySelector(".pageDown")
    // const currPage = document.querySelector(".pageCount")
    // next.onclick = (e) => {
      //   setOffset(offset += limit)
      // }
      
      
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
      if(offset+1 >= countOfPages) return
      setOffset(prev => prev+=1)
    }
    const prevPage = () => {
      if(offset <= 0) return
      setOffset(prev => prev-=1)      
    }
  
  
  
    const setPokemonInfo = (data) => {
      setPokemonList(data.results)
      setCountOfPages(Math.ceil(data.count / 10))
    }
  
    useEffect(() => {
      fetchPokemons(limit, (offset*10))
      .then((pokeList) => {
        setPokemonInfo(pokeList)
      })
    }, [offset])
    console.log(pokemonList, 'pokemon list state');
  
  
  
  
  
  
    return (
        <div className="container">
          <div className="pokemonList">
            {pokemonList.map(pokemon => 
            <Link to={`/${pokemon.name}`} key={pokemon.name}><PokemonCard pokemon={pokemon}/></Link>
            )}
          </div>
          <div className="page">
            <Pagination pageCount={countOfPages} page={offset+1} handlePrev={prevPage} handleNext={nextPage}/>
          </div>        
        </div>
    );
  }

export default MainPage