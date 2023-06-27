import styles from "./style.module.scss";

interface iProductInfoDivProps {
    children: React.ReactNode;
}

const ProductInfoDiv = ({ children }: iProductInfoDivProps) => {
    return <div className={styles.div}>{children}</div>;
};

export default ProductInfoDiv;
