import PropTypes from "prop-types";
import styles from "./style.module.scss";
type InputProps = {
    id: string;
    placeholder?: string;
    name: string;
};
const Input: React.FC<InputProps> = ({ id, placeholder, name }) => {
    return (
        <div>
            <input
                type="text"
                id={id}
                placeholder={placeholder}
                className={styles.input}
                name={name}
            />
        </div>
    );
};

Input.propTypes = {
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
};

export default Input;
