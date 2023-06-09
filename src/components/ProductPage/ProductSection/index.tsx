import { ReactNode } from "react";
import styles from "./style.module.scss";

interface iProductSectionProps {
    children: ReactNode;
}

const ProductSection = ({ children }: iProductSectionProps) => {
    return <div className={styles.div}>{children}</div>;
};

export default ProductSection;
