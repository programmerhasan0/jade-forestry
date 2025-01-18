"use client";
import Image from "next/image";
import Form from "@/app/ui/components/Form";

const ContactUs: React.FC = () => {
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
                    <div className="left md:mt-8">
                        <div className="title text-4xl">
                            Samen maken we het verschil
                        </div>
                        <p className="max-w-[559px] text-gray-600 leading-8">
                            Wij geloven dat elke stap richting een groenere
                            toekomst telt. Neem contact met ons op om te
                            ontdekken hoe we jou kunnen helpen te vergroenen en
                            versterken. Samen maken we het verschil.
                        </p>
                        <div className="image">
                            {" "}
                            <Image
                                src="/contact.png"
                                width={532}
                                height={600}
                                alt="Onze Image"
                            />
                        </div>
                    </div>
                    <div className="right md:ml-7 bg-white text-gray-600 p-6 rounded-md">
                        <h1 className="text-2xl max-w-[331px]">
                            Natuurlijk horen we graag van je. Laten we contact
                            opnemen.
                        </h1>
                        <div className="form-wrapper">
                            <Form />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
