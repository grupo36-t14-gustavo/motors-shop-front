import styles from "./style.module.scss";
import { iReturnUser } from "@/services/api/User";
import Image from "next/image";
import baseAvatar from "../../../assets/img/pngegg.png";
import { useRouter } from "next/navigation";
import { useState } from "react";
import EditProfileModal from "@/components/Profile/EditProfileModalDiv";
import EditAdressModal from "@/components/Profile/EditAdressModalDiv";

const UserAvatar = ({
    userData,
    openMenu,
    handleMenu,
}: {
    userData: iReturnUser;
    openMenu: boolean;
    handleMenu: () => void;
}) => {
    const [openModal, setOpenModal] = useState<
        "editProfile" | "editAdress" | "none"
    >("none");

    const router = useRouter();

    const handleLogoutUser = () => {
        localStorage.removeItem("token");
        router.push("/login");
    };

    return (
        <>
            <div className={styles.avatar__container}>
                <span onClick={handleMenu}>
                    <Image
                        className={styles.container__img}
                        src={userData.avatar ? userData.avatar : baseAvatar}
                        alt=""
                        // An avatar image fitted in a circle block
                    />
                    <p>{userData.name}</p>
                </span>
                {openMenu && (
                    <div className={styles.menubar_hamburguer}>
                        <ul className={styles.ul_menu}>
                            <li
                                className={styles.li_menu}
                                onClick={() => setOpenModal("editProfile")}
                            >
                                Editar Perfil
                            </li>
                            <li
                                className={styles.li_menu}
                                onClick={() => setOpenModal("editAdress")}
                            >
                                Editar Endereço
                            </li>
                            <li
                                className={styles.li_menu}
                                onClick={handleLogoutUser}
                            >
                                Sair
                            </li>
                        </ul>
                    </div>
                )}
            </div>
            {openModal !== "none" &&
                ((openModal === "editProfile" && <EditProfileModal />) ||
                    (openModal === "editAdress" && <EditAdressModal />))}
        </>
    );
};

export default UserAvatar;
