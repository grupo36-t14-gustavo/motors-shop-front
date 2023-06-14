import styles from "./style.module.scss";

const RightsContainer = () => {
    return (
        <div className={styles.footer__rights_container}>
            <img src="" alt="" />
            <span className={styles.rights_container__rights_span}>
                @ 2022 - Todos os direitos reservados.
            </span>
            <button className={styles.rights_container__go_to_top_btn}>
                <img src="" alt="" />
            </button>
        </div>
    );
};

export default RightsContainer;
