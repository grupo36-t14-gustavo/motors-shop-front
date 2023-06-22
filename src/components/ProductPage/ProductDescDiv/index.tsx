import styles from "./style.module.scss";

interface iProductDescDiv {
    children: React.ReactNode;
}

const Component = ({ children }: iProductDescDiv) => {
    return <div className={styles.div}>{children}</div>;
};

export default Component;
