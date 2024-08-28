import MOCK_DATA from "../mock";
import Card from "./Card";

const List = ({ selectedPokemon, addPokemon }) => {
  return (
    <div>
      {MOCK_DATA.map((pokemon) => {
        return (
          <Card
            key={pokemon.id}
            pokemon={pokemon}
            isSelected={false}
            selectedPokemon={selectedPokemon}
            addPokemon={addPokemon}
          />
        );
      })}
    </div>
  );
};

export default List;
