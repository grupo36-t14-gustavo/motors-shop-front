import styles from "./style.module.scss";
import globalStyles from "../../../styles/globalVariables.module.scss";

const TagContainer = ({ km, year }: { km: number; year: number }) => {
    return (
        <div className={styles.tags_container}>
            <div
                className={`${styles.tags_container__tag} ${globalStyles.body_2_500}`}
            >
                {km} KM
            </div>
            <div
                className={`${styles.tags_container__tag} ${globalStyles.body_2_500}`}
            >
                {year}
            </div>
        </div>
    );
};

export default TagContainer;
