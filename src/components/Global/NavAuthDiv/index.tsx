import styles from "./style.module.scss";
import RegisterRedirect from "../RegisterRedirectAnchor";
import UserAvatar from "../UserAvatarDiv";

const NavAuth = () => {
    return (
        <div className={styles.nav_bar__auth_div}>
            {/* If User not signed: */}
            <a className={styles.auth_div__login_redirect} href="">
                Fazer Login
            </a>
            <RegisterRedirect type="nav" />

            {/* If User IS signed */}
            <UserAvatar />
        </div>
    );
};

export default NavAuth;
