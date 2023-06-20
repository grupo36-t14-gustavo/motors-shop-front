import styles from "./style.module.scss";
import RegisterRedirect from "../RegisterRedirectAnchor";
import UserAvatar from "../UserAvatarDiv";
import Link from "next/link";

const NavAuth = () => {
    return (
        <div className={styles.nav_bar__auth_div}>
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
