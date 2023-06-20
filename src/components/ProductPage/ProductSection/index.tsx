import { ReactNode } from "react";
import styles from "./style.module.scss";

interface iProductSectionProps {
    children: ReactNode;
}

const Component = ({ children }: iProductSectionProps) => {
    return <div className={styles.div}>{children}</div>;
};

export default Component;
