import React from "react";
import { z } from "zod";
import Button from "../Global/Button";
import Input from "../Global/Input/index";
import Label from "../Global/Label/index";
import styles from "./style.module.scss";
const schemaLogin = z.object({
    email: z.string().email(),
    password: z.string()
});
const LoginForm = () =>{
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
        const formData = new FormData(event.currentTarget);
        const data = {
            email: formData.get("emailInput"),
            password: formData.get("passwordInput")
        };
        try {
            schemaLogin.parse(data);
            //colocar um tost pra indicar o usuario
            //colocar a requisição login
        } catch (error) {
            //tratar o erro com o toast 
        }
    };
    return(

        <div>
            <h1>Motors Shop</h1>
            <form onSubmit={handleSubmit} className={styles.form} >
                <Label htmlFor="emailInput" name="Email"/>
                <Input id="emailInput" placeholder="qual é seu email?" />
                <Label htmlFor="passwordInput" name="Senha"/>
                <input type="password" id="passwordInput" placeholder="Digite sua senha ..." />
                <Button name="Logar"/>
            </form>
        </div>

    );


};

export default LoginForm;