import styles from "./style.module.scss";
import ProductCard from "../ProductCardLi";

const ProductList = () => {
    return (
        <ul className={styles.product_list}>
            {/* List of product cards */}
            <ProductCard />
        </ul>
    );
};

export default ProductList;
