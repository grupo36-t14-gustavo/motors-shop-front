import styles from "./style.module.scss";
import globalStyles from "../../../styles/globalVariables.module.scss";

const TagContainer = () => {
    return (
        <div className={styles.tags_container}>
            <div
                className={`${styles.tags_container__tag} ${globalStyles.body_2_500}`}
            >
                0 KM
            </div>
            <div
                className={`${styles.tags_container__tag} ${globalStyles.body_2_500}`}
            >
                2019
            </div>
        </div>
    );
};

export default TagContainer;
