import Link from "next/link";
import styles from "./style.module.scss";

const RegisterRedirect = ({ type }: { type?: string }) => {
    return type === "nav" ? (
        <Link className={styles.redirect_auth_div} href="/register">
            Cadastrar
        </Link>
    ) : (
        <Link className={styles.redirect} href="/register">
            Cadastrar
        </Link>
    );
};

export default RegisterRedirect;
