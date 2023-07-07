"use client";
import "../../styles/reset.scss";
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
import globalStyles from "../../styles/layoutGlobal.module.scss";
import RightsContainer from "@/components/Global/RightsContainerDiv";

export default function Product() {
    const carDataString = localStorage.getItem("carData");
   
    const carData = JSON.parse(carDataString);
        
    

    const firstIndex = 0;

    useEffect(() => {
        const carDataStorage = localStorage.getItem("carData");
        console.log(carData);
        if (!carDataStorage) {
            location.pathname = "/home";
        }
    }, []);

    return (
        <div>
            <header className={globalStyles.body__header}>
                <NavBar />
            </header>

            <main className={globalStyles.body__main}>
                <Background />
                <div className={styles.productsPage}>
                    <ProductSection>
                        <ProductImgDiv
                            image={carData.images[firstIndex]?.img}
                        />
                        <ProductInfoDiv carData={carData}/>
                        <ProductDescDiv>
                            <div>
                                <h3>Descrição</h3>
                                <p>{carData.description}</p>
                            </div>
                        </ProductDescDiv>
                    </ProductSection>
                    <PhotosAndProfileSection>
                        <section>
                            <ProductImgListDiv />
                            <ProductOwnerDiv />
                        </section>
                    </PhotosAndProfileSection>
                </div>
            </main>

            <footer className={globalStyles.body__footer}>
                <RightsContainer />
            </footer>
        </div>
    );
}
