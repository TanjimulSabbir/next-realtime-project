"use client"
import Link from 'next/link'
import { LinksList } from "./LinksList"
import styles from "./navbar.module.css"
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function Links() {
    const [loginState, setLoginState] = useState(true)
    const pathName = usePathname();
    const admin = false;

    const handleLogin = () => {
        const logoutEnsurity = confirm("Do you want to logout?")
        if (!logoutEnsurity) return null;
        setLoginState(false)
        return toast("Logout successful");
    }
    console.log(loginState, "loginState");
    return (
        <div className="flex items-center gap-[10px]">

            {
                LinksList.map(link => {
                    if (!admin && link.title === "Admin") return null;
                    if (!loginState && link.title === "Login") return null;
                    if (loginState && link.title === "Login") return <Link className={`${styles}
                    ${styles.logout}`} key={link.title} href="/" onClick={() => handleLogin()}>Logout</Link>;

                    return (
                        <Link
                            key={link.title}
                            href={link.path}
                            className={`${styles.menuBtn} ${pathName === link.path && styles.activeLink}`}>
                            {link.title}
                        </Link>
                    )
                })
            }

        </div>
    )
}
