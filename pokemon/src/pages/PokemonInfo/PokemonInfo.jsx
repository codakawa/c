import React, { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { fetchPokemon } from 'api/fetchPokemons'
import { useEffect } from 'react'

const PokemonInfo = ({ url }) => {
    const { id } = useParams();
    console.log(id, "id");

    const [pokeInfo, setInfo] = useState({})
    const [load, setLoad] = useState(true)

    useEffect(() => {
        fetchPokemon(`${url}pokemon/${id}`)
        .then((data) => setInfo(data))
        .finally(() => setLoad(false))
    }, [ id ])
    
    if(!load) {
        console.log(pokeInfo);
        return (
          <div className='pokemonInfo'>
              <div className="image">
                  <img src={pokeInfo.sprites.other.dream_world.front_default} alt="" />
              </div>
              <div className="info">
                  <h1>{id.toUpperCase()}</h1>
                  <div className="stats">
                      <div className="stat">
                        <h3>{pokeInfo.stats[0].stat.name}</h3>
                        <span>{pokeInfo.stats[0].base_stat}</span>
                      </div>
                      <div className="stat">
                        <h3>{pokeInfo.stats[1].stat.name}</h3>
                        <span>{pokeInfo.stats[1].base_stat}</span>
                      </div>
                      <div className="stat">
                        <h3>{pokeInfo.stats[2].stat.name}</h3>
                        <span>{pokeInfo.stats[2].base_stat}</span>
                      </div>
                  </div>
              </div>
          </div>
        )
    }
}

export default PokemonInfo