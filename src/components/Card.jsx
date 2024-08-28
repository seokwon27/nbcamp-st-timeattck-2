import { useNavigate } from "react-router-dom";

const Card = ({ pokemon, isSelected, addPokemon, removePokemon }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        onClick={() => {
          navigate(`/detail?id=${pokemon.id}`);
        }}
      >
        <img src={pokemon.img_url} />
        <p>{pokemon.korean_name}</p>
      </div>
      {isSelected ? (
        <button
          onClick={() => {
            removePokemon(pokemon);
          }}
        >
          삭제
        </button>
      ) : (
        <button
          onClick={() => {
            addPokemon(pokemon);
          }}
        >
          추가
        </button>
      )}
    </div>
  );
};

export default Card;
