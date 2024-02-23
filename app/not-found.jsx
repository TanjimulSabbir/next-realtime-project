import Link from "next/link";

export default function notFound() {
    return (
        <div>
            <h1>The page are you looking for is not found!</h1>
            <Link href="/">Return home</Link>
        </div>
    )
}
