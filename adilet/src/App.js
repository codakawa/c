import { useState } from "react";

import { Routes, Route } from "react-router-dom";
import { AboutPage, MainPage, PokemonInfo } from "pages";

function App() {
  const [ theme, setTheme ] = useState('light')

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme)
  }


  return (
    <div className={`app ${theme}`}>
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/:name" element={<PokemonInfo />} />
        </Routes>
    <button onClick={toggleTheme}>Change Theme</button>
      
      </div>
    </div>
  );
}

export default App;
