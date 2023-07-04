import styles from "./style.module.scss";
import ProductCard from "../ProductCardLi";
import { iReturnCarAd } from "@/services/api/CarAds";

const ProductList = ({
    carAdList,
}: {
    carAdList: iReturnCarAd[] | undefined;
}) => {
    return (
        <ul className={styles.product_list}>
            {carAdList &&
                carAdList.map((carAd: iReturnCarAd, index) => {
                    return <ProductCard key={index} carAdData={carAd} />;
                })}
        </ul>
    );
};

export default ProductList;
