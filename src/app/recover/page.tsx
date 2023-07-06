"use client";
import NavBar from "@/components/Global/NavBarNav";
import styles from "./styles.module.scss";
import globalFonts from "@/styles/globalFonts.module.scss";
import { ChangeEvent, useState } from "react";

export default function Recover() {
    const [email, setEmail] = useState("");
    const [cod, setCod] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event?.preventDefault();
        console.log(email, cod, newPassword);
    };

    return (
        <div className={styles.recover__page}>
            <header className={styles.header}>
                <NavBar />
            </header>
            <section className={styles.recover__section}>
                <form action="" className={styles.form} onSubmit={handleSubmit}>
                    <h3 className={globalFonts.heading_5_500}>
                        Recuperar senha
                    </h3>
                    {!email && (
                        <>
                            <span className={globalFonts.body_2_500}>
                                Por favor, informe o email cadastrado!
                            </span>
                            <input
                                onChange={(
                                    event: ChangeEvent<HTMLInputElement>
                                ) => setEmail(event.currentTarget.value)}
                                name="email"
                                placeholder="example@mail.com"
                            />
                        </>
                    )}
                    {email && !cod && (
                        <>
                            <span className={globalFonts.body_2_500}>
                                Por favor, informe o código enviado para seu
                                email!
                            </span>
                            <input
                                name="cod"
                                placeholder="XXXX"
                                onChange={(
                                    event: ChangeEvent<HTMLInputElement>
                                ) => setEmail(event.currentTarget.value)}
                            />
                        </>
                    )}
                    {cod && (
                        <>
                            <span className={globalFonts.body_2_500}>
                                Digite uma nova senha!
                            </span>
                            <input
                                name="newPassword"
                                placeholder="senha"
                                onChange={(
                                    event: ChangeEvent<HTMLInputElement>
                                ) => setEmail(event.currentTarget.value)}
                            />
                            <span className={globalFonts.body_2_500}>
                                Repita a senha!
                            </span>
                            <input
                                name="confirmPassword"
                                placeholder="senha"
                                onChange={(
                                    event: ChangeEvent<HTMLInputElement>
                                ) => setEmail(event.currentTarget.value)}
                            />
                        </>
                    )}
                    <div className={styles.form__buttons}>
                        <button className="return">Voltar</button>
                        <button className="submit" type="submit">
                            Enviar
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
}
