import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

const Home = () => {
  let navigate = useNavigate();
  return (
    <div className="home">
      <span>Accueil</span>
      <Button
        className="homeNavButton"
        onClick={() => {
          navigate("/pandas");
        }}
      >
        Liste des pandas
      </Button>
    </div>
  );
};

export default Home;
