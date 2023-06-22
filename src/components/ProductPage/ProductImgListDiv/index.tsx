import styles from "./style.module.scss";

interface iProductImgListDivProps {
    children: React.ReactElement;
}

const ProductImgListDiv = ({ children }: iProductImgListDivProps) => {
    return <div className={styles.div}>{children}</div>;
};

export default ProductImgListDiv;
