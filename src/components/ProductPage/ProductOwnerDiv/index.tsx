import styles from "./style.module.scss";
import fontStyles from "../../../styles/globalFonts.module.scss";

const ProductOwnerDiv = () => {
    return (
        <div className={styles.div}>
            <div className={styles.img_container}>
                <img
                    src="https://4.bp.blogspot.com/-mZVw3_1N_SU/TnCkiuj72jI/AAAAAAAAFms/95htKzb9cZU/s1600/D%2527Alessandro%2Bcom%2Ba%2BTa%25C3%25A7a%2Bda%2BLibertadores.jpg"
                    alt="Foto de Perfil"
                />
            </div>
            <div>
                <h3 className={fontStyles.heading_6_600}>Andrés Nicolás</h3>
            </div>
            <p
                className={`${fontStyles.body_1_400} ${styles.avatar_description}`}
            >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
                minus consequatur beatae nesciunt? Quidem cumque iure odio enim
                repellendus. Nesciunt neque porro voluptatum ea officiis
                deleniti iste quaerat sit minus!
            </p>
            <div>
                <button className={`${fontStyles.button_big_text__modify}`}>
                    Ver todos anúncios
                </button>
            </div>
        </div>
    );
};

export default ProductOwnerDiv;
