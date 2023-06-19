import styles from "./style.module.scss";

interface iTagContainer {
    year: number;
    km: number;
}

const TagContainer = ({ year, km }: iTagContainer) => {
    return (
        <div className={styles.tags_container}>
            <div className={styles.tags_container__tag}>{year}</div>
            <div className={styles.tags_container__tag}>{km} KM</div>
        </div>
    );
};

export default TagContainer;
