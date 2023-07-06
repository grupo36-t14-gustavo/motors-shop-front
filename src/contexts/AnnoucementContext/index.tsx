// "use client";

import { createContext, useEffect, useState } from "react";
import { IannouncementContext, IannouncementProviderProps } from "./types";
import { IcarAnnouncement } from "@/components/ProfileViewer/Card/interfaces";
import { iReturnPaginatedCarAds, listAllCarAds } from "@/services/api/CarAds";
import { toast } from "react-toastify";

export const AnnouncementContext = createContext({} as IannouncementContext);

export const AnnouncementProvider = ({
    children,
    listCars,
}: IannouncementProviderProps) => {
    const [cars, setCars] = useState<IcarAnnouncement[]>(listCars);
    const [filters, setFilters] = useState({});

    return (
        <AnnouncementContext.Provider
            value={{ cars, setCars, filters, setFilters }}
        >
            {children}
        </AnnouncementContext.Provider>
    );
};
