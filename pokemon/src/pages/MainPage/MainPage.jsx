import { useEffect, useState } from "react";
import { fetchPokemon, fetchPokemons } from "api/fetchPokemons";
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
  
    const checkBox = (e) => {
      const typeNum = e.target.id
      const copy = Object.assign({}, types)
      // e.target.defaultChecked = false;
      if(e.target.checked || e.target.defaultChecked) {
        fetchPokemon(`https://pokeapi.co/api/v2/type/${typeNum}`)
        .then((data) => {
  
          copy[typeNum-1] = data.pokemon
          setTypes(copy)
          console.log(types);
        })
      } else {
        copy[typeNum-1] = []
        setTypes(copy)
        console.log(types);
      }
    }

    const [types, setTypes] = useState({
      0: [],
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: [],
      7: []
    })

    useEffect(() => {
      let newList = []
      const typesCopy = Object.values(types)
      for(let i of typesCopy) {
        newList = newList.concat(i)
        console.log(newList);
      }
      setPokemonList(newList)
      console.log(pokemonList);
      setCountOfPages(Math.ceil(newList.length / 10))
      paggination()
      // fetchPokemon("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
      // .then((data) => {
      //   setPokemonList(data.results)
      //   setCurrentList(pokemonList)
      //   console.log(pokemonList);
      // })
      // .finally(() => {
      //   setLoad(false)
      // })
    }, [types])

    // const [typesSelected, setTypesSelecte] = useState(false)
    const [load, setLoad] = useState(true)

    const [currentList, setCurrentList] = useState([])
    useEffect(() => { 
      // fetchPokemons(limit, (offset*10))
      // .then((pokeList) => {
      //   setPokemonInfo(pokeList)
      // })
      // for(let i = offset*10; i <= ((offset*10)+10); i++) {
      //   setCurrentList(currentList.concat(pokemonList[i]))
      // }
      
      paggination()
    }, [offset])
    console.log(pokemonList, 'pokemon list state');

    // useEffect(() => {
    //   checkBox({
    //     target: {
    //       id: 1,
    //       checked: true
    //   }})
    // }, [])

    useEffect(() => {
      paggination()
    }, [pokemonList])
  
    const paggination = () => {
      setCurrentList(pokemonList.slice(offset*10, offset*10+10))
    }
  
  
  
  if(load) {
    return (
        <div className="container">
          <div className="checkBoxes">
            <span>TYPES</span>
            <div className="types">
              <span>1</span>
              <input type="checkbox" name="1" id="1" onClick={checkBox}/>
            </div>
            <div className="types">
              <span>2</span>
              <input type="checkbox" name="2" id="2" onClick={checkBox}/>
            </div>
            <div className="types">
              <span>3</span>
              <input type="checkbox" name="3" id="3" onClick={checkBox}/>
            </div>
            <div className="types">
              <span>4</span>
              <input type="checkbox" name="4" id="4" onClick={checkBox}/>
            </div>
            <div className="types">
              <span>5</span>
              <input type="checkbox" name="5" id="5" onClick={checkBox}/>
            </div>
            <div className="types">
              <span>6</span>
              <input type="checkbox" name="6" id="6" onClick={checkBox}/>
            </div>
            <div className="types">
              <span>7</span>
              <input type="checkbox" name="7" id="7" onClick={checkBox}/>
            </div>
            <div className="types">
              <span>8</span>
              <input type="checkbox" name="8" id="8" onClick={checkBox}/>
            </div>
          </div>
          <div className="pokemonList">
            {currentList.map(pokemon => 
            <Link to={`/${pokemon.pokemon.name}`} key={pokemon.pokemon.name}><PokemonCard pokemon={pokemon.pokemon}/></Link>
            )}
            
            
          </div>
          <div className="page">
            <Pagination pageCount={countOfPages} page={offset+1} handlePrev={prevPage} handleNext={nextPage}/>
          </div>        


        </div>
    );
  }
  }

export default MainPage