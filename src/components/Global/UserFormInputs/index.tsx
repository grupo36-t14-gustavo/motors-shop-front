import { ChangeEvent, Dispatch, SetStateAction } from "react";
import BaseInput from "../BaseInput";
import BaseTextarea from "../BaseTextarea";
import { tEditUser } from "@/interfaces/editUser.interface";

const UserFormInputs = ({
    setFormData,
}: {
    setFormData: Dispatch<SetStateAction<tEditUser>>;
}) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.currentTarget.name === "cpf") {
            const newCpfValue = maskCpfInput(event.currentTarget.value);
            event.currentTarget.value = newCpfValue;
        }

        const { name, value } = event.currentTarget;

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const maskCpfInput = (cpf: string) => {
        const numericValue = cpf.replace(/\D/g, "");
        const maskedValue = numericValue.replace(
            /(\d{3})(\d{3})(\d{3})(\d{2})/,
            "$1.$2.$3-$4"
        );

        return maskedValue;
    };

    return (
        <>
            <h3>Informações Pessoais</h3>
            <BaseInput
                type="text"
                name="name"
                placeholder="Seu nome aqui"
                label="Nome"
                handleChange={handleChange}
            />
            <BaseInput
                type="text"
                name="email"
                placeholder="seuemail@outlook.com.br"
                label="Email"
                handleChange={handleChange}
            />
            <BaseInput
                type="text"
                name="cpf"
                placeholder="012.345.678-90"
                label="CPF"
                handleChange={handleChange}
            />
            <BaseInput
                type="text"
                name="cellphone"
                placeholder="(012) 93456-7890"
                label="Celular"
                handleChange={handleChange}
            />
            <BaseInput
                type="number"
                name="birthdate"
                placeholder="01/12/99"
                label="Data de Nascimento"
                handleChange={handleChange}
            />
            <BaseTextarea
                name="bio"
                placeholder="Digite sua descrição"
                label="Descrição"
                handleChange={handleChange}
            />
        </>
    );
};

export default UserFormInputs;
