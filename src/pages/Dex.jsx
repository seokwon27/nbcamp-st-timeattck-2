import { useState } from "react";
import Dashboard from "../components/Dashboard";
import List from "../components/List";

const Dex = () => {
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
    <>
      <Dashboard selectedPokemon={selectedPokemon} removePokemon={removePokemon} />
      <List
        selectedPokemon={selectedPokemon}
        setSelectedPokemon={setSelectedPokemon}
        addPokemon={addPokemon}
        removePokemon={removePokemon}
      />
    </>
  );
};

export default Dex;
