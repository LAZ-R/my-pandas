import PandaForm, { PandaFormValues } from "../components/PandaForm";
import { Panda } from "../types/Panda";

const handleSubmit = (data: PandaFormValues) => {
    let panda: Panda = {
        key: data.key,
        name: data.nom,
        interests: data.interest.split(","),
        image: data.image,
    };
    console.log(panda);
};

const CreatePandaView = () => {
    return (
        <div className="createPandaView">
            <span className="pageTitle">Créer un nouveau panda</span>
            <PandaForm onSubmit={handleSubmit} />
        </div>
    );
};

export default CreatePandaView;
