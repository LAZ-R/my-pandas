import { useForm } from "react-hook-form";

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
                    <label htmlFor="key">Id :</label>
                    <input {...register("key", { required: true })} />
                    {errors.key && <span>Ce champ est requis</span>}
                </div>
                <div className="formSubCategory">
                    <label htmlFor="nom">Nom :</label>
                    <input {...register("nom", { required: true })} />
                    {errors.nom && <span>Ce champ est requis</span>}
                </div>
                <div className="formSubCategory">
                    <label htmlFor="interest">Centres d'intérêt :</label>
                    <input {...register("interest", { required: true })} />
                    {errors.interest && <span>Ce champ est requis</span>}
                </div>
                <div className="formSubCategory">
                    <label htmlFor="image">Image :</label>
                    <input {...register("image", { required: true })} />
                    {errors.image && <span>Ce champ est requis</span>}
                </div>

                <input type="submit" value="Valider" className="acceptButton" />

                <button className="cancelButton">annuler</button>
            </form>
        </div>
    );
};

export default PandaForm;
