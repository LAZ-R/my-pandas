import { useForm } from "react-hook-form";
import { Input, Label } from "reactstrap";

export type PandaFormValues = {
    key: string;
    nom: string;
    interest: string;
    image: string;
};

type PandaFormProps = {
    onSubmit: (data: PandaFormValues) => void;
};

const PandaForm = (props: PandaFormProps) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<PandaFormValues>();

    return (
        <div className="pandaForm">
            <form onSubmit={handleSubmit(props.onSubmit)}>
                <div className="formSubCategory">
                    <Label for="key">Id :</Label>
                    <Input {...register("key", { required: true })} />
                    {errors.key && <span>Ce champ est requis</span>}
                </div>
                <div className="formSubCategory">
                    <Label for="nom">Nom :</Label>
                    <Input {...register("nom", { required: true })} />
                    {errors.nom && <span>Ce champ est requis</span>}
                </div>
                <div className="formSubCategory">
                    <Label for="interest">Centres d'intérêt :</Label>
                    <Input {...register("interest", { required: true })} />
                    {errors.interest && <span>Ce champ est requis</span>}
                </div>
                <div className="formSubCategory">
                    <Label for="image">Image :</Label>
                    <Input {...register("image", { required: true })} />
                    {errors.image && <span>Ce champ est requis</span>}
                </div>

                <Input type="submit" value="Valider" className="acceptButton" />

                <button className="cancelButton">Annuler</button>
            </form>
        </div>
    );
};

export default PandaForm;
