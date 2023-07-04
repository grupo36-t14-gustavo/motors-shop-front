import * as yup from "yup";
export const formSchema = yup.object().shape({
    title: yup.string().required("O título é obrigatório"),
    brand: yup.string().required("A marca é obrigatória"),
    model: yup.string().required("O modelo é obrigatório"),
    description: yup.string().required("A descrição é obrigatória"),
    year: yup
        .number()
        .required("O ano é obrigatório")
        .integer("O ano deve ser um número inteiro")
        .min(1886, "O ano mínimo é 1886")
        .max(new Date().getFullYear(), "O ano máximo é o ano atual"),
    km: yup
        .number()
        .required("A quilometragem é obrigatória")
        .integer("A quilometragem deve ser um número inteiro")
        .min(0, "A quilometragem mínima é 0"),
    color: yup.string().required("A cor é obrigatória"),
    fuelType: yup
        .string()
        .oneOf([
            "Gasolina",
            "  Diesel",
            "Alcool",
            "Flex",
            " Eletrico",
            "Hibrido",
        ])
        .required("Campo obrigatório"),
    price: yup
        .number()
        .required("O preço é obrigatório")
        .typeError("O preço deve ser um número")
        .positive("O preço deve ser um número positivo"),
    isActive: yup.boolean().required("A atividade é obrigatória"),
    images: yup
        .array()
        .of(
            yup.object().shape({
                img: yup.string(),
                isMain: yup.boolean(),
            })
        )
        .required("Pelo menos uma imagem é obrigatória"),
});
