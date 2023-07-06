export interface IcarAnnouncement {
    id: string;
    brand: string;
    model: string;
    year: string;
    fuelType: string;
    km: number;
    color: string;
    price: number;
    description: string;
    createdAt: string;
    isActive: boolean;
    images: string;
    userId: string;
    user: {
      name: string;
      email: string;
      description: string;
    };
    carImages: {
      id: string;
      url: string;
      carId: string;
    }[];
  }

export interface CardProps {
      listCars: IcarAnnouncement[];
  }