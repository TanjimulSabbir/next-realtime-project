import Link from 'next/link'
import React from 'react'

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
    return (
        <>
            {
                Links.map(link => <Link key={link.title} href={link.path}>{link.title}</Link>)
            }
        </>
    )
}
