import PropTypes from "prop-types";
import styles from "./style.module.scss";
interface ButtonProps {
    name: string
}
const Button: React.FC<ButtonProps>  =({name}) =>{

    return(
        <button className={styles.button} >{name} </button>
    );
};

Button.propTypes = {
    name: PropTypes.string.isRequired
};


export default Button;