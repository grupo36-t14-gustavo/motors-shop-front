import ProductSection from "../../components/ProductPage/ProductSection";
import ProductImgDiv from "../../components/ProductPage/ProductImgDiv";
import ProductInfoDiv from "../../components/ProductPage/ProductInfoDiv";
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
                    <h6>Fusca 1600</h6>
                </ProductInfoDiv>
            </ProductSection>
        </div>
    );
}
