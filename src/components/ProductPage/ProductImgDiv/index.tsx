import styles from "./style.module.scss";

const ProductImgDiv = ({ image }: { image: string }) => {
    return (
        <div className={styles.div}>
            <img src={image} alt="product image" />
        </div>
    );
};

export default ProductImgDiv;
