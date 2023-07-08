import styles from "./style.module.scss";
import globalFonts from "../../../styles/globalFonts.module.scss";
import logoImg from "../../../assets/img/MotorsDark.png";
import Image from "next/image";
import angleUpIcon from "../../../assets/icons/arrowUp.svg";

const RightsContainer = () => {

    const scrollX = 0, scrollY = 0;

    return (
        <div className={styles.footer__rights_container}>
            <Image src={logoImg} alt="" />
            <span
                className={`${styles.rights_container__rights_span} ${globalFonts.body_2_400}`}
            >
                @ 2022 - Todos os direitos reservados.
            </span>
            <button className={`${styles.rights_container__go_to_top_btn}`} onClick={() => {
                window.scrollTo(scrollX, scrollY);
            }}>
                <Image src={angleUpIcon} alt="" />
            </button>
        </div>
    );
};

export default RightsContainer;
