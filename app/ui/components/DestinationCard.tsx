import { Destination } from "@/app/definitions/home";
import Image from "next/image";
import BulletList from "@/app/ui/components/BulletList";


const DestinationCard: React.FC<Destination> = ({
    imageUrl,
    location,
    title,
    description,
    facilities,
}) => {
    return (
        <div className="border p-2 rounded-md mb-3">
            <div>
                <Image
                    src={imageUrl}
                    width={380}
                    height={216}
                    alt="Image"
                    className="w-auto h-auto"
                />
            </div>
            <div className="mt-3">
                <small className="text-sm text-green-primary">{location}</small>
                <h1 className="text-2xl">{title}</h1>
                <p className="text-gray-600 max-w-80 mb-3">{description}</p>

                <hr />
            </div>
            <div className="mt-8">
                {facilities.map((facility, idx) => (
                    <BulletList key={idx} bullet={facility} />
                ))}
            </div>
        </div>
    );
};

export default DestinationCard;
