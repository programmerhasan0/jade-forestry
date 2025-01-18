import { Klantverhalen as TypeKlantverhalen } from "@/app/definitions/home";
import KlantverhalenCard from "@/app/ui/components/KlantverhalenCard";

const Klantverhalen: React.FC = () => {
    const klantverhalenData: TypeKlantverhalen[] = [
        {
            title: "Boerderij De Groene Hoop",
            description:
                "De gemeente Natuurstad wilde haar stedelijke omgeving vergroenen en biodiversiteit bevorderen. Met onze hulp hebben ze parken en.....",
            imageUrl: "/klantverhalen1.png",
        },
        {
            title: "Gemeente Natuurstad",
            description:
                "Boerderij De Groene Hoop had te kampen met afnemende oogsten door bodemerosie en extreme weersomstandigheden. Door samen.....",
            imageUrl: "/klantverhalen2.png",
        },
        {
            title: "Stichting Groen Leven",
            description:
                "De gemeente Natuurstad wilde haar stedelijke omgeving vergroenen en biodiversiteit bevorderen. Met onze hulp hebben ze parken en verlaten.....",
            imageUrl: "/klantverhalen3.png",
        },
    ];

    return (
        <div className="container mx-auto font-tiro-bangla my-24">
            <div className="title flex justify-center my-10">
                <h1 className="text-5xl flex-none">Klantverhalen</h1>
            </div>
            <div className="flex flex-col justify-center items-center md:flex-row md:justify-around ">
                {klantverhalenData.map(
                    ({ title, description, imageUrl }, idx) => (
                        <KlantverhalenCard
                            title={title}
                            description={description}
                            imageUrl={imageUrl}
                            key={idx}
                        />
                    )
                )}
            </div>
        </div>
    );
};

export default Klantverhalen;
