import styles from ".style.module.scss";
import RegisterRedirect from "../RegisterRedirectAnchor";
import UserAvatar from "../UserAvatarDiv";

const NavAuth = () => {
    return (
        <div>
            {/* If User not signed: */}
            <a href="">Fazer Login</a>
            <RegisterRedirect />

            {/* If User IS signed */}
            <UserAvatar />
        </div>
    );
};

export default NavAuth;
