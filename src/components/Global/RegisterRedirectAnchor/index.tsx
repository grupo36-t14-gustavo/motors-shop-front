import styles from "./style.module.scss";

const RegisterRedirect = ({ type }: { type?: string }) => {
    return type === "nav" ? (
        <a
            className={styles.redirect_auth_div}
            href=""
        >
            Cadastrar
        </a>
    ) : (
        <a className={styles.redirect} href="">
            Cadastrar
        </a>
    );
};

export default RegisterRedirect;
