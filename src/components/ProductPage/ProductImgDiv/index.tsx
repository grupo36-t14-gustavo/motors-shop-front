import React from "react";
import styles from "./style.module.scss";

type ProductImgProps = {
    children: React.ReactNode;
};

const Component = ({ children }: ProductImgProps) => {
    return <div className={styles.div}>{children}</div>;
};

export default Component;
