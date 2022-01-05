import React from "react";
import { Spinner } from "reactstrap";
import PandasList from "../PandasList";
import usePandas from "../hooks/usePandas";

import { NavigateFunction } from "react-router-dom";

const handlePress = (id: string, navigate: NavigateFunction) => {
  navigate("/pandas/" + id);
};

const PandasListView = () => {
  const { data, isLoading, error } = usePandas();
  return (
    <div className="pandasListView">
      <span className="pageTitle">Liste des pandas</span>
      {isLoading && <Spinner />}
      {error && <p>On a une erreur</p>}
      {!isLoading && data && <PandasList pandas={data} onPress={handlePress} />}
    </div>
  );
};

export default PandasListView;
