import styles from "./style.module.scss";
import globalFontStyles from "../../../styles/globalFonts.module.scss";

const Banner = () => {
    return (
        <section className={styles.banner_section}>
            <div className={`${styles.banner_section__heading}`}>
                <h1 className={`${globalFontStyles.heading_1_700}`}>
                    Motors Shop
                </h1>
                <p className={`${globalFontStyles.heading_2_600}`}>
                    A melhor plataforma de anúncios de carros do país
                </p>
            </div>
        </section>
    );
};

export default Banner;
