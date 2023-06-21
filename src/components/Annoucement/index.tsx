"user client";
import Button from "../Global/Button";
import Input from "../Global/Input";
import Label from "../Global/Label";

export const Annoucement = () =>{
    const handleSubmit =(event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data: Record<string, string>  = {};
        formData.forEach((value, key)=>{
            data[key] = value.toString();
        });
        try {
          
        } catch (error) {
          
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <Label htmlFor="title"name="Titulo" />
            <Input id="title" name="title" placeholder="Descreva seu anúncio"/>
            <Label htmlFor="brand" name="Marca"/>
            <Input id="brand" name="brand" placeholder="Ex:Kia"/>
            <Label htmlFor="model" name="Modelo"/>
            <Input id="model" name="model" placeholder="Ex: Soul"/>
            <Label htmlFor="description" name="Descrição"/>
            <Input id="description"name="description" placeholder="Faça uma descrição do seu veículo." />
            <Label htmlFor="year" name="Ano"/>
            <input type="number" id="year" name="number" placeholder="Ex:2012"/>
            <Label htmlFor="km" name="km"/>
            <input type="number" id="km" placeholder="Ex:125"/>
            <Label htmlFor="color" name="Cor"/>
            <Input id="color" name="color" placeholder="Qual é a cor?"/>
            <Label htmlFor="fuelType" name="Tipo de combustível"/>
            <select name="Tipo de combustível" id="fuelType">
                <option value="Gasolina">Gasolina</option>
                <option value="Diesel">Diesel</option>
                <option value="Alcool">Álcool</option>
                <option value="Flex">Flex</option>
                <option value="Eletrico">Elétrico</option>
                <option value="Hibrido">Híbrido</option>
            </select>
            <Label htmlFor="img" name="Foto"/>
            <Input id="img" name="img" placeholder="envie o link da imagem." />
            <Button name="Cadastrar"/>
        </form>
    );

};