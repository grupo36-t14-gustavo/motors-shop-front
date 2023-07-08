"use client";
import styles from "./style.module.scss";
import globalFonts from "../../../styles/globalFonts.module.scss";
import Link from "next/link";
import RegisterRedirect from "../RegisterRedirectAnchor";
import { useEffect, useState } from "react";
import { iReturnUser, retrieveUserRoute } from "@/services/api/User";
import UserAvatar from "../UserAvatarDiv";

const NavAuth = () => {
    const [userData, setUserData] = useState<iReturnUser | undefined>();
    const [openMenu, setMenuOpen] = useState(false);

    const handleMenu = () => {
        setMenuOpen(!openMenu);
    };

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem("token");

            if (token) {
                const retrievedUser = await retrieveUserRoute(token);

                setUserData(retrievedUser);
            }
        };

        fetchData();
    }, []);

    return (
        <div
            className={`${styles.nav_bar__auth_div} ${globalFonts.body_1_600}`}
        >
            {userData ? (
                <>
                    <UserAvatar
                        userData={userData}
                        openMenu={openMenu}
                        handleMenu={handleMenu}
                    />
                </>
            ) : (
                <>
                    <Link
                        className={styles.auth_div__login_redirect}
                        href="/login"
                    >
                        Fazer Login
                    </Link>
                    <RegisterRedirect type="nav" />
                </>
            )}
        </div>
    );
};

export default NavAuth;
