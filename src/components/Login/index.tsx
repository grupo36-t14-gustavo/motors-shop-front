"use client";
import Link from "next/link";
import React from "react";
import { z } from "zod";
import Button from "../Global/Button";
import Input from "../Global/Input/index";
import InputPassword from "../Global/Input/input.Password";
import Label from "../Global/Label/index";
import styles from "./style.module.scss";
const schemaLogin = z.object({
    email: z.string().email(),
    password: z.string(),
});

const LoginForm = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const formData = new FormData(event.currentTarget);
        const data = {
            email: formData.get("emailInput"),
            password: formData.get("passwordInput"),
        };
        try {
            schemaLogin.parse(data);
            //colocar um tost pra indicar o usuario
            //colocar a requisição login
        } catch (error) {
            //tratar o erro com o toast
        }
    };

    return (
        <>
            <div className={styles.container_form}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <p className={styles.title_login_form}>Login</p>
                    <Label htmlFor="emailInput" name="Email" />
                    <Input
                        id="emailInput"
                        name="emailInput"
                        placeholder="qual é seu email?"
                    />
                    <Label htmlFor="passwordInput" name="Senha" />
                    <InputPassword
                        id="passwordInput"
                        name="passwordInput"
                        placeholder="Digite sua senha ..."
                    />
                    <Button name="Logar" />
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
        </>
    );
};

export default LoginForm;
