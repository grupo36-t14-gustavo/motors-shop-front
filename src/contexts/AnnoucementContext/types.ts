
import { IcarAnnouncement } from "@/components/ProfileViewer/Card/interfaces";
import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IannouncementContext {
  cars: IcarAnnouncement[];
  setCars: Dispatch<SetStateAction<IcarAnnouncement[]>>;
}

export interface IannouncementProviderProps {
  children: ReactNode;
  listCars: IcarAnnouncement[];
}
