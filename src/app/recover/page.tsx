import NavBar from "@/components/Global/NavBarNav"
import styles from "./styles.module.scss"
import Input from "@/components/Global/Input"

export default function Recover  () {
 return (
    <div className={styles.recover__page}>
        <header className={styles.header}>
            <NavBar/>
        </header>
        <section className={styles.recover__section}>
            <form action="" className={styles.form}>
                <h3>Recuperar senha</h3>
                <span>Por favor, informe o email cadastrado!</span>
                <Input placeholder="Email"/>
            </form>
        </section>
    </div>
 )
}