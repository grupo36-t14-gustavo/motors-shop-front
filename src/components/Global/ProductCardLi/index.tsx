import styles from "./style.module.scss";
import UserContainer from "../UserContainerSpan";
import TagContainer from "../TagContainerDiv";
import globalFonts from "../../../styles/globalFonts.module.scss";
import { Car } from "@/interfaces/profile.interface";

const ProductCard = ({ carAdData }: { carAdData: Car }) => {
    const maxDecimalLength = 2;
    const imageFirstIndex = 0;

    return (
        <li
            className={styles.product_card}
            onClick={(el) => {
                el.preventDefault();
                localStorage.setItem("carData", JSON.stringify(carAdData));
                location.pathname = "/product";
            }}
        >
            <img
                className={styles.product_card__img}
                src={
                    carAdData.images[imageFirstIndex]?.img
                        ? carAdData.images[imageFirstIndex]?.img
                        : "https:source.unsplash.com/random"
                }
                alt="anounce image"
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
            <UserContainer ownerId={carAdData.ownerId} />
            <div className={styles.product_card__tag_price_div}>
                <TagContainer km={carAdData.km} year={carAdData.year} />
                <span
                    className={`${styles.tag_price_div__price_span} ${globalFonts.heading_7_500}`}
                >
                    {`R$ ${carAdData.price}`}
                </span>
            </div>
        </li>
    );
};

export default ProductCard;
