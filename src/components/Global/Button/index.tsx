import PropTypes from "prop-types";
import styles from "./style.module.scss";
interface ButtonProps {
    name: string;
    isSubmit?: boolean;
    handleClick?: () => void;
}
const Button: React.FC<ButtonProps> = ({ name, isSubmit, handleClick }) => {
    return isSubmit ? (
        <button className={styles.button} type="submit">
            {name}{" "}
        </button>
    ) : (
        <button className={styles.button} type="button" onClick={handleClick}>
            {name}{" "}
        </button>
    );
};

Button.propTypes = {
    name: PropTypes.string.isRequired,
    isSubmit: PropTypes.bool,
    handleClick: PropTypes.func,
};

export default Button;
