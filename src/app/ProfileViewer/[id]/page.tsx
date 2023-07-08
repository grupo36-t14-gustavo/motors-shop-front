"use client";
import { useEffect, useState } from "react";
import AdMain from "@/components/ProfileViewer/Main";
import { AnnouncementProvider } from "@/contexts/AnnoucementContext";
import api from "@/services/api";
import { UserProfile } from "@/components/ProfileViewer/Main/interfaces";
import Background from "@/components/Global/Background";

const ProfileViewerPage = ({ params }: { params: { id: string } }) => {
    const [cars, setCars] = useState([]);
    const [user, setUser] = useState<UserProfile | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseCar = await api.get(`cars/ads/${params.id}`);
                const responseUser = await api.get(`users/${params.id}`);
                setCars(responseCar.data);
                console.log("Car", responseCar.data);
                setUser(responseUser.data);
                console.log("User", responseUser.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [params.id]);

    if (user === null) {
        console.log(user);
        return <div>Loading...</div>;
    }

    return (
        <>
            <AnnouncementProvider listCars={cars}>
                <Background/>
                <div>
                    <AdMain user={user} userLogged={user.email} />
                </div>
            </AnnouncementProvider>
        </>
    );
};

export default ProfileViewerPage;
