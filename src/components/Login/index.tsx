"use client";
import Link from "next/link";
import React from "react";
import { z } from "zod";
import Button from "../Global/Button";
import Input from "../Global/Input/index";
import InputPassword from "../Global/Input/input.Password";
import Label from "../Global/Label/index";
import styles from "./style.module.scss";
import { userLoginRoute } from "@/services/api/User";
import { ToastContainer, toast } from "react-toastify";
import Router from "next/router";

const schemaLogin = z.object({
    email: z.string().email(),
    password: z.string(),
});

const LoginForm = () => {
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = {
            email: formData.get("emailInput"),
            password: formData.get("passwordInput"),
        };
        try {
            const payload = schemaLogin.parse(data);
            //colocar um tost pra indicar o usuario
            //colocar a requisição login
            const token = await userLoginRoute(payload);
            localStorage.setItem("token", token!.token);
            console.log("teste");
            // toast.success("Sucesso");
            Router.push("/product");
        } catch (error) {
            // toast.error("Verifique se os dados estão corretos");
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
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={true}
                closeOnClick
                theme="light"
            />
        </>
    );
};

export default LoginForm;
