import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

const Home = () => {
  let navigate = useNavigate();
  return (
    <div className="home">
      <span className="pageTitle">Accueil</span>
      <p>
        Panda géant
        <br />
        <i>Ailuropoda melanoleuca</i>
      </p>
      <p>
        Le panda géant <i>(Ailuropoda melanoleuca)</i> est une espèce de
        mammifères, habituellement classée dans la famille des ursidés
        (Ursidae), endémique de la Chine centrale. Il fait partie de l'ordre des
        Carnivores, même si son régime alimentaire est constitué à 99 % de
        végétaux, principalement du bambou. Il ne vit que dans le centre de la
        Chine, dans des régions montagneuses recouvertes de forêts d'altitude,
        des provinces du Sichuan et du Gansu (dans les régions traditionnelles
        de l'Amdo et du Kham du Tibet oriental), ainsi qu'au Shaanxi, entre 1
        000 et 4 000 mètres.
      </p>
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
