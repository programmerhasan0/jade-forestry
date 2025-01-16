import Image from "next/image";
import Link from "next/link";
import { NavLinks } from "@/app/definitions/home";
import { RxHamburgerMenu } from "react-icons/rx";

const navlinks: NavLinks[] = [
    { href: "/", label: "Home" },
    { href: "/over-ons", label: "Over Ons" },
    { href: "/agroforestry", label: "Agroforestry" },
    { href: "/de-kwekerij", label: "De Kwekerij" },
    { href: "/projecten-fotsos", label: "Projecten & Fotso’s" },
    { href: "/contact", label: "Contact" },
];

const Navbar: React.FC = () => {
    return (
        <div className="nav-wrapper bg-dark-green">
            <div className="container mx-auto flex items-center justify-between">
                <div className="logo">
                    <Image
                        src="/logo.svg"
                        alt="Logo"
                        width={200}
                        height={200}
                        sizes="100vw"
                        className="w-auto h-auto md:-mt-[5.5rem] -mt-6"
                    />
                </div>
                <div className="navItem text-white">
                    <ul className="md:flex hidden">
                        {navlinks.map((link, idx) => (
                            <li
                                key={idx}
                                className="mr-4 transition hover:text-green-primary"
                            >
                                <Link href={link.href}>{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                    <RxHamburgerMenu className="mr-5 block md:hidden text-3xl transition hover:cursor-pointer hover:text-green-primary" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
