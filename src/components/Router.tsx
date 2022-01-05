import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import PandaDetailsView from "../views/PandaDetailsView";
import PandasListView from "../views/PandaListView";
import Home from "./Home";
// import your route components too

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pandas" element={<PandasListView />} />
        <Route path="/pandas/:pandaId" element={<PandaDetailsView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
