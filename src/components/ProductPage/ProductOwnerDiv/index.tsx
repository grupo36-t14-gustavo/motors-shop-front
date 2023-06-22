import styles from "./style.module.scss";

interface iProductOwnerDivProps {
    children: React.ReactElement;
}

const ProductOwnerDiv = ({ children }: iProductOwnerDivProps) => {
    return <div className={styles.div}>{children}</div>;
};

export default ProductOwnerDiv;
