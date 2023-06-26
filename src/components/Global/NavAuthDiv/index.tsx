import styles from "./style.module.scss";
import globalFonts from "../../../styles/globalFonts.module.scss";
import Link from "next/link";
import RegisterRedirect from "../RegisterRedirectAnchor";

const NavAuth = () => {
    return (
        <div
            className={`${styles.nav_bar__auth_div} ${globalFonts.body_1_600}`}
        >
            {/* If User not signed: */}
            <Link className={styles.auth_div__login_redirect} href="/login">
                Fazer Login
            </Link>
            <RegisterRedirect type="nav" />

            {/* If User IS signed */}
            {/* <UserAvatar /> */}
        </div>
    );
};

export default NavAuth;
