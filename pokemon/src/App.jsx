import { useEffect, useState } from "react";
import { fetchPokemons } from "api/fetchPokemons";
import { fetchPokemon } from "api/fetchPokemons";
import PokemonCard from "components/PokemonCard/PokemonCard";
import Button from "components/Button/Button";
import { Routes, Route } from "react-router-dom";
import React from "react";
import MainPage from "pages/MainPage/MainPage";
import PokemonInfo from "pages/PokemonInfo/PokemonInfo";
import AboutPage from "pages/AboutPage/AboutPage";

function App() {
  const [ theme, setTheme ] = useState('light')
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme)
  }
  
  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme} className="themeButton">Theme</button>
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/:id" element={<PokemonInfo url={"https://pokeapi.co/api/v2/"}/>}/>
        <Route path="/about" element={<AboutPage />}/>
      </Routes>
    </div>
  );
}

export default App;
