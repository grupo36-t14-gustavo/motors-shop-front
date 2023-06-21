import styles from "./style.module.scss";

interface iProductInfoDivProps {
    children: React.ReactNode;
}

const Component = ({ children }: iProductInfoDivProps) => {
    return <div className={styles.div}>{children}</div>;
};

export default Component;
