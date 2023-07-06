import motorshopApi, { returnAxiosError } from "..";

export interface iCreateUser {
    name: string;
    email: string;
    password: string;
    birthdate: string;
    cellphone: string;
    cpf: string;
    bio?: string;
    avatar?: string;
    isAdmin?: boolean;
    address: {
        cep: string;
        state: string;
        city: string;
        street: string;
        number: string;
        complement: string;
    };
}

export interface iUserLogin {
    email: string;
    password: string;
}

export interface iUpdateUser {
    name?: string;
    email?: string;
    password?: string;
    birthdate?: string;
    cellphone?: string;
    cpf?: string;
    bio?: string;
    avatar?: string;
    isAdmin?: boolean;
}

export interface iReturnUser extends iCreateUser {
    id: string;
}

export interface iAccessToken {
    token: string;
}

export const createUserWithAdressRoute = async (
    userData: iCreateUser
): Promise<iReturnUser | undefined> => {
    try {
        const createdUserAndAdress = await motorshopApi.post(
            "users/",
            userData
        );

        return createdUserAndAdress.data;
    } catch (err) {
        returnAxiosError(err);
    }
};

export const userLoginRoute = async (
    loginData: iUserLogin
): Promise<iAccessToken | undefined> => {
    try {
        const accessToken = await motorshopApi.post("users/login/", loginData);

        return accessToken.data;
    } catch (error: any) {
        returnAxiosError(error);
    }
};

export const retrieveUserRoute = async (
    accessToken: string
): Promise<iReturnUser | undefined> => {
    try {
        const retrievedUser = await motorshopApi.get("users/", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        return retrievedUser.data;
    } catch (err) {
        returnAxiosError(err);
    }
};

export const updateUserRoute = async (
    updateUserData: iUpdateUser,
    accessToken: string
): Promise<iReturnUser | undefined> => {
    try {
        const updatedUser = await motorshopApi.patch("users/", updateUserData, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        return updatedUser.data;
    } catch (err) {
        returnAxiosError(err);
    }
};

export const deleteUserRoute = async (accessToken: string): Promise<void> => {
    try {
        await motorshopApi.delete("users/", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
    } catch (err) {
        returnAxiosError(err);
    }
};
export const registerUserRoute = async (registerData: any) => {
    try {
        await motorshopApi.post("/users", registerData);
    } catch (error) {
        return returnAxiosError(error);
    }
};
