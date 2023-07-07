"use client";
import Link from "next/link";
import React, { useState } from "react";
import { z } from "zod";
import Button from "../Global/Button";
import styles from "./style.module.scss";
import { iUserLogin, userLoginRoute } from "@/services/api/User";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BaseInput from "../Global/BaseInput";

const schemaLogin = z.object({
    email: z.string().email(),
    password: z.string(),
});

const LoginForm = () => {
    const [userLogged, setUserLogged] = useState<iUserLogin>();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        const data = {
            email: formData.get("email"),
            password: formData.get("password"),
        };

        try {
            const delay = 2000;
            const payload = schemaLogin.parse(data);
            setUserLogged(payload);
            const token = await userLoginRoute(payload);

            if (token) {
                localStorage.setItem("token", token.token);
            }

            setTimeout(() => {
                location.pathname = "/";
            }, delay);
            toast.success("Sucesso");
        } catch (error) {
            toast.error("Ops! Verique o campo de email e senha.");
        }
    };

    return (
        <>
            <div className={styles.container_form}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <p className={styles.title_login_form}>Login</p>
                    <BaseInput
                        name="email"
                        placeholder="qual é seu email?"
                        label="Email"
                    />
                    <BaseInput
                        name="password"
                        placeholder="Digite sua senha ..."
                        label="Senha"
                        type="password"
                    />
                    <Button name="Logar" isSubmit={true} />
                    <Link className={styles.tag_link_register} href="/register">
                        Ainda não possui conta?
                    </Link>
                    <button className={styles.button_register}>
                        {" "}
                        <Link className={styles.tag_link} href="/register">
                            Cadastrar
                        </Link>
                    </button>
                </form>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={1500}
                hideProgressBar={false}
                closeOnClick
                theme="light"
            />
        </>
    );
};

export default LoginForm;
