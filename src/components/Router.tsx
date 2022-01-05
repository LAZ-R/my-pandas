import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import PandaDetailsView from "../views/PandaDetailsView";
import PandasListView from "../views/PandaListView";
import Home from "./Home";

import Header from "./Header";
import CreatePandaView from "../views/CreatePandaView";
// import your route components too

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pandas" element={<PandasListView />} />
          <Route path="/pandas/:pandaId" element={<PandaDetailsView />} />
          <Route path="/pandas/new" element={<CreatePandaView />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Router;
