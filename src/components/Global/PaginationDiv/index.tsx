import styles from "./style.module.scss";
import globalFontStyles from "../../../styles/globalFonts.module.scss";

const Pagination = () => {
    return (
        <div
            className={`${styles.pagination_container} ${globalFontStyles.heading_5_600}`}
        >
            <span className={styles.pagination_container__colored}>
                {"< "}Anterior
            </span>
            <div className={styles.pagination_container__quantity}>
                <span className={styles.quantity__grey_modify}>1</span> de{" "}
                <span>1</span>
            </div>

            <span className={styles.pagination_container__colored}>
                Seguinte{" >"}
            </span>
        </div>
    );
};

export default Pagination;
