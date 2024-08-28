import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Dex from "./pages/Dex";
import Detail from "./pages/Detail";
import { createContext, useState } from "react";

export const PokeomonContext = createContext();

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const addPokemon = (pokemon) => {
    if (selectedPokemon.some((el) => pokemon.id === el.id)) {
      alert("이미 선택된 포켓몬입니다.");
      return;
    }
    if (selectedPokemon.length === 6) {
      alert("6개");
      return;
    }
    setSelectedPokemon([...selectedPokemon, pokemon]);
    console.log(selectedPokemon);
  };

  const removePokemon = (pokemon) => {
    setSelectedPokemon(
      selectedPokemon.filter((el) => {
        return el.id !== pokemon.id;
      })
    );
  };
  return (
    <PokeomonContext.Provider
      value={{
        selectedPokemon,
        addPokemon,
        removePokemon,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dex" element={<Dex />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </PokeomonContext.Provider>
  );
}

export default App;
