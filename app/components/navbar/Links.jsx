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
        setLoginState(false)
        return toast("Logout successful");
    }
    return (
        <div className="flex items-center gap-[10px]">

            {
                LinksList.map(link => {
                    const privateLink = ["Admin", "Login"]
                    if (!admin && link.title === "Admin") return null;
                    if (link.title && !loginState === "Login") return null;
                    if (link.title && loginState === "Login") return <Link href="/" onClick={() => handleLogin()}>Logout</Link>;

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
