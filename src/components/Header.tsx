import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import Logo from "../Logo";

const Header = () => {
    let navigate = useNavigate();
    return (
        <div className="headerZone">
            <div className="header">
                <div className="logoZone" onClick={() => navigate("/")}>
                    <Logo />
                </div>
                <Button
                    onClick={() => {
                        navigate("/pandas");
                    }}
                >
                    My Pandas
                </Button>
                <Button
                    onClick={() => {
                        navigate("/pandas/new");
                    }}
                >
                    Nouveau PANDA
                </Button>
            </div>
            <div className="headerBlank"></div>
        </div>
    );
};

export default Header;
