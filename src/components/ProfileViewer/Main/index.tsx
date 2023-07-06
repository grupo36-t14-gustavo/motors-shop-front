// "use client";
import { AnnouncementContext } from "@/contexts/AnnoucementContext";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { AdMainProps } from "./interfaces";
import { IcarAnnouncement } from "../Card/interfaces";
import Card from "../Card";
import styles from "./styles.module.scss";

const zero = 0;
const one = 1;

const AdMain = ({ user, userLogged }: AdMainProps) => {
    const { cars } = useContext(AnnouncementContext);

    const router = useRouter();


    return (
        <main className={styles.main}>
            <div>
                <div className={styles.userInfoBox}>
                    <div className={styles.userInfo}>
                        <span className={styles.userName}>
                            {`${user.name[zero].toUpperCase()}${user.name.split(" ")[one]?.[zero]?.toUpperCase() || ""}`}
                        </span>
                        <div className={styles.nameAdvertiser}>
                            <span>{user.name}</span>
                            <span className={styles.advertiser}>Anunciante</span>
                        </div>
                        <p>{user.description}</p>
                        {userLogged === user.email ? (
                            <div>
                                <button className={styles.createAd} type="button">Criar anúncio</button>
                            </div>
                        ) : <div></div>
                        }
                    </div>
                </div>

                <div className={styles.firstContainer}>
                    <span>Anúncios</span>

                    <div>
                        {user.cars.length > zero ? (
                            <ul className={styles.ul}>
                                {userLogged === user.email
                                    ? user.cars.map((car: IcarAnnouncement) => (
                                        <li className={styles.li} key={car.id}>
                                            <Card listCars={[car]} />
                                            <div className={styles.userEditAd}>
                                                {userLogged ? (
                                                    <div>
                                                        <button type="button">
                                                            Editar
                                                        </button><button
                                                            onClick={() => router.push(
                                                                `/anuncios-que-ainda-nao-foi-criado/${car.id}`
                                                            )}
                                                            type="button">
                                                                Ver detalhes
                                                        </button>
                                                    </div>
                                                ) : <button></button>
                                                }
                                                <div>
                                                </div>
                                            </div>
                                        </li>
                                    ))
                                    : cars
                                        .filter((item) => item.isActive === true)
                                        .map((car) => (
                                            <li key={car.id}>
                                                <Card listCars={[car]} />
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
