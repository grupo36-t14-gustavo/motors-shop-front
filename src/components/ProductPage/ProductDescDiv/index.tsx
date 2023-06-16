import styles from "./style.module.scss";

interface IComponent {
    children: React.ReactNode;
}

const Component = ({ children }: IComponent) => {
    return <div className={styles.div}>{children}</div>;
};

export default Component;
