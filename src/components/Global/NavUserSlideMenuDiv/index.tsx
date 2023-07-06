import styles from "./style.module.scss";

const NavUserSlideMenu = () => {
    return (
        <div>
            <button>Editar Perfil</button>
            <button>Editar Endereço</button>
            {/* If isAdmin === true */}
            <button>Meus Anúncios</button>
            <button>Sair</button>
        </div>
    );
};

export default NavUserSlideMenu;
