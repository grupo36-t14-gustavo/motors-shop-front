// "use client";

import { useRouter } from "next/navigation";
import { CardProps } from "./interfaces";
import styles from "./styles.module.scss";


const Card = ({ listCars }: CardProps) => {
    const router = useRouter();

    return (
        <>
            {listCars.map((car) => (
                <div
                    key={car.id}
                    onClick={() => router.push(`/anuncios-aqui/${car.id}`)}>
                    <div className={styles.imgContainer}>
                        {car.images ? (
                            <img className={styles.img}
                                src={car.images}
                                alt="Imagem do veículo" />
                        ) : <img className={styles.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6pNEJ_8x5Qu2iS9an3lmosMeYDjjdy7MPc8itmGTPHvcAtps3OsiXeILrzJq8t7JP7Oo&usqp=CAU" alt="Imagem do veículo sem foto" />
                        }
                        <div className={styles.status}>
                            <p>{car.isActive ? "Ativo" : "Inativo"}</p>
                        </div>
                    </div>
                    <div className={styles.nameModelBox}>
                        <div className={styles.nameModel}>
                            <p>{car.brand}</p>
                            <span>-</span>
                            <p>{car.model}</p>
                        </div>
                        <div>
                            <p className={styles.description}>{car.description}</p>
                        </div>
                        <div className={styles.infoBuyCar}>
                            <div className={styles.infoCarNumbersBox}>
                                <span className={styles.infoCarNumbers}>{car.km} KM</span>
                                <span className={styles.infoCarNumbers}>{car.year}</span>
                            </div>
                            <span className={styles.price}>
                                {car.price.toLocaleString("pt-br", {
                                    style: "currency",
                                    currency: "BRL",
                                })}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Card;