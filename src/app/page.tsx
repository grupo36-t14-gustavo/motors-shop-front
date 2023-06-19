import styles from "../styles/layoutGlobal.module.scss";
import NavBar from "@/components/Global/NavBarNav";
import Banner from "@/components/Home/BannerSection";
import FilterTab from "@/components/Home/FilterTabAside";
import ProductList from "@/components/Global/ProductListUl";
import Pagination from "@/components/Global/PaginationDiv";
import RightsContainer from "@/components/Global/RightsContainerDiv";

export default function Home() {
    return (
        <>
            <header className={styles.body__header}>
                <NavBar />
            </header>
            <main className={styles.body__main}>
                <div className={styles.main__container}>
                    <Banner />
                    <section>
                        <FilterTab />
                        <ProductList />
                    </section>

                    <Pagination />
                </div>
            </main>
            <footer className={styles.body__footer}>
                <RightsContainer />
            </footer>
        </>
    );
}