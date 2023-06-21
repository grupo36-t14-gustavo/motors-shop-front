import styles from "./style.module.scss";
import UserContainer from "../UserContainerSpan";
import TagContainer from "../TagContainerDiv";

const ProductCard = () => {
    return (
        <li className={styles.product_card}>
            <img src="" alt="" />
            <h3 className={styles.product_card__heading}>Porche 718</h3>
            <p className={styles.product_card__description}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem...
            </p>
            <UserContainer />
            <div className={styles.product_card__tag_price_div}>
                <TagContainer />
                <span className={styles.tag_price_div__price_span}>
                    R$ 00.000,00
                </span>
            </div>
        </li>
    );
};

export default ProductCard;
