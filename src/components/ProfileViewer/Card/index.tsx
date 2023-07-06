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
                        <img className={styles.img}
                            // src={car.images}
                            src="https://conteudo.imguol.com.br/c/esporte/9b/2020/07/24/dalessandro-pensativo-durante-treinamento-do-internacional-1595602614951_v2_3x4.jpg"
                            alt="Imagem do veículo" />
                    </div>
                    <div className={styles.nameModelBox}>
                        <div className={styles.nameModel}>
                            <p>{car.brand}</p>
                            <span>-</span>
                            <span>{car.model}</span>
                        </div>
                        <div>
                            <p>{car.description}</p>
                        </div>
                        <div className={styles.infoBuyCar}>
                            <div>
                                <span>{car.km} KM</span>
                                <span>{car.year}</span>
                            </div>
                            <span>
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
