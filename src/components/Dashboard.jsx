import Card from "./Card";

const Dashboard = ({ selectedPokemon, removePokemon }) => {
  return (
    <div>
      {selectedPokemon.length === 0 ? (
        <p>선택된 포켓몬이 없습니다.</p>
      ) : (
        selectedPokemon.map((pokemon) => {
          return (
            <Card
              removePokemon={removePokemon}
              isSelected={true}
              pokemon={pokemon}
              key={"selected" + pokemon.id}
            />
          );
        })
      )}
    </div>
  );
};

export default Dashboard;
