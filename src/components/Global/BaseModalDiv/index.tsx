import styles from ".style.module.scss";
import { ReactNode } from "react";

const BaseModal = ({ children }: { children: ReactNode }) => {
    return (
        <div className={styles.modal__background}>
            <div className={styles.background__container}>
                <div className={styles.container__heading}>
                    <h2>Criar anúncio</h2>
                    <button>X</button>
                </div>
                {children}
            </div>
        </div>
    );
};

export default BaseModal;
