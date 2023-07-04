import PropTypes from "prop-types";
import styles from "./style.module.scss";
import { MouseEvent } from "react";
interface ButtonProps {
    name: string;
    isSubmit?: boolean;
    handleClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    value?: string;
}
const Button: React.FC<ButtonProps> = ({
    name,
    isSubmit,
    handleClick,
    value,
}) => {
    return isSubmit ? (
        <button className={styles.button} type="submit">
            {name}{" "}
        </button>
    ) : (
        <button className={styles.button} type="button" onClick={handleClick} value={value}>
            {name}{" "}
        </button>
    );
};

Button.propTypes = {
    name: PropTypes.string.isRequired,
    isSubmit: PropTypes.bool,
    handleClick: PropTypes.func,
    value: PropTypes.string,
};

export default Button;
