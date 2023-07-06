import { IcarAnnouncement } from "@/components/ProfileViewer/Card/interfaces";
import { iReturnPaginatedCarAds } from "@/services/api/CarAds";
import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IannouncementContext {
    cars: IcarAnnouncement[];
    setCars: Dispatch<SetStateAction<IcarAnnouncement[]>>;
    filters: object;
    setFilters: Dispatch<SetStateAction<{}>>;
}

export interface IannouncementProviderProps {
    children: ReactNode;
    listCars: IcarAnnouncement[];
}
