import PropTypes from "prop-types";
import styles from "./style.module.scss";
type LabelProps = {
    htmlFor: string;
    name: string;
};
const Label: React.FC<LabelProps> = ({ htmlFor, name }) => {
    return (
        <label htmlFor={htmlFor} className={styles.label}>
            {name}{" "}
        </label>
    );
};

Label.propTypes = {
    name: PropTypes.string.isRequired,
    htmlFor: PropTypes.string.isRequired,
};

export default Label;
