import { Panda } from "../types/Panda";

type PandaDetailsProps = {
  panda: Panda;
  onClose: () => void;
};

const PandaDetails = (props: PandaDetailsProps) => {
  return (
    <div className="pandaDetails">
      <div className="pandaDetailsName">
        Nom : <span className="value">{props.panda.name}</span>
      </div>
      <div className="pandaDetailsPhoto">
        <img src={props.panda.image} className="pandaPhoto" />
      </div>
      <div className="pandaDetailsInterests">
        Centres d'intéret :
        {props.panda.interests.map((interest: string) => (
          <li>
            <span className="value">{interest}</span>
          </li>
        ))}
      </div>
    </div>
  );
};

export default PandaDetails;
