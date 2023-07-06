import { editProfileSchema } from "@/schemas/editUserData.schema";
import { z } from "zod";

export type tEditUser = z.infer<typeof editProfileSchema>;
