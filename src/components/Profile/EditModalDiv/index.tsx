"use client";
import BaseModal from "@/components/Global/BaseModalDiv";
import Button from "@/components/Global/Button";
import RegisterUserInputs from "@/components/Global/RegisterUserInputsDiv";
import { editProfileSchema } from "@/schemas/editUserData.schema";
import { updateUserRoute } from "@/services/api/User";
import { FormEvent, useState } from "react";
import { ZodError } from "zod";

const EditModal = () => {
    const [formData, setFormData] = useState({});

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const validatedData = editProfileSchema.parse(formData);

            const token = localStorage.getItem("token");

            if (token) {
                await updateUserRoute(validatedData, token);
            }

            // Insert toastify logic for success
        } catch (err) {
            if (err instanceof ZodError) {
                console.log(err.flatten().fieldErrors);
            }
            // Insert toastify logic for failure
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
