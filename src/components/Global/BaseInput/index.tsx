"use client";
import styles from "./style.module.scss";
import fontStyles from "../../../styles/globalFonts.module.scss";
import { ChangeEvent } from "react";

const BaseInput = ({
    type,
    name,
    placeholder,
    label,
    handleChange,
}: {
    type?: string;
    name: string;
    placeholder: string;
    label: string;
    handleChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}) => {
    return (
        <div className={styles.input_container}>
            <label className={`${fontStyles.buttons_inputlabel__modify}`} htmlFor={name}>{label}</label>
            {name === "cpf" ? (
                <input
                    className={`${styles.base_input} ${fontStyles.buttons_inputlabel__modify}`}
                    type={type || "text"}
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    maxLength={14}
                    onChange={handleChange}
                />
            ) : (
                <input
                    className={`${styles.base_input} ${fontStyles.buttons_inputlabel__modify}`}
                    type={type || "text"}
                    id={name}
                    placeholder={placeholder}
                    name={name}
                    onChange={handleChange}
                />
            )}
        </div>
    );
};

export default BaseInput;
