"use client";
import styles from "../styles/layoutGlobal.module.scss";
import NavBar from "@/components/Global/NavBarNav";
import Pagination from "@/components/Global/PaginationDiv";
import ProductList from "@/components/Global/ProductListUl";
import RightsContainer from "@/components/Global/RightsContainerDiv";
import Banner from "@/components/Home/BannerSection";
import FilterTab from "@/components/Home/FilterTabAside";
import { iReturnCarAd, listAllCarAds } from "@/services/api/CarAds";
import { iCarAdListPagination } from "@/interfaces/carAds.interface";
import { useEffect, useState } from "react";

export default function Home() {
    const [carAdList, setCarAdList] = useState<iReturnCarAd[] | undefined>();
    const [pagination, setPagination] = useState<iCarAdListPagination>();

    const renderCarAdList = async () => {
        const carAdList = await listAllCarAds();

        if (carAdList) {
            setCarAdList(carAdList.data);
            setPagination({
                previousPage: carAdList.prevPage,
                nextPage: carAdList.nextPage,
            });
        }
    };

    useEffect(() => {
        renderCarAdList();
    }, []);

    return (
        <>
            <header className={styles.body__header}>
                <NavBar />
            </header>

            <Banner />
            <main className={styles.body__main}>
                <div className={styles.main__container}>
                    <section className={styles.container__main_section}>
                        <FilterTab />
                        <ProductList carAdList={carAdList} />
                    </section>

                    <Pagination
                        pagination={pagination}
                        setPagination={setPagination}
                        setCarAdList={setCarAdList}
                    />
                </div>
            </main>

            <footer className={styles.body__footer}>
                <RightsContainer />
            </footer>
        </>
    );
}
