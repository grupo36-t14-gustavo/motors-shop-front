"use client";
import ProductSection from "@/components/ProductPage/ProductSection";
import ProductImgDiv from "@/components/ProductPage/ProductImgDiv";
import ProductInfoDiv from "@/components/ProductPage/ProductInfoDiv";
import Background from "@/components/Global/Background";
import styles from "./styles.module.scss";
import NavBar from "@/components/Global/NavBarNav";
import ProductDescDiv from "@/components/ProductPage/ProductDescDiv";
import PhotosAndProfileSection from "@/components/ProductPage/PhotosAndProfileSection";
import ProductOwnerDiv from "@/components/ProductPage/ProductOwnerDiv";
import ProductImgListDiv from "@/components/ProductPage/ProductImgListDiv";
import { useEffect } from "react";

export default function Product() {
    const carData = JSON.parse(localStorage.getItem("carData"));

    useEffect(() => {
        const carDataStorage = localStorage.getItem("carData");
        if (!carDataStorage) {
            location.pathname = "/home";
        }
    }, []);

    return (
        <div>
            <Background />
            <header className={styles.body__header}>
                <NavBar />
            </header>
            <div className={styles.productsPage}>
                <ProductSection>
                    <ProductImgDiv>
                        <img src={carData.images[0]?.img} alt="product image" />
                    </ProductImgDiv>
                    <ProductInfoDiv>
                        <div>
                            <div>
                                <h3>{carData.title}</h3>
                            </div>
                            <div>
                                <div>
                                    <span>
                                        <h6>{carData.year}</h6>
                                    </span>
                                    <span>
                                        <h6>{carData.km}</h6>
                                        <h6>km</h6>
                                    </span>
                                </div>
                                <h4>R$: {carData.price}</h4>
                            </div>
                            <button>Comprar</button>
                        </div>
                    </ProductInfoDiv>
                    <ProductDescDiv>
                        <div>
                            <h3>Descrição</h3>
                            <p>{carData.description}</p>
                        </div>
                    </ProductDescDiv>
                </ProductSection>
                <PhotosAndProfileSection>
                    <div>
                        <ProductImgListDiv>
                            <div>
                                <div>
                                    <h3>Fotos</h3>
                                </div>
                                <div>
                                    <img
                                        src="https://www.revistafullpower.com.br/wp-content/uploads/2015/10/ABRE9.jpg"
                                        alt="Fusca"
                                    />
                                    <img
                                        src="https://www.revistafullpower.com.br/wp-content/uploads/2015/10/ABRE9.jpg"
                                        alt="Fusca"
                                    />
                                    <img
                                        src="https://www.revistafullpower.com.br/wp-content/uploads/2015/10/ABRE9.jpg"
                                        alt="Fusca"
                                    />
                                    <img
                                        src="https://www.revistafullpower.com.br/wp-content/uploads/2015/10/ABRE9.jpg"
                                        alt="Fusca"
                                    />
                                    <img
                                        src="https://www.revistafullpower.com.br/wp-content/uploads/2015/10/ABRE9.jpg"
                                        alt="Fusca"
                                    />
                                    <img
                                        src="https://www.revistafullpower.com.br/wp-content/uploads/2015/10/ABRE9.jpg"
                                        alt="Fusca"
                                    />
                                </div>
                            </div>
                        </ProductImgListDiv>
                        <ProductOwnerDiv>
                            <div>
                                <div>
                                    <img
                                        src="https://4.bp.blogspot.com/-mZVw3_1N_SU/TnCkiuj72jI/AAAAAAAAFms/95htKzb9cZU/s1600/D%2527Alessandro%2Bcom%2Ba%2BTa%25C3%25A7a%2Bda%2BLibertadores.jpg"
                                        alt="Foto de Perfil"
                                    />
                                </div>
                                <div>
                                    <h3>Andrés Nicolás</h3>
                                </div>
                                <span>
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Esse minus consequatur
                                    beatae nesciunt? Quidem cumque iure odio
                                    enim repellendus. Nesciunt neque porro
                                    voluptatum ea officiis deleniti iste quaerat
                                    sit minus!
                                </span>
                                <div>
                                    <button>Ver todos anúncios</button>
                                </div>
                            </div>
                        </ProductOwnerDiv>
                    </div>
                </PhotosAndProfileSection>
            </div>
        </div>
    );
}
