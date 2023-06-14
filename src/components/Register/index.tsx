import { z, } from "zod";
import Button from "../Global/Button/index";
import Input from "../Global/Input/index";
import Label from "../Global/Label/index";
const schemaRegister = z.object({
    name: z.string(),
    email: z.string().email(),
    avatar:z.string().url(),
    password: z.string(),
    birthdate: z.string(),
    cellphone: z.string(),
    cpf: z.string()
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
            bio: formData.get("bioUser")
        };
        try {
            schemaRegister.parse(data);
            //colocar um tost pra indicar o usuario
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
            <form onSubmit={hadleSubmit}>
                <Label htmlFor="nameUserNew" name="Nome" />
                <Input id="nameUserNew" placeholder="como gostaria de ser chamado?"/>
                <Label htmlFor="EmailUserNew" name="Email"/ >
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
                <Button name="Registrar"/>
            </form>

        </div>
    );
};
export default FormRegister;