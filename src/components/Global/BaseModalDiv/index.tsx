import { ReactNode, useState } from "react";
import styles from "./style.module.scss";

const BaseModal = ({
    title,
    children,
}: {
    title: string;
    children: ReactNode;
}) => {
    const [closeModal, setCloseModal] = useState(false);

    return !closeModal ? (
        <div className={styles.modal__background}>
            <div className={styles.background__container}>
                <div className={styles.container__heading}>
                    <h2>{title}</h2>
                    <button onClick={() => setCloseModal(true)}>X</button>
                </div>
                {children}
            </div>
        </div>
    ) : (
        <></>
    );
};

export default BaseModal;
