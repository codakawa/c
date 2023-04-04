import React, { useState } from 'react'
import { fetchPokemon } from '../../api/fetchPokemons';

const PokemonCard = ({ pokemon }) => {
// sprites.other.dream_world.front_default
  const [pokeImg, setImg] = useState("")
  // // let data = {}

  fetchPokemon(pokemon.url)
  .then((data) => setImg(data.sprites.other.dream_world.front_default))
  // fetch(pokemon.url)
  // .then((response) => response.json())
  // .then((rData) => currentPokeImg = rData.sprites.other.dream_world.front_default)

  // currentPokeImg = data.sprites.other.dream_world.front_default

  return (
    <div className='pokemonCard'>
      <span>{pokemon.name}</span>
      {pokeImg === null && <span><b>Without Image</b></span>}
      {pokeImg !== null && <img src={pokeImg} alt="404" />}
      {/* <img src={pokeImg} alt="404" /> */}
    </div>
  )
}

export default PokemonCard