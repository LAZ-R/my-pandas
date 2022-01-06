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
                <div className="rightZone">
                    <div className="headerIcon">
                        <i
                            className="fas fa-plus"
                            onClick={() => {
                                navigate("/pandas/new");
                            }}
                        ></i>
                    </div>
                    <div className="headerIcon">
                        <i
                            className="fas fa-list"
                            onClick={() => {
                                navigate("/pandas");
                            }}
                        ></i>
                    </div>
                </div>
            </div>
            <div className="headerBlank"></div>
        </div>
    );
};

export default Header;
