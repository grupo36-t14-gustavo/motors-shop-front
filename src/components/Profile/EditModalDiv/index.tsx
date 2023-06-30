"use client";
import BaseModal from "@/components/Global/BaseModalDiv";
import Button from "@/components/Global/Button";
import RegisterUserInputs from "@/components/Global/RegisterUserInputsDiv";
import { editProfileSchema } from "@/schemas/editUserData.schema";
import { FormEvent, useState } from "react";
import { ZodError } from "zod";

const EditModal = () => {
    const [formData, setFormData] = useState({});

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const validatedData = editProfileSchema.parse(formData);

            
        } catch (err) {
            if (err instanceof ZodError) {
                console.log(err.flatten().fieldErrors);
            }
        }
    };

    return (
        <BaseModal title="Editar Perfil">
            <form onSubmit={handleSubmit}>
                <RegisterUserInputs setFormData={setFormData} />
                <div>
                    <Button name="Cancelar" />
                    <Button name="Excluir Perfil" />
                    <Button name="Salvar alterações" isSubmit={true} />
                </div>
            </form>
        </BaseModal>
    );
};

export default EditModal;
