import { z } from "zod";

const cpfLength = 14;
const phoneLength = 16;
const birthDateLength = 8;

export const editProfileSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    cpf: z.string().max(cpfLength),
    phone: z.string().max(phoneLength),
    birthDate: z.string().max(birthDateLength),
    description: z.string(),
});
