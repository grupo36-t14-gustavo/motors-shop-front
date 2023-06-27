// import PropTypes from "prop-types";
"use client";
import styles from "./style.module.scss";
import { ChangeEvent, useState } from "react";

const BaseInput = ({
    type,
    name,
    placeholder,
}: {
    type?: string;
    name: string;
    placeholder: string;
}) => {
    const [cpf, setCpf] = useState("");

    const maskCpfInput = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget;

        const numericValue = value.replace(/\D/g, "");
        const maskedValue = numericValue.replace(
            /(\d{3})(\d{3})(\d{3})(\d{2})/,
            "$1.$2.$3-$4"
        );

        setCpf(maskedValue);
    };

    return (
        <div>
            <label htmlFor={name}></label>
            {name === "userCpf" ? (
                <input
                    className={styles.input}
                    type={type || "text"}
                    id={name}
                    name={name}
                    value={cpf}
                    placeholder={placeholder}
                    maxLength={14}
                    onChange={maskCpfInput}
                />
            ) : (
                <input
                    type={type || "text"}
                    id={name}
                    placeholder={placeholder}
                    className={styles.input}
                    name={name}
                />
            )}
        </div>
    );
};

// BaseInput.propTypes = {
//     id: PropTypes.string.isRequired,
//     placeholder: PropTypes.string,
//     name: PropTypes.string.isRequired,
// };

export default BaseInput;
