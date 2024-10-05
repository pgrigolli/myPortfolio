import Link from "next/link";


export default function Navbar(){
    return (
        <>
            <nav className="flex justify-start bg-mainBlue p-4 fixed top-0 w-full pl-10">
                <ul className="flex space-x-10">
                    <li><Link href="/" className="text-white">Home</Link></li>
                    <li><Link href="/about" className="text-white">Sobre mim</Link></li>
                    <li><Link href="/projects" className="text-white">Meus projetos</Link></li>
                </ul>
            </nav>
        </>
    )
}