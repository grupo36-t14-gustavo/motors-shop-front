import { z, } from "zod";
import Button from "../Global/Button";
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
                <label htmlFor="nameUserNew">Nome</label>
                <input type="text" name="" id="nameUserNew" placeholder="como gostaria de ser chamado?"/>
                <label htmlFor="EmailUserNew" >Email</label>
                <input type="email" id="EmailUserNew" placeholder="Qual é seu email?" />
                <label htmlFor="avatarUser" >Avatar</label>
                <input type="url" id="avatarUser" placeholder="Qual é seu email?" />
                <label htmlFor="password">Senha</label>
                <input type="password" id="password" placeholder="lembre-se de criar uma senha segura." />
                <label htmlFor="birthdate">Data de nascimento</label>
                <input type="text" id="birthdate" placeholder="Digite sua data de nascimento exemplo: 17/05/2004"/>
                <label htmlFor="cellphone">Telefone</label>
                <input type="text" id="cellphone" placeholder="qual é seu número?" />
                <label htmlFor="cpf">Cpf</label>
                <input type="string" id="cpf" placeholder="Qual é seu cpf?"/>
                <label htmlFor="bioUser">Bio</label>
                <input type="string" id="bioUser" placeholder="Escreva Sobre voçê." />
                <Button name="Registrar"/>
            </form>

        </div>
    );
};
export default FormRegister;