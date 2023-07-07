import NavBar from "@/components/Global/NavBarNav";
import LoginForm from "@/components/Login";
import styles from "../login/styles.module.scss";
import "../../styles/reset.scss";

export default function Login() {
    return (
        <>
            <NavBar />
            <div className={styles.conteiner_form_div_login}>
                <LoginForm />
            </div>
        </>
    );
}
