import styles from "./style.module.scss";
import globalStyles from "../../../styles/globalVariables.module.scss";
import UserAvatar from "../UserAvatarDiv";

const UserContainer = () => {
    return (
        <div className={`${styles.user_container} ${globalStyles.body_2_500}`}>
            <UserAvatar></UserAvatar>
            <span>Evelin Camila</span>
        </div>
    );
};

export default UserContainer;
