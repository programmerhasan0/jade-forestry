import { Klantverhalen } from "@/app/definitions/home";

const KlantverhalenCard: React.FC<Klantverhalen> = ({
    title,
    imageUrl,
    description,
}) => {
    return (
        <div
            className={`rounded-md h-[388px] w-[380px]  bg-no-repeat flex items-end text-white mb-4`}
            style={{
                position: "relative",
                backgroundImage: `url('${imageUrl}'), linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%)`,
                backgroundSize: "cover",
                backgroundBlendMode: "overlay",
                backgroundPosition: "center",
            }}
        >
            <div className="m-3 border-l-4 pl-2 border-green-primary">
                <p className="title text-2xl">{title}</p>
                <p className="description">{description}</p>
            </div>
        </div>
    );
};

export default KlantverhalenCard;
