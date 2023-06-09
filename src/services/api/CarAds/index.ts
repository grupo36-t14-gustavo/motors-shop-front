import motorshopApi, { returnAxiosError } from "..";

export interface iCreateCarAd {
    title: string;
    brand: string;
    model: string;
    description: string;
    year: number;
    km: number;
    color: string;
    fuelType: string;
    price: number;
    isActive: boolean;
    images: [] 
}

export interface iReturnPaginatedCarAds {
    prevPage: string;
    nextPage: string;
    count: number;
    data: iReturnCarAd[];
}

export interface iReturnCarAd extends iCreateCarAd {
    id: string;
    ownerId: string;
}

export interface iUpdateCarAd {
    title?: string;
    brand?: string;
    model?: string;
    description?: string;
    year?: number;
    km?: number;
    color?: string;
    fuelType?: string;
    price?: number;
    isActive?: boolean;
}

export const createCarAdRoute = async (
    carAdData: any,
    accessToken: string
) => {
    try {
        const createdCarAd = await motorshopApi.post("/cars/ads", carAdData, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        return createdCarAd.data;
    } catch (err) {
        returnAxiosError(err);
    }
};

export const listAllCarAds = async (pageUrl?: string): Promise<iReturnPaginatedCarAds | undefined> => {
    try {
        let carAdList;
        if (pageUrl) {
            carAdList = await motorshopApi.get(pageUrl);

            return carAdList.data;
        }

        carAdList =  await motorshopApi.get("cars/ads/all/");


        return carAdList.data;
    } catch (err) {
        returnAxiosError(err);
    }
};

export const listCarAdsFromSignedUser = async (
    accessToken: string
): Promise<iReturnCarAd[] | undefined> => {
    try {
        const listedCarAds = await motorshopApi.get("cars/ads/", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        return listedCarAds.data;
    } catch (err) {
        returnAxiosError(err);
    }
};

export const updateCarAdRoute = async (
    updateCarAdData: iUpdateCarAd,
    accessToken: string
): Promise<iReturnCarAd | undefined> => {
    try {
        const updatedCarAd = await motorshopApi.patch(
            "cars/ads/",
            updateCarAdData,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );

        return updatedCarAd.data;
    } catch (err) {
        returnAxiosError(err);
    }
};

export const deleteCarAdRoute = async (accessToken: string) => {
    try {
        await motorshopApi.delete("cars/ads/", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
    } catch (err) {
        returnAxiosError(err);
    }
};

export const listCarAdsById = async (
    userId: string
): Promise<iReturnCarAd[] | undefined> => {
    try {
        const listedCarAds = await motorshopApi.get(`cars/ads/${userId}`);

        return listedCarAds.data;
    } catch (err) {
        returnAxiosError(err);
    }
};
