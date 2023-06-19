import axios, { AxiosError } from "axios";

const motorshopApi = axios.create({
    baseURL: "https://motorshop-api-x9lm.onrender.com/",
    timeout: 2000,
});

export interface iErrorMessage {
    message: string;
}

export const returnAxiosError = async (error: unknown) => {
    throw error as AxiosError<iErrorMessage>;
};

export default motorshopApi;
