import ProductSection from "../../components/ProductPage/ProductSection";
import ProductImgDiv from "../../components/ProductPage/ProductImgDiv";
import ProductInfoDiv from "../../components/ProductPage/ProductInfoDiv";
import TagContainerDiv from "../../components/Global/TagContainerDiv";
import ProductDescDiv from "../../components/ProductPage/ProductDescDiv";
import NavBarNav from "../../components/Global/NavBarNav";
import styles from "./styles.module.scss";
import Background from "@/components/Global/Background";
import globalFonts from "../../styles/globalFonts.module.scss";

export default function product() {
    return (
        <div className={styles.productsPage}>
            <Background />
            <NavBarNav />
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
                <ProductDescDiv>
                    <h3 className={globalFonts.heading_6_600}>Descrição</h3>
                    <p className={globalFonts.body_1_400}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Modi porro natus mollitia, explicabo accusantium quo!
                        Officia eos omnis, dignissimos quibusdam ut eligendi
                        eaque cum quos nisi dolorum mollitia nobis
                        necessitatibus!
                    </p>
                </ProductDescDiv>
            </ProductSection>
        </div>
    );
}
