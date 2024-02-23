"use client"
import Link from 'next/link'
import { LinksList } from "./LinksList"
import styles from "./navbar.module.css"
import { usePathname } from 'next/navigation';

export default function Links() {
    const pathName = usePathname();
    const admin = false;
    const login = true;

    return (
        <div className="flex items-center gap-[10px]">

            {
                LinksList.map(link => {
                    const privateLink = ["Admin", "Login"]
                    if (!admin && link.title === "Admin") return null;
                    if (!login && link.title === "Login") return null;
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
