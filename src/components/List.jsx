import MOCK_DATA from "../mock";
import Card from "./Card";

const List = () => {
  return (
    <div>
      {MOCK_DATA.map((pokemon) => {
        return <Card key={pokemon.id} pokemon={pokemon} isSelected={false} />;
      })}
    </div>
  );
};

export default List;
