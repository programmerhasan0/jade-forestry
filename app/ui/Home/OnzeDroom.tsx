import Image from "next/image";
import BulletList from "@/app/ui/components/BulletList";

const OnzeDroom: React.FC = () => {
    const bulletList: string[] = [
        "Slimme groene landbouw",
        "Een groen netwerk door heel Europa",
        "Harmonie tussen natuur en landbouw",
        "Vrij bewegende wilde dieren",
        "Een aaneengesloten weelderig bladerdak",
        "Veilige groene havens",
    ];

    return (
        <div
            className="wrapper font-tiro-bangla"
            style={{ backgroundImage: 'url("/onze-bg.png")' }}
        >
            <div className="container mx-auto py-14 md:flex justify-center items-center">
                <div className="flex flex-col md:flex-row">
                    <div className="left">
                        <div className="text-3xl">Onze droom</div>
                        <div className="text-gray-600">
                            <div className="max-w-[559px] ">
                                We streven ernaar landbouw op een slimme manier
                                te vergroenen, zonder in te boeten op productie.
                                Stel je een groene dooradering voor die Europa
                                doorkruist, waar natuur en landbouw harmonieus
                                samenkomen. Een plek waar een hert van Polen
                                naar Portugal kan lopen, onder een weelderig
                                bladerdak, door bossen en velden, zonder ooit
                                het gevoel te hebben de veilige groene haven van
                                de natuur te verlaten.
                            </div>
                            <div className="checklist mt-10">
                                {bulletList.map((bullet, idx) => (
                                    <BulletList key={idx} bullet={bullet} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="right md:ml-7">
                        <Image
                            src="/onze-image.png"
                            width={532}
                            height={600}
                            alt="Onze Image"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OnzeDroom;
