const BaseTextarea = ({
    name,
    placeholder,
    label,
    handleChange,
}: {
    name: string;
    placeholder: string;
    label?: string;
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}) => {
    return (
        <>
            {label && <label htmlFor={name}>{label}</label>}
            <textarea
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={handleChange}
            ></textarea>
        </>
    );
};

export default BaseTextarea;
