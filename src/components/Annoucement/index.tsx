"user client";
import Button from "../Global/Button";
import Input from "../Global/Input";
import Label from "../Global/Label";
import InputAndLabel from "../Global/LabelAndInput";
import styles from "./style.module.scss";
import { ToastContainer, toast } from "react-toastify";
import { boolean } from "zod";
import { createCarAdRoute } from "@/services/api/CarAds";

interface AnnoucementProps {
    closeModal: () => void;
}
export const Annoucement: React.FC<AnnoucementProps> = ({ closeModal }) => {
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data: { [key: string]: any } = {
            title: "",
            brand: "",
            model: "",
            description: "",
            year: "",
            km: "",
            color: "",
            fuelType: "",
            price: "",
            priceFipe: "",
            isActive: boolean,
            images: {
                img: "",
                isMain: boolean,
            },
        };
        console.log(data);
        formData.forEach((value, key) => {
            data[key] = value;
        });
        try {
            const token = localStorage.getItem("token") as string;
            await createCarAdRoute(data, token);

            toast.success("Veiculo criado com Sucesso!");
        } catch (error) {
            toast.error("ops algo deu errado verifique os campos!");
        }
    };

    return (
        <>
            <div className={styles.div_conteiner_fundo_modal}>
                <div className={styles.conteiner_form_modal}>
                    <form className={styles.form_modal} onSubmit={handleSubmit}>
                        <span className={styles.span_btn}>
                            <p className={styles.title_modal}>Criar Anuncio.</p>
                            <button
                                className={styles.btn_close}
                                onClick={closeModal}
                            >
                                X
                            </button>
                        </span>
                        <p className={styles.sub_title}>
                            Informações do veiculo
                        </p>
                        <InputAndLabel
                            htmlFor="brand"
                            id="brand"
                            name="brand"
                            placeholder="Digite algo"
                            eman="Marca"
                        />
                        <InputAndLabel
                            htmlFor="modelo"
                            id="model"
                            name="model"
                            placeholder="Digite algo"
                            eman="Modelo"
                        />

                        <span className={styles.span_flex}>
                            <span className={styles.span_collum_modal}>
                                <Label htmlFor="year" name="Ano" />
                                <input
                                    className={styles.input_year}
                                    id="year"
                                    name="year"
                                    placeholder="Ex:2012"
                                />
                            </span>
                            <span className={styles.span_collum_modal}>
                                <Label htmlFor="fuelType" name="combustível" />
                                <select
                                    className={styles.select_fuel}
                                    name="fuelType"
                                >
                                    <option value="Gasolina">Gasolina</option>
                                    <option value="Diesel">Diesel</option>
                                    <option value="Alcool">Álcool</option>
                                    <option value="Flex">Flex</option>
                                    <option value="Eletrico">Elétrico</option>
                                    <option value="Hibrido">Híbrido</option>
                                </select>
                            </span>
                        </span>

                        <Label htmlFor="description" name="Descrição" />
                        <Input
                            id="description"
                            name="description"
                            placeholder="Faça uma descrição do seu veículo."
                        />
                        <span className={styles.span_flex}>
                            <span className={styles.span_collum_modal}>
                                <Label
                                    htmlFor="Quilometragem"
                                    name="Quilometragem"
                                />
                                <input
                                    className={styles.input_km}
                                    type="text"
                                    name="km"
                                    id="km"
                                    placeholder="Ex:125"
                                />
                            </span>
                            <span className={styles.span_collum_modal}>
                                <label
                                    className={styles.label_modal}
                                    htmlFor="color"
                                >
                                    Cor
                                </label>
                                <input
                                    className={styles.input_color}
                                    id="color"
                                    name="color"
                                    placeholder="Digite algo"
                                />
                            </span>
                        </span>
                        <span className={styles.span_flex}>
                            <span className={styles.span_collum_modal}>
                                <Label
                                    htmlFor="priceFipe"
                                    name="Preço tabela FIPE"
                                />
                                <input
                                    className={styles.input_km}
                                    id="priceFipe"
                                    name="priceFipe"
                                    type="text"
                                    placeholder="R$40.259"
                                />
                            </span>
                            <span className={styles.span_collum_modal}>
                                <label
                                    className={styles.label_modal}
                                    htmlFor="price"
                                >
                                    Preço
                                </label>
                                <input
                                    className={styles.input_color}
                                    id="price"
                                    name="price"
                                    placeholder="Digite o preco"
                                    type="text"
                                />
                            </span>
                        </span>
                        <Label htmlFor="imagem capa" name="Imagem capa" />
                        <Input
                            id="images"
                            name="imagem capa"
                            placeholder="https://image.com"
                        />
                        <Label
                            htmlFor="imagePrimary"
                            name="1° Imagem da galeria"
                        />
                        <Input
                            id="imagePrimary"
                            name="imagePrimary"
                            placeholder="https://image.com"
                        />
                        <Label
                            htmlFor="imageSecund"
                            name="2° Imagem da galeria"
                        />
                        <Input
                            id="images"
                            name="imageSecund"
                            placeholder="https://image.com"
                        />
                        <Button name="Cadastrar" />
                    </form>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={1500}
                hideProgressBar={false}
                closeOnClick
                theme="light"
            />
        </>
    );
};
