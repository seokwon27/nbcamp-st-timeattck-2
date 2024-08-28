import Card from "./Card";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const selectedPokemon = useSelector((state) => state.PokemonSlice);

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
