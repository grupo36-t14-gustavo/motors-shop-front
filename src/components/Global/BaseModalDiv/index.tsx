import { ReactNode } from "react";
import styles from "./style.module.scss";

const BaseModal = ({ title, children }: { title: string, children: ReactNode }) => {
    return (
        <div className={styles.modal__background}>
            <div className={styles.background__container}>
                <div className={styles.container__heading}>
                    <h2>{title}</h2>
                    <button>X</button>
                </div>
                {children}
            </div>
        </div>
    );
};

export default BaseModal;
