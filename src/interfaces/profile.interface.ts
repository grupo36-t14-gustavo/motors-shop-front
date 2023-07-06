export interface User {
    id: string;
    name: string;
    email: string;
    avatar: string;
    password: string;
    address: Address;
    cep: string;
    city: string;
    complement: string;
    number: string;
    state: string;
    street: string;
    userId: string;
    bio: string;
    birthdate: string;
    cars: Car[];
    cellphone: string;
    comments: Comment[];
    cpf: string;
    createdAt: string;
    isAdmin: boolean;
}

interface Address {
    id: string;
    cep: string;
    state: string;
    city: string;
    street: string;
}
export interface Car {
    id: string;
    title: string;
    brand: string;
    model: string;
    description: string;
    year: number;
    km: number;
    color: string;
    fuelType: FuelOptions;
    price: number;
    isActive: boolean;
    ownerId: string;
    owner: User;
    createAt?: string;
    images: CarImage[];
    comments: Comment[];
}

interface Comment {
    id: string;
    content: string;
    userId: string;
    user: User;
    carId: string;
    car: Car;
    createdAt: string;
}

enum FuelOptions {
    Gasolina,
    Diesel,
    Alcool,
    Flex,
    Eletrico,
    Hibrido,
}

interface CarImage {
    id: string;
    img: string;
    isMain: boolean;
    carId: string;
}
