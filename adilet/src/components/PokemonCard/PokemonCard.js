import React, { useEffect, useState } from 'react'
import { fetchPokemonId } from 'api/fetchPokemons';
import Pagination from 'components/Pagination';
const PokemonCard = ({ pokemon }) => {
  const [ imgURl, setImgURL ] = useState();
// sprites.other.dream_world.front_default
  useEffect(() => {
    fetchPokemonId(pokemon.url)
    .then((pokemon) => setImgURL(pokemon.sprites.other.dream_world.front_default))
  }, [ pokemon.url ])
  return (
    <div className='pokemonCard'>
      <h3>{pokemon.name}</h3>
      <img src={imgURl} alt="" />
    </div>
  )
}

export default PokemonCard