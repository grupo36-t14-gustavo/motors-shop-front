import styles from "./style.module.scss";
import fontStyles from "../../../styles/globalFonts.module.scss";

const ProductImgListDiv = () => {
    return (
        <div className={styles.div_divider}>
            <h3 className={`${fontStyles.heading_6_600}`}>Fotos</h3>
            <div className={styles.img_div}>
                <img
                    src="https://www.revistafullpower.com.br/wp-content/uploads/2015/10/ABRE9.jpg"
                    alt="Fusca"
                />
                <img
                    src="https://www.revistafullpower.com.br/wp-content/uploads/2015/10/ABRE9.jpg"
                    alt="Fusca"
                />
                <img
                    src="https://www.revistafullpower.com.br/wp-content/uploads/2015/10/ABRE9.jpg"
                    alt="Fusca"
                />
                <img
                    src="https://www.revistafullpower.com.br/wp-content/uploads/2015/10/ABRE9.jpg"
                    alt="Fusca"
                />
                <img
                    src="https://www.revistafullpower.com.br/wp-content/uploads/2015/10/ABRE9.jpg"
                    alt="Fusca"
                />
                <img
                    src="https://www.revistafullpower.com.br/wp-content/uploads/2015/10/ABRE9.jpg"
                    alt="Fusca"
                />
            </div>
        </div>
    );
};

export default ProductImgListDiv;
