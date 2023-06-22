import styles from "./style.module.scss";

interface iProductImgProps {
    children: React.ReactElement;
}

const ProductImgDiv = ({ children }: iProductImgProps) => {
    return <div className={styles.div}>{children}</div>;
};

export default ProductImgDiv;
