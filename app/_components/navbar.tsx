'use client'
import Image from "next/image"
import logo from '@/app/_assets/Logo.svg'
import { londrinaSolid } from "../_lib/fonts"
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Navbar() {
    const pathName = usePathname();
    const isActive = (currentPath: string, pathName: string) => currentPath.includes(pathName) && 'underline'
    return (
        <nav className={`container flex justify-between  py-8 ${londrinaSolid.className}`}>
            <Link href={'/'}>
                <Image src={logo} alt="Sandro Luz Tattoo Shop" />
            </Link>
            <ul className="flex gap-6 text-3xl">
                <li className={`${isActive(pathName, 'servicos')}`}>
                    <Link href={`/servicos`}
                        className="hover:text-yellow-300">Serviços</Link>
                </li>
                <li className={`${isActive(pathName, 'sobre')}`}>
                    <Link href={`/sobre`}
                        className="hover:text-yellow-300">Sobre mim</Link>
                </li>
                <li className={` text-right`}>
                    <Link href={`/contato`} className="hover:text-yellow-300">
                        <span className={`${isActive(pathName, 'contato')}`}>Contato</span>
                    </Link>
                    <br />
                    <span className="text-xs text-zinc-400 font-extralight flex gap-1 items-center">
                        <FaWhatsapp />
                        (+55 11 9999 9999)
                    </span>
                </li>
            </ul>
        </nav>
    );
}