import { ReactNode } from "react";
import styles from "./style.module.scss";

interface iPhotosAndProfileSectionProps {
    children: ReactNode;
}

const PhotosAndProfileSection = ({ children }: iPhotosAndProfileSectionProps) => {
    return <div className={styles.div}>{children}</div>;
};

export default PhotosAndProfileSection;
