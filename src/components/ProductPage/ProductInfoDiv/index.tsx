import styles from "./style.module.scss";
import fontStyles from "../../../styles/globalFonts.module.scss";
import TagContainer from "@/components/Global/TagContainerDiv";

const ProductInfoDiv = ({ carData }: { carData: any }) => {
    return (
        <div className={styles.div}>
            <div>
                <h3
                    className={`${fontStyles.heading_6_600} ${styles.info_title}`}
                >
                    {carData.title}
                </h3>
            </div>
            <div className={`${styles.info_tag_and_price}`}>
                <TagContainer km={carData.km} year={carData.year} />
                <h3 className={`${fontStyles.heading_7_500}`}>
                    R$: {carData.price}
                </h3>
            </div>
            <button>Comprar</button>
        </div>
    );
};

export default ProductInfoDiv;
