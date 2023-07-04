import { editAdressDataSchema } from "@/schemas/editAdressData.schema";
import { z } from "zod";

export type tEditAdress = z.infer<typeof editAdressDataSchema>;
