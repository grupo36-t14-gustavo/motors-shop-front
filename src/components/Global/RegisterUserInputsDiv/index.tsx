import BaseInput from "../BaseInput";

const RegisterUserInputs = () => {
    return (
        <div>
            <BaseInput
                type="text"
                name="userName"
                placeholder="Seu nome aqui"
            />
            <BaseInput
                type="text"
                name="userEmail"
                placeholder="seuemail@outlook.com.br"
            />
            <BaseInput
                type="text"
                name="userCpf"
                placeholder="012.345.678-90"
            />
            <BaseInput
                type="text"
                name="userPhone"
                placeholder="(012) 93456-7890"
            />
            <BaseInput
                type="number"
                name="userBirthDate"
                placeholder="01/12/99"
            />
            <textarea name="" id="" cols={30} rows={30} placeholder="Digitar descrição">
            </textarea>
        </div>
    );
};

export default RegisterUserInputs;
