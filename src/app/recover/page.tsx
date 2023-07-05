import NavBar from "@/components/Global/NavBarNav"
import styles from "./styles.module.scss"
import Input from "@/components/Global/Input"
import globalFonts from "@/styles/globalFonts.module.scss"
import Button from "@/components/Global/Button"
import React from "react"

export default function Recover  () {
    // const [email, setEmail] = React.useState("")
    // const [cod, setCod] = React.useState("")
    // const [newPassword, setNewPassword] = useState("")
    const email = "email"
    const newPassword = ""
 return (
    <div className={styles.recover__page}>
        <header className={styles.header}>
            <NavBar/>
        </header>
        <section className={styles.recover__section}>
            <form action="" className={styles.form}>
                <h3 className={globalFonts.heading_5_500}>Recuperar senha</h3>
                { email !== "email"  ?
                    <>
                        <span className={globalFonts.body_2_500}>Por favor, informe o email cadastrado!</span>
                        <Input name="email" id=""/> 
                    </>
                    :
                    <>
                        <span className={globalFonts.body_2_500}>Por favor, informe o código enviado para seu email!</span>
                        <Input placeholder="XXXX"/>
                    </>

                }
                <div className={styles.form__buttons}>
                    {/* <Button name="Voltar"/>
                    <Button name="Enviar"/> */}
                    <button className="return">Voltar</button>
                    <button className="submit" type="submit">Enviar</button>
                </div>
            </form>
        </section>
    </div>
 )
}