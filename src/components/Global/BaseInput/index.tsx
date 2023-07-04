"use client";
import styles from "./style.module.scss";
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
        <>
            <label htmlFor={name}>{label}</label>
            {name === "cpf" ? (
                <input
                    className={styles.input}
                    type={type || "text"}
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    maxLength={14}
                    onChange={handleChange}
                />
            ) : (
                <input
                    type={type || "text"}
                    id={name}
                    placeholder={placeholder}
                    className={styles.input}
                    name={name}
                    onChange={handleChange}
                />
            )}
        </>
    );
};

export default BaseInput;
