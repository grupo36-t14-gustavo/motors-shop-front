import PropTypes from "prop-types";

type LabelProps ={
  htmlFor:string;
  name: string;
}
const Label:React.FC<LabelProps> = ({htmlFor, name}) =>{
    return (
        <label htmlFor={htmlFor} >{name} </label>
    
    );
};

Label.propTypes ={
    name: PropTypes.string.isRequired,
    htmlFor: PropTypes.string.isRequired,
};

export default Label;