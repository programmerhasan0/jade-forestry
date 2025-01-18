import { IoIosArrowDown } from "react-icons/io";
import { ForestCard } from "@/app/definitions/home";
import Card from "@/app/ui/components/Card";

const Forests: React.FC = () => {
    const forestData: ForestCard[] = [
        {
            title: "Agroforestry",
            description:
                "We integreren bomen en gewassen voor een duurzamer landbouwsysteem. Dit verbetert de bodemkwaliteit, verhoogt de biodiversiteit en zorgt voor een gezondere oogst.",
            href: "/agroforestry",
            backgroundImage: "/forest-1.png",
            hrefText: "Meer over Agroforestry",
        },
        {
            title: "Kwekerij",
            description:
                "Onze kwekerij biedt een ruim assortiment aan bomen en planten, zorgvuldig geselecteerd voor maximale groei en duurzaamheid. Bezoek onze shop voor advies en aankoop van de beste soorten.",
            href: "/kwekerij",
            backgroundImage: "/forest-2.png",
            hrefText: "Meer over ons Assortiment",
        },
        {
            title: "Boomverzorging",
            description:
                "Boomverzorgers zorgen ervoor dat jouw bomen gezond en sterk blijven. Van aanplanting tot onderhoud en snoeien tot vellen. Wij staan klaar met deskundig advies en service.",
            href: "/boomverzorging",
            backgroundImage: "/forest-3.png",
            hrefText: "Meer over Boomverzorging",
        },
    ];

    return (
        <div className="container mx-auto md:-mt-28">
            <div className="text-2xl font-tiro-bangla text-center mt-2 md:text-white">
                <h1 className="title">Praktische groene oplossingen</h1>
                <div className="flex justify-center mt-1 mb-2 text-gray-500">
                    <IoIosArrowDown />
                </div>
            </div>
            <div className="cards flex flex-col items-center lg:flex-row justify-around">
                {forestData.map((forestData, idx) => (
                    <Card
                        key={idx}
                        title={forestData.title}
                        description={forestData.description}
                        href={forestData.href}
                        backgroundImage={forestData.backgroundImage}
                        hrefText={forestData.hrefText}
                    />
                ))}
            </div>
        </div>
    );
};

export default Forests;
