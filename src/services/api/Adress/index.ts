export interface iCreateAdress {
    cep: string;
    state: string;
    city: string;
    number: string;
    complement: string;
    street: string;
}

export interface iReturnAdress extends iCreateAdress {
    id: string;
    userId: string;
}
