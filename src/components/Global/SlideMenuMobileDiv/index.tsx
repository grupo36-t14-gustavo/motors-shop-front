import styles from ".style.module.scss";
import NavAuth from "../NavAuthDiv";
import NavUserSlideMenu from "../NavUserSlideMenuDiv";

const SlideMenuMobile = () => {
    return (
        <div>
            {/* If menu type IS NOT filter */}
            <NavAuth />
            <NavUserSlideMenu />

            {/* If menu type IS filter */}
        </div>
    );
};

export default SlideMenuMobile;
