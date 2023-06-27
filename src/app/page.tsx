import NavBar from "@/components/Global/NavBarNav";
import Pagination from "@/components/Global/PaginationDiv";
import ProductList from "@/components/Global/ProductListUl";
import RightsContainer from "@/components/Global/RightsContainerDiv";
import Banner from "@/components/Home/BannerSection";
import FilterTab from "@/components/Home/FilterTabAside";
import styles from "../styles/layoutGlobal.module.scss";
import BaseModal from "@/components/Global/BaseModalDiv";
import EditModal from "@/components/Profile/EditModalDiv";

export default function Home() {
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
                        <ProductList />
                    </section>

                    <Pagination />
                </div>
            </main>

            <footer className={styles.body__footer}>
                <RightsContainer />
            </footer>

            <EditModal/>

        </>
    );
}
