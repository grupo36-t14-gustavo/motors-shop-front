// "use client";


import { createContext, useState } from "react";
import { IannouncementContext, IannouncementProviderProps } from "./types";
import { IcarAnnouncement } from "@/components/ProfileViewer/Card/interfaces";

export const AnnouncementContext = createContext({} as IannouncementContext);

export const AnnouncementProvider = ({ children, listCars }: IannouncementProviderProps) => {
    const [cars, setCars] = useState<IcarAnnouncement[]>(listCars);
    return (
        <AnnouncementContext.Provider
            value={{ cars, setCars }}>
            {children}
        </AnnouncementContext.Provider>
    );
};
