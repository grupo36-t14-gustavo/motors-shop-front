import PropTypes from "prop-types";

interface ButtonProps {
    name: string
}
const Button: React.FC<ButtonProps>  =({name}) =>{

    return(
        <button>{name} </button>
    );
};

Button.propTypes = {
    name: PropTypes.string.isRequired
};


export default Button;