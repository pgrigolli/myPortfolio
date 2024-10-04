import Link from "next/link";

import styles from "../src/app/styles/Navbar.module.css"; // Importando o CSS module

export default function Navbar(){
    return (
        <>
        <nav className={styles.navbar}>
            <ul className={styles.navLinks}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">Sobre mim</Link></li>
                <li><Link href="/projects">Meus projetos</Link></li>
                <li></li>
            </ul>
        </nav>
        </>
    )
}