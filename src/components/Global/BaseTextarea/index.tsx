import styles from "./style.module.scss";
import fontStyles from "../../../styles/globalFonts.module.scss";
import { ChangeEvent } from "react";

const BaseTextarea = ({
    name,
    placeholder,
    label,
    handleChange,
}: {
    name: string;
    placeholder: string;
    label?: string;
    handleChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}) => {
    return (
        <div className={styles.input_container}>
            {label && (
                <label
                    className={`${fontStyles.buttons_inputlabel__modify}`}
                    htmlFor={name}
                >
                    {label}
                </label>
            )}
            <textarea
                className={`${styles.base_input} ${fontStyles.buttons_inputlabel__modify}`}
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={handleChange}
            ></textarea>
        </div>
    );
};

export default BaseTextarea;
