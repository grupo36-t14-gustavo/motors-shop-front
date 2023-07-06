"use client";
import AdressFormInputs from "@/components/Global/AdressFormInputs";
import BaseModal from "@/components/Global/BaseModalDiv";
import Button from "@/components/Global/Button";
import { FormEvent, useState } from "react";
import styles from "../EditProfileModalDiv/style.module.scss";

const EditAdressModal = () => {
    const [formData, setFormData] = useState({});

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            // const validatedData = editAdressSchema.parse(formData);
            // const token = localStorage.getItem("token");
            // if (token) {
            // await updateAdressRoute(validatedData, token);
            // }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <BaseModal title="Editar Endereço">
            <form onSubmit={handleSubmit} action="">
                <AdressFormInputs setFormData={setFormData} />
                <div className={styles.div_conteiner_modal}>
                    <Button name="Cancelar" />
                    <Button name="Salvar Alterações" />
                </div>
            </form>
        </BaseModal>
    );
};

export default EditAdressModal;
