import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import { ChangeEvent } from "react";
type InputPropsLabel = {
    id: string;
    placeholder?: string;
    name: string;
    eman: string;
    htmlFor: string;
    value?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};
const InputAndLabel: React.FC<InputPropsLabel> = ({
    id,
    placeholder,
    name,
    eman,
    value,
    onChange,
}) => {
    return (
        <div className={styles.div_flex}>
            <label className={styles.label_all} id={id} htmlFor={name}>
                {eman}
            </label>
            <input
                className={styles.input_all}
                type="text"
                id={id}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

InputAndLabel.propTypes = {
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
    htmlFor: PropTypes.string.isRequired,
    eman: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
};

export default InputAndLabel;
