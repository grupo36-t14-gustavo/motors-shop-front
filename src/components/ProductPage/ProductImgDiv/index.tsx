import styles from "./style.module.scss";

interface iProductImgProps {
    children: React.ReactElement;
}

const Component = ({ children }: iProductImgProps) => {
    return <div className={styles.div}></div>;
};

export default Component;
