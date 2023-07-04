import PropTypes from "prop-types";
import styles from "./style.module.scss";
import { ChangeEvent } from "react";
type InputProps = {
    id: string;
    placeholder?: string;
    name: string;
    value?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};
const Input: React.FC<InputProps> = ({
    id,
    placeholder,
    name,
    value,
    onChange,
}) => {
    return (
        <div>
            <input
                type="text"
                id={id}
                placeholder={placeholder}
                className={styles.input}
                name={name}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

Input.propTypes = {
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
};

export default Input;
