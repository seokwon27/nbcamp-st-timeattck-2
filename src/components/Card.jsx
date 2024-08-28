import { useNavigate } from "react-router-dom";
import { addPokemon, removePokemon } from "../redux/PokemonSlice";
import { useDispatch } from "react-redux";

const Card = ({ pokemon, isSelected }) => {
  // const { addPokemon, removePokemon } = useContext(PokeomonContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
            dispatch(removePokemon(pokemon));
          }}
        >
          삭제
        </button>
      ) : (
        <button
          onClick={() => {
            dispatch(addPokemon(pokemon));
          }}
        >
          추가
        </button>
      )}
    </div>
  );
};

export default Card;
