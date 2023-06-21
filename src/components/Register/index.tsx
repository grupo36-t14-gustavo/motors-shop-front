"use client";
import React, { useState } from "react";
import { z, } from "zod";
import Button from "../Global/Button/index";
import Input from "../Global/Input/index";
import InputPassword from "../Global/Input/input.Password";
import Label from "../Global/Label/index";
import styles from "./style.module.scss";

const schemaRegister = z.object({
    name: z.string(),
    email: z.string().email(),
    avatar:z.string().url(),
    password: z.string(),
    birthdate: z.string(),
    cellphone: z.string(),
    cpf: z.string(),
    isAdmin: z.boolean().optional().default(false)
});
const schemaAddress = z.object({
    cep: z.string(),
    state: z.string(),
    city: z.string(),
    street: z.string(),
    number: z.string(),
    complement: z.string(),
});  
const FormRegister = () =>{
    const [userType, setUserType] = useState(false);
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
  
        const formData = new FormData(event.currentTarget);
        const data = {
            name: formData.get("nameUserNew"),
            email: formData.get("EmailUserNew"),
            avatar: formData.get("avatarUser"),
            password: formData.get("password"),
            birthdate: formData.get("birthdate"),
            cellphone: formData.get("cellphone"),
            cpf: formData.get("cpf"),
            bio: formData.get("bioUser"),
            isAdmin: userType,
            address:{
                cep: formData.get("cep"),
                state: formData.get("state"),
                street: formData.get("street"),
                number: formData.get("number"),
                complement: formData.get("complement")
            }
        };

  
        try {
            schemaRegister.parse(data);
            schemaAddress.parse(data.address);
        // colocar um toast para indicar o usuário
        // colocar a requisição de registro
        } catch (error) {
        // tratar o erro com o toast 
        }
    };
  


    
    
    return(
        <div className={styles.container_form}>
            <div className={styles.style_div_form} >
                <span>
                
                    <p className={styles.title_register} >Cadastro</p>
                </span>

          
                <form onSubmit={handleSubmit} className={styles.form} >
                    <p className={styles.title_info} >Informações pessoais</p>
                    <Label htmlFor="nameUserNew" name="Nome"/>
                    <Input id="nameUserNew" name="nameUserNew" placeholder="como gostaria de ser chamado?"/>
                    <Label htmlFor="EmailUserNew" name="Email"/>
                    <Input id="EmailUserNew" name="EmailUserNew" placeholder="Qual é seu email?" />
                    <Label htmlFor="avatarUser" name="Avatar"/>
                    <Input id="avatarUser" name="avatarUser" placeholder="Qual é seu email?" />
                    <Label htmlFor="password" name="Senha"/>
                    <InputPassword  id="password" name="password" placeholder="lembre-se de criar uma senha segura." />
                    <Label htmlFor="birthdate"name="Data de nascimento"/>
                    <Input id="birthdate" name="birthdate" placeholder="Digite sua data de nascimento exemplo: 17/05/2004"/>
                    <Label htmlFor="cellphone" name="Telefone"/>
                    <Input id="cellphone" name="cellphone" placeholder="qual é seu número?" />
                    <Label htmlFor="cpf" name="Cpf"/>
                    <Input id="cpf" name="cpf" placeholder="Qual é seu cpf?"/>
                    <Label htmlFor="bioUser" name="Bio"/>
                    <Input id="bioUser" name="bioUser" placeholder="Escreva Sobre voçê." />
                    <p className={styles.title_address_form_register} >Endereço</p>
                    <Label htmlFor="cep" name="Cep"/>
                    <Input id="cep" name="cep" placeholder="digite seu cep"/>
                    <Label htmlFor="state" name="Estado"/>
                    <Input id="state" name="state" placeholder="Qual é seu estado?"/>
                    <Label htmlFor="street" name="Rua"/>
                    <Input id="street" name="street" placeholder="Qualé sua rua?"/>
                    <span className={styles.span_complement_user} >
                        <span>
                            <label  className={styles.label_complement_and_number} htmlFor="number">Número</label>
                            <input className={styles.input_complement_and_number} type="text"  id="number" placeholder="Qual é o numero da sua residência?" name="number"/>
                        </span>

                        <span>
                            <label className={styles.label_complement_and_number}  htmlFor="complement">Complemento</label>

                            <input className={styles.input_complement_and_number} id="complement" name="complement" type="text" placeholder="Ex: Prédio azul"/>
                        </span>

                    </span>
                    <p className= {styles.p_title_for_type_user}>Tipo de úsuario</p>
                    <span className={styles.span_for_type_user} >
                        <input className={`${styles.button_for_type_user} ${userType === true ? styles.active_button : ""}`} type="button" value="Vendedor" id="button_clicked" onClick={() => setUserType(true)} />
                        <input className={`${styles.button_for_type_user} ${userType === false ? styles.active_button : ""}`} type="button" value="Comprador" id="button_clicked" onClick={() => setUserType(false)} />
      
                    </span>
            
                    <Button name="Finalizar cadastro"/>
                </form>
            </div>
        </div>
    );
};
export default FormRegister;