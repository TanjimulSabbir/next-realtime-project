import React from 'react'

export default function BlogLayou({ children }) {
    return (
        <div>
            <h1>This is the blog layout page</h1>
            <div>
                {children}
            </div>
        </div>
    )
}
