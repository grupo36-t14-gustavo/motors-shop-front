import styles from "./style.module.scss";

interface iProductSectionProps {
    children: React.ReactElement;
}

const Component = ({ children }: iProductSectionProps) => {
    return <div className={styles.div}>{children}</div>;
};

export default Component;
