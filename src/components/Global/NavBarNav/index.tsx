import Image from "next/image";
import logoImg from "../../../assets/img/shop.jpg";
import NavAuth from "../NavAuthDiv";
import styles from "./style.module.scss";

const NavBar = () => {
    return (
        <nav className={styles.header__nav_bar}>
            <Image src={logoImg} alt="" />

            <NavAuth />
        </nav>
    );
};

export default NavBar;
