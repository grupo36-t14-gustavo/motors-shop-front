import axios, { Axios, AxiosError } from "axios";

const motorshopApi = axios.create({
    baseURL: "http://localhost:3001/",
    timeout: 20000,
});

export interface iErrorMessage {
    message: string;
}

export const returnAxiosError = async (error: unknown) => {
    if (error instanceof AxiosError) {
        throw error;
    }
};

export default motorshopApi;
