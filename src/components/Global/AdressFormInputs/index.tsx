import { ChangeEvent, Dispatch, SetStateAction } from "react";
import BaseInput from "../BaseInput";
import { tEditAdress } from "@/interfaces/user.interface";
import { iCreateAdress } from "@/services/api/Adress";
import fontStyles from "../../../styles/globalFonts.module.scss";
import styles from "./style.module.scss";

const AdressFormInputs = ({
    setFormData,
}: {
    setFormData: Dispatch<SetStateAction<iCreateAdress | tEditAdress>>;
}) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.currentTarget;

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    return (
        <>
            <h3 className={`${fontStyles.body_2_500}`}>
                Informações de Endereço
            </h3>
            <BaseInput
                name="cep"
                placeholder="12345-678"
                label="CEP"
                handleChange={handleChange}
            />
            <div className={`${styles.input_shrink}`}>
                <BaseInput
                    name="state"
                    placeholder="Paraná"
                    label="Estado"
                    handleChange={handleChange}
                />
                <BaseInput
                    name="city"
                    placeholder="Curitiba"
                    label="Cidade"
                    handleChange={handleChange}
                />
            </div>
            <BaseInput
                name="street"
                placeholder="Rua do Paraná"
                label="Rua"
                handleChange={handleChange}
            />
            <div className={`${styles.input_shrink}`}>
                <BaseInput
                    name="number"
                    placeholder="1040"
                    label="Número"
                    handleChange={handleChange}
                />
                <BaseInput
                    name="complement"
                    placeholder="Apart 12"
                    label="Complemento"
                    handleChange={handleChange}
                />
            </div>
        </>
    );
};

export default AdressFormInputs;
