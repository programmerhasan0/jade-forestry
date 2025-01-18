import Image from "next/image";
import Button from "../components/Button";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import Link from "next/link";

const WhatWeDone: React.FC = () => {
    return (
        <div className="container mx-auto font-tiro-bangla my-24">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                <div className="left">
                    <div className="pre-title text-green-primary text-2xl mb-4">
                        WAT WE DOEN
                    </div>
                    <div className="title text-3xl mb-4">
                        <p>Passie voor duurzame</p>
                        <p>landbouw en natuur</p>
                    </div>
                    <div className="image">
                        <Image
                            src="/done1.png"
                            height={580}
                            width={580}
                            alt="done 1"
                        />
                    </div>
                </div>
                <div className="right grid mt-4 md:mt-28">
                    <div className="max-w-[580px]">
                        Met meer dan 15 jaar ervaring in de sector hebben we bij
                        Jade Reforestry een hands-on aanpak ontwikkeld voor
                        duurzame landbouw en natuurbeheer. We begrijpen de
                        ecologische uitdagingen en bieden oplossingen die zowel
                        de natuur als de productiviteit ten goede komen. We
                        helpen jou aan slimme beplantingsplannen en zorgen dat
                        de juiste bomen op de juiste plek staan, zodat je kunt
                        profiteren van verbeterde bodemkwaliteit, verhoogde
                        biodiversiteit en hogere opbrengsten.
                    </div>
                    <div className="mb-6">
                        <Link href="/">
                            <div
                                className={`btn-wrapper bg-green-primary text-white hover:bg-green-950 transition flex items-center w-56 rounded-sm mt-3`}
                            >
                                <div className="text-center inline pl-3 pr-6 py-2 border-r">
                                    Meet over ons
                                </div>
                                <div className="text-center py-2 flex justify-center items-center ml-6">
                                    <MdOutlineKeyboardArrowRight />
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Image
                            src="/done2.png"
                            height={580}
                            width={580}
                            alt="done 1"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatWeDone;
