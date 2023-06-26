import styles from "./style.module.scss";
import UserContainer from "../UserContainerSpan";
import TagContainer from "../TagContainerDiv";
import globalFonts from "../../../styles/globalFonts.module.scss";

const ProductCard = () => {
    return (
        <li className={styles.product_card}>
            <img className={styles.product_card__img} src="https://source.unsplash.com/random" alt="" />
            <h3
                className={`${styles.product_card__heading} ${globalFonts.heading_7_600}`}
            >
                Porche 718
            </h3>
            <p
                className={`${styles.product_card__description} ${globalFonts.body_2_400}`}
            >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem...
            </p>
            <UserContainer />
            <div className={styles.product_card__tag_price_div}>
                <TagContainer />
                <span
                    className={`${styles.tag_price_div__price_span} ${globalFonts.heading_7_500}`}
                >
                    R$ 00.000,00
                </span>
            </div>
        </li>
    );
};

export default ProductCard;
