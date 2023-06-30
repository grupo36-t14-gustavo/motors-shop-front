import PropTypes from "prop-types";
import styles from "./style.module.scss";
interface ButtonProps {
    name: string;
    isSubmit?: boolean;
}
const Button: React.FC<ButtonProps> = ({ name, isSubmit }) => {
    return (
        <button className={styles.button} type={isSubmit ? "submit" : "button"}>
            {name}{" "}
        </button>
    );
};

Button.propTypes = {
    name: PropTypes.string.isRequired,
    isSubmit: PropTypes.bool,
};

export default Button;
