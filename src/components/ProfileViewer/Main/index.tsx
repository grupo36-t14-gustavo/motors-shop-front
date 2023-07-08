// "use client";
import { useRouter } from "next/navigation";
// import { useContext } from "react";
import { AdMainProps } from "./interfaces";
import { IcarAnnouncement } from "../Card/interfaces";
import Card from "../Card";
import styles from "./styles.module.scss";
import NavBar from "@/components/Global/NavBarNav";
import BaseModal from "@/components/Global/BaseModalDiv";
import { useState } from "react";

const zero = 0;
const one = 1;

const AdMain = ({ user, userLogged }: AdMainProps) => {
    const [modalOpen, setModalOpen] = useState(false);


    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };


    const router = useRouter();


    return (
        <main className={styles.main}>
            <NavBar/>
            <div>
                <div className={styles.userInfoBox}>
                    <div className={styles.userInfo}>
                        <div className={styles.userContainer}>
                            <span className={styles.userNameBall}>
                                {`${user.name[zero].toUpperCase()}${user.name.split(" ")[one]?.[zero]?.toUpperCase() || ""}`}
                            </span>
                            <div className={styles.nameAdvertiser}>
                                <span className={styles.userName}>{user.name}</span>
                                <span className={styles.advertiser}>Anunciante</span>
                            </div>
                            <p>{user.description}</p>
                            {userLogged === user.email ? (
                                <div>
                                    <button
                                        className={styles.createAd}
                                        onClick={openModal}
                                        type="button"
                                    >
        Criar anúncio
                                    </button>
                                    {modalOpen && (
                                        <BaseModal>
                                            <div>
                                                <button onClick={closeModal}>Fechar</button>
                                            </div>
                                        </BaseModal>
                                    )}
                                </div>
                            ) : <div></div>
                            }
                        </div>
                    </div>
                </div>

                <div className={styles.firstContainer}>
                    <span className={styles.adverts}>Anúncios</span>

                    <div>
                        {user.cars.length > zero ? (
                            <ul className={styles.ul}>
                                {userLogged === user.email
                                    && user.cars.map((car: IcarAnnouncement) => (
                                        <li className={styles.li} key={car.id}>
                                            <Card listCars={[car]} />
                                            <div className={styles.userEditAd}>
                                                {userLogged ===user.email ? (
                                                    <div className={styles.buttonsAdminBox}>
                                                        <button className={styles.buttonsAdmin} type="button"
                                                            onClick={() => BaseModal}
                                                        >
                                                            Editar
                                                        </button>
                                                        <button
                                                            onClick={() => router.push(
                                                                `/anuncios-que-ainda-nao-foi-criado/${car.id}`
                                                            )}
                                                            className={styles.buttonsAdmin} type="button">
                                                                Ver detalhes
                                                        </button>
                                                    </div>
                                                ) : (<div>
                                                    <span>
                                                        {`${user.name[zero].toUpperCase()}${user.name.split(" ")[one]?.[zero]?.toUpperCase() || ""}`}
                                                        <p>{user.name}</p>
                                                    </span>
                                                </div>)
                                                }
                                            </div>
                                        </li>
                                    ))}
                            </ul>
                        ) : (
                            <h1>Nada pra ver aqui...</h1>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AdMain;
