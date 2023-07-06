import { IcarAnnouncement } from "../Card";

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  cpf: string;
  cellphone: string;
  birthdate: Date;
  isAdmin: boolean;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  cars: IcarAnnouncement[];
  address: {
    id: string;
    cep: string;
    state: string;
    city: string;
    street: string;
    number: string;
    complement: string;
  };
  description: string;
}

export interface AdMainProps {
  user: UserProfile;
  userLogged: string | null;
}
