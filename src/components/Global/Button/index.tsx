import PropTypes from "prop-types";
import styles from "./style.module.scss";
import fontStyles from "../../../styles/globalFonts.module.scss";
import { MouseEvent } from "react";
interface ButtonProps {
    className?: string;
    name: string;
    isSubmit?: boolean;
    handleClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    value?: string;
}
const Button: React.FC<ButtonProps> = ({
    className,
    name,
    isSubmit,
    handleClick,
    value,
}) => {
    return isSubmit ? (
        <button
            className={`${styles.button} ${fontStyles.button_big_text__modify} ${className}`}
            type="submit"
        >
            {name}{" "}
        </button>
    ) : (
        <button
            className={`${styles.button} ${fontStyles.button_big_text__modify} ${className}`}
            type="button"
            onClick={handleClick}
            value={value}
        >
            {name}{" "}
        </button>
    );
};

Button.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    isSubmit: PropTypes.bool,
    handleClick: PropTypes.func,
    value: PropTypes.string,
};

export default Button;
