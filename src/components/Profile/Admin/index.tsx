"use client";
import styles from "./style.module.scss";
import Image from "next/image";
import userDefaultPhoto from "../../../assets/img/pngegg.png";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { iReturnUser, retrieveUserRoute } from "@/services/api/User";
import NavBar from "@/components/Global/NavBarNav";
import { Annoucement } from "../AnnouncementModalDiv";
import ProductList from "@/components/Global/ProductListUl";

const Profile = () => {
    const [openModal, setOpenModal] = useState(false);
    const [userData, setUserData] = useState<iReturnUser | null>(null);

    const router = useRouter();
    const typeUSer = userData?.isAdmin ? "Anunciante" : "Comprador";

    const modalOpenAnnoucement = () => {
        setOpenModal(!openModal);
    };

    const modalClose = () => {
        setOpenModal(false);
    };

    useEffect(() => {
        const fetchData = async () => {
            const accessToken = localStorage.getItem("token") || "";
            console.log(accessToken);
            const user = await retrieveUserRoute(accessToken);
            if (user !== undefined) {
                setUserData(user);
            } else if(userData?.isAdmin){
                router.push("/profile");
            }else if(userData?.isAdmin === false){
                router.push("/");
            }
            else  {
                setUserData(null);
                router.push("/login");
            }
        };

        fetchData();
    }, [setUserData]);

    return (
        <>
            <NavBar />
            <div className={styles.div_conteiner_blue}>
                <main className={styles.main_conteiner_info_user}>
                    {/* {userData?.avatar ? (
                        <Image
                            className={styles.img_user_profile}
                            src={userData.avatar}
                            alt="Avatar"
                            width={104}
                            height={104}
                        />
                    ) : (
                        <Image
                            className={styles.img_user_profile}
                            src={userDefaultPhoto}
                            alt="Default Avatar"

                        />
                    )} */}
                    <Image
                        className={styles.img_user_profile}
                        src={userDefaultPhoto}
                        alt="Default Avatar"
                    />
                    <span className={styles.span_infoUser}>
                        <p className={styles.name_user}>{userData?.name} </p>
                        <p className={styles.type_user}>{typeUSer} </p>
                    </span>

                    <span className={styles.span_bio_user}>
                        {userData?.bio ? (
                            <p className={styles.text_bio_user}>
                                {userData.bio}
                            </p>
                        ) : (
                            <p className={styles.text_bio_user}>
                                Nenhuma bio disponível.
                            </p>
                        )}
                    </span>
                    <span>
                        <button
                            onClick={modalOpenAnnoucement}
                            className={styles.button_create_anoouncement}
                        >
                            Criar Anuncio
                        </button>
                    </span>
                    {openModal && <Annoucement closeModal={modalClose} />}
                </main>
                <section className={styles.ads}>
                    <ProductList carAdList={userData?.cars} />
                </section>
            </div>
        </>
    );
};

export default Profile;
