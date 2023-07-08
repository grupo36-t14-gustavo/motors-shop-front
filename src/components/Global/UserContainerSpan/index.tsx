import styles from "./style.module.scss";
import globalStyles from "../../../styles/globalVariables.module.scss";
import UserAvatar from "../UserAvatarDiv";

const UserContainer = ({ ownerId }: { ownerId: string}) => {
    return (
        <div className={`${styles.user_container} ${globalStyles.body_2_500}`}>
            {/* <UserAvatar /> */}
            <span>Evelin Camila</span>
        </div>
    );
};

export default UserContainer;
