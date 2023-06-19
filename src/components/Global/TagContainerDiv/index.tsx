import styles from "./style.module.scss";

const TagContainer = () => {
    return (
        <div className={styles.tags_container}>
            <div className={styles.tags_container__tag}>0 KM</div>
            <div className={styles.tags_container__tag}>2019</div>
        </div>
    );
};

export default TagContainer;
