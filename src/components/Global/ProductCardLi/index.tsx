import styles from "./style.module.scss";
import UserContainer from "../UserContainerSpan";
import TagContainer from "../TagContainerDiv";
import globalFonts from "../../../styles/globalFonts.module.scss";
import { iReturnCarAd } from "@/services/api/CarAds";

const ProductCard = ({ carAdData }: { carAdData: iReturnCarAd }) => {
    const maxDecimalLength = 2;

    return (
        <li className={styles.product_card}>
            <img
                className={styles.product_card__img}
                src="https://source.unsplash.com/random"
                alt=""
            />
            <h3
                className={`${styles.product_card__heading} ${globalFonts.heading_7_600}`}
            >
                {carAdData.title}
            </h3>
            <p
                className={`${styles.product_card__description} ${globalFonts.body_2_400}`}
            >
                {carAdData.description}
            </p>

            <UserContainer ownerId={carAdData.ownerId}/>

            <div className={styles.product_card__tag_price_div}>
                <TagContainer km={carAdData.km} year={carAdData.year}/>
                <span
                    className={`${styles.tag_price_div__price_span} ${globalFonts.heading_7_500}`}
                >
                    {`R$ ${carAdData.price.toFixed(maxDecimalLength)}`}
                </span>
            </div>
        </li>
    );
};

export default ProductCard;
