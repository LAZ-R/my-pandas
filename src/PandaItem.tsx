type PandaItemProps = {
  name: string;
  onPress: () => void;
};

// ce qu'on va exporter
const PandaItem = (props: PandaItemProps) => {
  return (
    <div onClick={props.onPress} className="pandaItem">
      <span>{props.name.charAt(0)}</span>
      <br></br>
      <span>{props.name}</span>
    </div>
  );
};

export default PandaItem;
