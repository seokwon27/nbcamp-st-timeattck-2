import { useContext } from "react";
import Card from "./Card";
import { PokeomonContext } from "../App";

const Dashboard = () => {
  const { selectedPokemon } = useContext(PokeomonContext);
  return (
    <div>
      {selectedPokemon.length === 0 ? (
        <p>선택된 포켓몬이 없습니다.</p>
      ) : (
        selectedPokemon.map((pokemon) => {
          return <Card isSelected={true} pokemon={pokemon} key={"selected" + pokemon.id} />;
        })
      )}
    </div>
  );
};

export default Dashboard;
