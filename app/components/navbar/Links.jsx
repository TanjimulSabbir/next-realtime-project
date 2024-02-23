"use client"
import Link from 'next/link'
import styles from "./navbar.module.css"
import { usePathname } from 'next/navigation';

export default function Links() {
    const Links = [
        {
            title: "Homepage",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Blog",
            path: "/blog"
        },
        {
            title: "Contact",
            path: "/contact"
        },
        {
            title: "Admin",
            path: "/admin"
        },

    ]
    const pathName = usePathname();
    console.log(pathName)
    return (
        <div className="flex items-center gap-[10px]">

            {
                Links.map(link =>
                    <Link
                        key={link.title}
                        href={link.path}
                        className={`${styles.menuBtn} ${pathName === link.path && styles.activeLink}`}>
                        {link.title}
                    </Link>)
            }
        </div>
    )
}
