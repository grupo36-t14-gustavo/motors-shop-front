"use client";
import BaseModal from "@/components/Global/BaseModalDiv";
import Button from "@/components/Global/Button";
import UserFormInputs from "@/components/Global/UserFormInputs";
import { editProfileSchema } from "@/schemas/editUserData.schema";
import { updateUserRoute } from "@/services/api/User";
import { FormEvent, useState } from "react";
import styles from "./style.module.scss";

const EditProfileModal = () => {
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
            // Insert toastify logic for failure
        }
    };

    return (
        <BaseModal title="Editar Perfil">
            <form onSubmit={handleSubmit}>
                <UserFormInputs setFormData={setFormData} />
                <div className={styles.div_conteiner_button}>
                    <Button name="Cancelar" />
                    <Button name="Excluir Perfil" />
                    <Button name="Salvar alterações" isSubmit={true} />
                </div>
            </form>
        </BaseModal>
    );
};

export default EditProfileModal;
