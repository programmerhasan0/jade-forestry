import Button from "@/app/ui/components/Button";

const Hero: React.FC = () => {
    return (
        <div className="wrapper bg-hero-bg bg-no-repeat bg-cover bg-center text-white ">
            <div className="container mx-auto">
                <div className="md:flex items-start py-20 text-center md:text-justify md:py-72 justify-between">
                    <div className="title font-tiro-bangla">
                        <h1 className="text-3xl md:text-7xl">
                            Jade Reforestry
                        </h1>
                        <div className="sub-title text-xl md:text-4xl">
                            <p>Vergroening in harmonie met natuur </p>
                            <p>en landbouw</p>
                        </div>
                    </div>
                    <div></div>
                    <div className="description">
                        <div className="md:text-2xl font-tiro-bangla">
                            <p>
                                Bij Jade Reforestry geloven we in een toekomst
                                waar
                            </p>
                            <p>
                                landbouw en natuur samen floreren. Met onze
                                praktische
                            </p>
                            <p>
                                groene oplossingen maken we dit werkelijkheid.
                            </p>
                        </div>
                        <Button btnText="Doe met ons mee" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
