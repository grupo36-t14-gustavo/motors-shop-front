import styles from ".style.module.scss";
import UserContainer from "../UserContainerSpan";
import TagContainer from "../TagContainerDiv";

const ProductCard = () => {
    return (
        <li>
            <img src="" alt="" />
            <h3>Porche 718</h3>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem...
            </p>
            <UserContainer />
            <div>
                <TagContainer />
                <span>R$ 00.000,00</span>
            </div>
        </li>
    );
};

export default ProductCard;
