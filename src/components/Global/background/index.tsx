import styles from "./style.module.scss";

const Backgorund = () => {
    return (
        <>
            <div className={styles.background}>
                <div className={styles.backgorund__blue} />
                <div className={styles.background__grey} />
            </div>
        </>
    );
};

export default Backgorund;
