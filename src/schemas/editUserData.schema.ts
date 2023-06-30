import { z } from "zod";

const cpfLength = 14;
const phoneLength = 16;
const birthDateLength = 8;

export const editProfileSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    cpf: z.string().max(cpfLength),
    cellphone: z.string().max(phoneLength),
    birthdate: z.string().max(birthDateLength),
    bio: z.string(),
});
