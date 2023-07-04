"use client";
import Image from "next/image";
import userImage from "../../assets/img/pngegg.png";
import logoImage from "../../assets/img/Motors.png";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./style.module.scss";
import { Annoucement } from "../Annoucement";
const DashUser = () => {
    const [openMenu, setMenuOpen] = useState(false);
    const [openModal, setModal] = useState(false);
    const router = useRouter();
    const handleMenu = () => {
        setMenuOpen(!openMenu);
    };
    const handleLogoutUser = () => {
        localStorage.removeItem("tokenUser");
        router.push("/login");
    };
    const modalOpenAnnoucement = () => {
        setModal(!openModal);
    };
    const modalCloseAnnoucement = () => {
        setModal(false);
    };
    return (
        <>
            <div className={styles.div_conteiner_blue}>
                <nav className={styles.nav_user}>
                    <Image src={logoImage} alt="logo" />
                    <span onClick={handleMenu} className={styles.span_nav_user}>
                        <Image
                            className={styles.user_image}
                            src={userImage}
                            alt="user"
                        />
                        <p className={styles.profile_name}>Usuario</p>
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
                    <Image
                        className={styles.img_user_profile}
                        src={userImage}
                        alt=""
                    />
                    <span className={styles.span_infoUser}>
                        <p className={styles.name_user}>Samuel Leão</p>
                        <p className={styles.type_user}>Anunciante</p>
                    </span>

                    <span className={styles.span_bio_user}>
                        <p className={styles.text_bio_user}>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Placeat, at debitis atque similique, pariatur
                            eaque nihil suscipit voluptatum, quas illum illo
                            inventore. Sapiente dolor molestias reiciendis nemo
                            voluptate in sunt?
                        </p>
                    </span>
                    {openModal && (
                        <div>
                            <span>
                                <button onClick={modalCloseAnnoucement}>
                                    X
                                </button>
                                <p>Criar Anuncio.</p>
                            </span>
                            <Annoucement />
                        </div>
                    )}
                    <span>
                        <button
                            onClick={modalOpenAnnoucement}
                            className={styles.button_create_anoouncement}
                        >
                            Criar Anuncio
                        </button>
                    </span>
                </main>
            </div>
        </>
    );
};
export default DashUser;
