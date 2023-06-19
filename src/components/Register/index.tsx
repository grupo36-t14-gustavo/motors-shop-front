import { z, } from "zod";
import Button from "../Global/Button/index";
import Input from "../Global/Input/index";
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
    const hadleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const formData = new FormData(event.currentTarget);
        const data = {
            name:formData.get("nameUserNew"),
            email: formData.get("EmailUserNew"),
            avatar: formData.get("avatarUser"),
            password: formData.get("password"),
            birthdate: formData.get("birthdate"),
            cellphone: formData.get("cellphone"),
            cpf: formData.get("cpf"),
            bio: formData.get("bioUser"),
            isAdmin: formData.get("toggleButton")
        };
        const addressData = {
            cep: formData.get("cep"),
            state: formData.get("state"),
            street: formData.get("street"),
            number: formData.get("number"),
            complement: formData.get("complement")

        };
        try {
            schemaRegister.parse(data);
            schemaAddress.parse(addressData);
            //colocar um toast pra indicar o usuario
            //colocar a requisição login
        } catch (error) {
            //tratar o erro com o toast 
        }
    };
    return(
        <div>
            <span>
                <p>Motors Shop</p>
                <p>Registro</p>
            </span>
            <form onSubmit={hadleSubmit} className={styles.form} >
                <Label htmlFor="nameUserNew" name="Nome"/>
                <Input id="nameUserNew" placeholder="como gostaria de ser chamado?"/>
                <Label htmlFor="EmailUserNew" name="Email"/>
                <Input id="EmailUserNew" placeholder="Qual é seu email?" />
                <Label htmlFor="avatarUser" name="Avatar"/>
                <Input id="avatarUser" placeholder="Qual é seu email?" />
                <Label htmlFor="password" name="Senha"/>
                <input type="password" id="password" placeholder="lembre-se de criar uma senha segura." />
                <Label htmlFor="birthdate"name="Data de nascimento"/>
                <Input id="birthdate" placeholder="Digite sua data de nascimento exemplo: 17/05/2004"/>
                <Label htmlFor="cellphone" name="Telefone"/>
                <Input id="cellphone" placeholder="qual é seu número?" />
                <Label htmlFor="cpf" name="Cpf"/>
                <Input id="cpf" placeholder="Qual é seu cpf?"/>
                <Label htmlFor="bioUser" name="Bio"/>
                <Input id="bioUser" placeholder="Escreva Sobre voçê." />
                
                <Label htmlFor="cep" name="Cep"/>
                <Input id="cep" placeholder="digite seu cep"/>
                <Label htmlFor="state" name="Estado"/>
                <Input id="state" placeholder="Qual é seu estado?"/>
                <Label htmlFor="street" name="Rua"/>
                <Input id="street" placeholder="Qualé sua rua?"/>
                <Label htmlFor="number" name="Número"/>
                <Input id="number" placeholder="Qual é o numero da sua residência?"/>
                <Label htmlFor="complement" name="Complemento"/>
                <Input id="complement" placeholder="Ex: Prédio azul"/>
                <input type="button" id="toggleButton" value="true" />
                <Label htmlFor="toggleButton" name="Comprador"/>
                <input type="button" id="toggleButton" />
                <Label htmlFor="toggleButton" name="Vendedor"/>
                <Button name="Registrar"/>
            </form>

        </div>
    );
};
export default FormRegister;