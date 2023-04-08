import React from 'react'
import { useParams } from 'react-router-dom'
const PokemonInfo = () => {

    const { name } = useParams();
    console.log(name, 'params');
        
  return (
    <div>PokemonInfo</div>
  )
}

export default PokemonInfo