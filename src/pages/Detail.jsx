import { useNavigate, useSearchParams } from "react-router-dom";
import MOCK_DATA from "../mock";

const Detail = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const pokemon = MOCK_DATA.find((el) => {
    return el.id === +id;
  });

  const navigate = useNavigate();

  return (
    <div>
      <img src={pokemon.img_url} />
      <p>{pokemon.korean_name}</p>
      <p>{pokemon.description}</p>
      <button
        onClick={() => {
          navigate("/dex");
        }}
      >
        뒤로가기
      </button>
    </div>
  );
};

export default Detail;
