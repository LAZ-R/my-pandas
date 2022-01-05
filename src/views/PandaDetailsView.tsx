import React from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "reactstrap";
import PandaDetails from "../components/PandaDetails";
import usePandaDetails from "../hooks/usePandaDetails";

const handleClose = () => {
  alert(`Panda was Closed`);
};

const PandaDetailsView = () => {
  let params = useParams();
  let id = params.pandaId;
  const { data, isLoading, error } = usePandaDetails(id);
  return (
    <div className="pandaDetailsView">
      <span className="pageTitle">Détails du panda</span>
      {isLoading && <Spinner />}
      {error && <p>On a une erreur</p>}
      {!isLoading && data && (
        <PandaDetails panda={data} onClose={handleClose} />
      )}
    </div>
  );
};

export default PandaDetailsView;
