//การสร้าง link ไปยังหน้าต่างๆ //
import Link from "next/link";

export default function Navbar() {
    return (

        <nav className="flex gap-2 p-4 bg-slate-500 m-4 rounded-2xl text-gray-100">
            <Link href="/module1">Hello</Link>
            <Link href="/module1">Home</Link>
            <Link href="/module1">Product</Link>
        </nav>
    );
}