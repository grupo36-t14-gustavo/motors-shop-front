import styles from "./styles.module.scss";

const Background = () => {
    return (
        <div className={styles.background}>
            <div className={styles.background__blue} />
            <div className={styles.background__grey} />
        </div>
    );
};

export default Background;
