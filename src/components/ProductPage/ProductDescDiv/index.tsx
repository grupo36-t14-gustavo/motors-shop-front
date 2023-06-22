import styles from "./style.module.scss";

interface iProductDescDivProps {
    children: React.ReactElement;
}

const ProductDescDiv = ({ children }: iProductDescDivProps) => {
    return <div className={styles.div}>{children}</div>;
};

export default ProductDescDiv;
