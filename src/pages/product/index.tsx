import Backgorund from "@/components/Global/background";
import ProductImgDiv from "../../components/ProductPage/ProductImgDiv";
import ProductInfoDiv from "../../components/ProductPage/ProductInfoDiv";
import ProductDescDiv from "../../components/ProductPage/ProductDescDiv";
import style from "./style.module.scss";

const product = () => {
    return (
        <section className={style.product}>
            <Backgorund />
            <ProductImgDiv>
                <img src="https://fotos.jornaldocarro.estadao.com.br/uploads/2018/06/30151604/41545551-1160x773.jpg" />
            </ProductImgDiv>

            <ProductInfoDiv
                model={"Brasília 2.0 gti"}
                year={2016}
                km={12000}
                price={1200.0}
            />

            <ProductDescDiv>
                <h6>Descrição</h6>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae iusto accusantium, corrupti magnam nisi facere rem
                    commodi consequuntur, voluptas quaerat sequi, aperiam
                    distinctio dolores molestias. Consectetur officia officiis
                    similique magnam.
                </p>
            </ProductDescDiv>
        </section>
    );
};

export default product;
