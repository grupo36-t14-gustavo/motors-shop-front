import ProductSection from "../../components/ProductPage/ProductSection";
import ProductImgDiv from "../../components/ProductPage/ProductImgDiv";
import ProductInfoDiv from "../../components/ProductPage/ProductInfoDiv";
import TagContainerDiv from "../../components/Global/TagContainerDiv";
import styles from "./styles.module.scss";
import Background from "@/components/Global/Background";

export default function product() {
    return (
        <div className={styles.productsPage}>
            <Background />
            <ProductSection>
                <ProductImgDiv>
                    <img
                        src="https://www.revistafullpower.com.br/wp-content/uploads/2015/10/ABRE9.jpg"
                        alt="product image"
                    />
                </ProductImgDiv>
                <ProductInfoDiv>
                    <h3>Modelo do veículo que será descrito aqui</h3>
                    <div className={styles.price__div}>
                        <TagContainerDiv />
                        <span className={styles.price}>R$ 99.9999,00</span>
                    </div>
                    <button className={styles.buy__button}>Comprar</button>
                </ProductInfoDiv>
            </ProductSection>
        </div>
    );
}
