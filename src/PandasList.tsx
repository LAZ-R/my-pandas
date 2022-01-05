import { NavigateFunction, useNavigate } from "react-router-dom";
import PandaItem from "./PandaItem";
import { Panda } from "./types/Panda";

type PandasListProps = {
  pandas: Panda[];
  onPress: (id: string, navigate: NavigateFunction) => void;
};

// ce qu'on va exporter
const PandasList = (props: PandasListProps) => {
  let navigate = useNavigate();
  return (
    <div className="pandasList">
      {props.pandas.map((panda: Panda) => (
        <PandaItem
          key={panda.key}
          name={panda.name}
          onPress={() => {
            props.onPress(panda.key, navigate);
          }}
        />
      ))}
    </div>
  );
};

export default PandasList;
