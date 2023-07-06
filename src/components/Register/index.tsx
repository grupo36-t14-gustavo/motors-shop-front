"use client";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ChangeEvent, FormEvent, useState } from "react";
import { z } from "zod";
import Button from "../Global/Button/index";
import styles from "./style.module.scss";
import fontStyles from "../../styles/globalFonts.module.scss";
import UserFormInputs from "../Global/UserFormInputs";
import AdressFormInputs from "../Global/AdressFormInputs";
import { createUserWithAdressRoute } from "@/services/api/User";
import { useRouter } from "next/navigation";
import BaseInput from "../Global/BaseInput";
import RightsContainer from "../Global/RightsContainerDiv";

const schemaAddress = z.object({
    cep: z.string(),
    state: z.string(),
    city: z.string(),
    street: z.string(),
    number: z.string(),
    complement: z.string(),
});

const schemaRegister = z.object({
    name: z.string(),
    email: z.string().email(),
    avatar: z.string().url().optional(),
    password: z.string(),
    birthdate: z.string(),
    cellphone: z.string(),
    cpf: z.string(),
    bio: z.string(),
    isAdmin: z.boolean().optional().default(false),
    address: schemaAddress,
});

const FormRegister = () => {
    const router = useRouter();
    const [userType, setUserType] = useState(false);
    const [userData, setUserData] = useState({});
    const [adressData, setAdressData] = useState({});

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = {
            ...userData,
            isAdmin: userType,
            address: adressData,
        };

        try {
            const maxTimeoutMs = 3000;
            const parsedUserData = schemaRegister.parse(formData);

            toast.success("Conta registrada com sucesso");

            await createUserWithAdressRoute(parsedUserData);

            setTimeout(() => {
                router.push("/login/");
            }, maxTimeoutMs);
        } catch (err) {
            toast.error("Credenciais inválidas.");
        }
    };

    const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.currentTarget;

        setUserData((prevUserData) => ({
            ...prevUserData,
            [name]: value,
        }));
    };

    return (
        <>
            <div className={styles.container_form}>
                <div className={styles.style_div_form}>
                    <span>
                        <p
                            className={`${styles.title_register} ${fontStyles.heading_5_500}`}
                        >
                            Cadastro
                        </p>
                    </span>

                    <form onSubmit={handleSubmit} className={styles.form}>
                        <UserFormInputs setFormData={setUserData} />

                        <AdressFormInputs setFormData={setAdressData} />

                        <p
                            className={`${fontStyles.body_2_500} ${styles.account_type_title}`}
                        >
                            Tipo de conta
                        </p>
                        <span className={styles.span_for_type_user}>
                            <input
                                className={`${styles.button_for_type_user} ${
                                    userType === true
                                        ? styles.active_button
                                        : ""
                                } ${fontStyles.buttons_inputlabel__modify}`}
                                type="button"
                                value="Vendedor"
                                id="button_clicked"
                                onClick={() => setUserType(true)}
                            />
                            <input
                                className={`${styles.button_for_type_user} ${
                                    userType === false
                                        ? styles.active_button
                                        : ""
                                } ${fontStyles.buttons_inputlabel__modify}`}
                                type="button"
                                value="Comprador"
                                id="button_clicked"
                                onClick={() => setUserType(false)}
                            />
                        </span>

                        <BaseInput
                            type="password"
                            name="password"
                            placeholder="Digitar Senha"
                            label="Senha"
                            handleChange={handleChange}
                        />

                        <BaseInput
                            type="password"
                            name="password"
                            placeholder="Digitar Senha"
                            label="Confirmar senha"
                            handleChange={handleChange}
                        />

                        <Button name="Finalizar cadastro" isSubmit={true} />
                    </form>
                </div>
            </div>
            <RightsContainer />
        </>
    );
};

export default FormRegister;
