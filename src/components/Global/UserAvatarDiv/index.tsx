import styles from "./style.module.scss";

const UserAvatar = () => {
    return (
        <div className={styles.avatar__container}>
            <img
                className={styles.container__img}
                src=""
                // alt="An avatar image fitted in a circle block"
            />
        </div>
    );
};

export default UserAvatar;
