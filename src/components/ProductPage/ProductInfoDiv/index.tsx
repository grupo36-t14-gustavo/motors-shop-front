import styles from "./style.module.scss";

interface iProductInfoProps {
    model: string;
    year: number;
    km: number;
    price: number;
}

const Component = ({ model, year, km, price }: iProductInfoProps) => {
    return (
        <div className={styles.div}>
            <h6 className={styles.model}>{model}</h6>
            <div className={styles.info}>
                <div className={styles.yearAndKm}>
                    <span className={styles.roxo}>{year}</span>
                    <span className={styles.roxo}>{km} km</span>
                </div>
                <span className={styles.price}>R$ {price}</span>
            </div>
            <button className={styles.comprar}>Comprar</button>
        </div>
    );
};

export default Component;
