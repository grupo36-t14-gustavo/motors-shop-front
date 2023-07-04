import PropTypes from "prop-types";
import styles from "./style.module.scss";
type InputProps = {
    id: string;
    placeholder?: string;
    name: string;
};
const InputPassword: React.FC<InputProps> = ({ id, placeholder, name }) => {
    return (
        <div>
            <input
                type="password"
                id={id}
                placeholder={placeholder}
                className={styles.input_all}
                name={name}
            />
        </div>
    );
};

InputPassword.propTypes = {
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
};

export default InputPassword;
