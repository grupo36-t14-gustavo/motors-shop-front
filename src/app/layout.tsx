import styles from "../styles/layoutGlobal.module.scss";

export const metadata = {
    title: "MotorsShop - Home",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={styles.root}>
            <body className={styles.body}>{children}</body>
        </html>
    );
}
