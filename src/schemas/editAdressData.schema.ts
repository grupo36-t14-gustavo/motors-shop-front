import { z } from "zod";

const cepMaxLength = 10;
const numberMaxLenth = 5;

export const editAdressDataSchema = z.object({
    cep: z.string().max(cepMaxLength),
    state: z.string(),
    city: z.string(),
    number: z.string().max(numberMaxLenth),
    complement: z.string(),
    street: z.string(),
});
