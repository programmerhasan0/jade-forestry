import { Destination } from "@/app/definitions/home";
import SideText from "@/app/ui/components/SideText";
import DestinationCard from "@/app/ui/components/DestinationCard";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Destinations: React.FC = () => {
    const destinations: Destination[] = [
        {
            imageUrl: "/dest1.png",
            location: "Veluwe, Nederland",
            title: "Herbebossing Veluwe",
            description:
                "Dit project richt zich op het herstellen van gedegradeerde bossen in de Veluwe.....",
            facilities: [
                "2.000.000 bomen geplant",
                "10 bedreigde diersoorten beschermd",
                "150 lokale banen gecreëerd",
            ],
        },
        {
            imageUrl: "/dest2.png",
            location: "Groningen, Nederland",
            title: "Herbebossing Veluwe",
            description:
                "Dit project richt zich op het herstellen van gedegradeerde bossen in de Veluwe.....",
            facilities: [
                "2.000.000 bomen geplant",
                "10 bedreigde diersoorten beschermd",
                "150 lokale banen gecreëerd",
            ],
        },
        {
            imageUrl: "/dest3.png",
            location: "Rotterdam, Nederland",
            title: "Herbebossing Veluwe",
            description:
                "Dit project richt zich op het herstellen van gedegradeerde bossen in de Veluwe.....",
            facilities: [
                "2.000.000 bomen geplant",
                "10 bedreigde diersoorten beschermd",
                "150 lokale banen gecreëerd",
            ],
        },
    ];

    return (
        <div className="container mx-auto font-tiro-bangla pt-28">
            <div className="top">
                {" "}
                <div className="text-3xl max-w-[500px]">
                    Samen werken aan een groenere wereld: bekijk onze projecten
                </div>
                <div className="md:flex">
                    <div className="left max-w-[680px]">
                        Bossen zijn een van de meest effectieve oplossingen om
                        de effecten van klimaatverandering aan te pakken. Ze
                        zijn ook een krachtige kracht om mensen uit de armoede
                        te halen, biodiversiteit te behouden en verwoestijning
                        terug te dringen.
                    </div>
                    <div className="mt-6 lg:ml-20">
                        <SideText width="480px" />
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="md:flex justify-around mt-8">
                    {destinations.map(
                        (
                            {
                                imageUrl,
                                title,
                                description,
                                facilities,
                                location,
                            },
                            idx
                        ) => (
                            <DestinationCard
                                key={idx}
                                imageUrl={imageUrl}
                                title={title}
                                description={description}
                                facilities={facilities}
                                location={location}
                            />
                        )
                    )}
                </div>
                <div className="mb-6 flex justify-center">
                    <Link href="/">
                        <div
                            className={`btn-wrapper bg-green-primary text-white hover:bg-green-950 transition flex items-center w-56 rounded-sm mt-3`}
                        >
                            <div className="text-center inline p-3 border-r">
                                Dekijk onze projecten
                            </div>
                            <div className="text-center py-2 flex justify-center items-center ml-6">
                                <MdOutlineKeyboardArrowRight />
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Destinations;
