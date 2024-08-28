import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      Home
      <button onClick={() => navigate("/dex")}>도감 시작하기</button>
    </div>
  );
};

export default Home;
