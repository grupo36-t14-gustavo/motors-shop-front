import PropTypes from "prop-types";
type InputProps ={
id: string;
placeholder?: string;
};
const Input:React.FC<InputProps> = ({ id, placeholder }) => {

    return(
        <div>
            <input type="text" id ={id} placeholder={placeholder} />
        </div>
    );
};

Input.propTypes ={
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
};

export default Input;