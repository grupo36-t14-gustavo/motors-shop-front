"user client";
import Button from "../../Global/Button";
import BaseInput from "../../Global/BaseInput";
import Label from "../../Global/Label";

export const Annoucement = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data: { [key: string]: any } = {};

        formData.forEach((value, key) => {
            data[key] = value;
        });

        try {
        } catch (error) {}
    };
    return (
        <form onSubmit={handleSubmit}>
            <BaseInput name="brand" placeholder="Ex:Kia" label="Marca" />

            <BaseInput name="model" placeholder="Ex: Soul" label="Modelo" />
            <BaseInput
                name="description"
                placeholder="Faça uma descrição do seu veículo."
                label="Descrição"
            />

            <BaseInput
                type="number"
                name="number"
                placeholder="Ex:2012"
                label="Ano"
            />

            <BaseInput
                type="number"
                name="km"
                placeholder="Ex:125"
                label="Quilometragem"
            />

            <BaseInput name="color" placeholder="Qual é a cor?" label="Cor" />

            <Label htmlFor="fuelType" name="Tipo de combustível" />
            <select name="Tipo de combustível" id="fuelType">
                <option value="Gasolina">Gasolina</option>
                <option value="Diesel">Diesel</option>
                <option value="Alcool">Álcool</option>
                <option value="Flex">Flex</option>
                <option value="Eletrico">Elétrico</option>
                <option value="Hibrido">Híbrido</option>
            </select>

            <BaseInput
                name="banner"
                placeholder="https://image.com"
                label="Imagem da Capa"
            />

            <BaseInput
                name="image"
                placeholder="https://image.com"
                label="1ª Imagem da Galeria"
            />

            <BaseInput
                name="image"
                placeholder="https://image.com"
                label="2ª Imagem da Galeria"
            />

            <Button name="Cadastrar" isSubmit={true} />
        </form>
    );
};
