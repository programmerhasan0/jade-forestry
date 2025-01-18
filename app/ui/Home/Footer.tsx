import Image from "next/image";
const Footer: React.FC = () => {
    return (
        <footer className="bg-[#788d3f] text-white py-8 font-tiro-bangla">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Quote Section */}
                <div>
                    <Image
                        src="/logo.svg"
                        height={200}
                        width={200}
                        alt="logo"
                        className="mb-4"
                    />
                    <p className="italic">
                        "De beste tijd om een boom te planten was 20 jaar
                        geleden. De op één na beste tijd is nu."
                    </p>
                </div>

                {/* Links Section */}
                <div>
                    <h3 className="font-semibold mb-4">Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="hover:underline">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Over Ons
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Agroforestry
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Projecten & Foto’s
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Socials Section */}
                <div>
                    <h3 className="font-semibold mb-4">Socials</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="hover:underline">
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Twitter
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                YouTube
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div>
                    <h3 className="font-semibold mb-4">NEEM CONTACT OP</h3>
                    <ul className="space-y-2">
                        <li>Boxtelseweg 27B, 5481VE Schijndel</li>
                        <li>
                            <a
                                href="mailto:info@jadereforestry.com"
                                className="hover:underline"
                            >
                                info@jadereforestry.com
                            </a>
                        </li>
                        <li>+31 6 128 464 80</li>
                        <li>BTW-ID NL003147799B90</li>
                        <li>KVK 77106903</li>
                        <li>IBAN NL11 RABO 0352 2704 89</li>
                    </ul>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-white/20 mt-8 pt-4 text-center">
                <p>
                    © Jade Reforestry | 2024 |{" "}
                    <a
                        href="https://jadereforestry.nl"
                        className="hover:underline"
                    >
                        jadereforestry.nl
                    </a>{" "}
                    | Web Design by Online Marketing Bakery
                </p>
            </div>
        </footer>
    );
};

export default Footer;
