"use client";
import AdressFormInputs from "@/components/Global/AdressFormInputs";
import BaseModal from "@/components/Global/BaseModalDiv";
import { FormEvent, useState } from "react";

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
            <form action="">
                <AdressFormInputs  setFormData={setFormData}/>
            </form>
        </BaseModal>
    );
};

export default EditAdressModal;
