"use client";
import Image from "next/image";
import userDefaultPhoto from "../../assets/img/pngegg.png";
import logoImage from "../../assets/img/Motors.png";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./style.module.scss";
import { Annoucement } from "../AnnouncementModalDiv/index2";
import { retrieveUserRoute } from "@/services/api/User";
import { User } from "../../../interfaces/profile.interface";

const Profile = () => {
    const [openMenu, setMenuOpen] = useState(false);
    const [openModal, setModal] = useState(false);
    const [userData, setUserData] = useState<User | null>(null);
    console.log(userData, "data user");
    const typeUSer = userData?.isAdmin ? "Anunciante" : "Comprador";

    const router = useRouter();
    const handleMenu = () => {
        setMenuOpen(!openMenu);
    };
    const handleLogoutUser = () => {
        localStorage.removeItem("token");
        router.push("/login");
    };
    const modalOpenAnnoucement = () => {
        setModal(!openModal);
    };
    const modalClose = () => {
        setModal(false);
    };

    useEffect(() => {
        const fetchData = async () => {
            const accessToken = localStorage.getItem("token") || "";
            const user: User = await retrieveUserRoute(accessToken);
            if (user !== undefined) {
                setUserData(user);
            } else {
                setUserData(null);
                router.push("/login");
            }
        };

        fetchData();
    }, [setUserData]);

    return (
        <>
            <div className={styles.div_conteiner_blue}>
                <nav className={styles.nav_user}>
                    <Image src={logoImage} alt="logo" />
                    <span onClick={handleMenu} className={styles.span_nav_user}>
                        {/* {userData?.avatar ? (
                            <Image
                                // src={userData.avatar}
                                src={
                                    "https://img.assinaja.com/upl/lojas/mundosinfinitos/imagens/foto-personagem-batman.jpg"
                                }
                                alt="Avatar"
                                width={20}
                                height={20}
                            />
                        ) : (
                            <Image
                                src={userDefaultPhoto}
                                alt="Default Avatar"
                            />
                        )} */}
                        <Image src={userDefaultPhoto} alt="Default Avatar" />
                        <p className={styles.profile_name}>{userData?.name}</p>
                        {openMenu && (
                            <div className={styles.menubar_hamburguer}>
                                <ul className={styles.ul_menu}>
                                    <li className={styles.li_menu}>Perfil</li>
                                    <li
                                        className={styles.li_menu}
                                        onClick={handleLogoutUser}
                                    >
                                        Sair
                                    </li>
                                </ul>
                            </div>
                        )}
                    </span>
                </nav>
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
            </div>
        </>
    );
};
export default Profile;
