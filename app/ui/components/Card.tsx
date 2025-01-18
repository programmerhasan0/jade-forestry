import { ForestCard } from "@/app/definitions/home";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Card: React.FC<ForestCard> = ({
    title,
    description,
    href,
    backgroundImage,
    hrefText,
}) => {
    return (
        <div className="bg-white border p-2 rounded-md max-w-96 flex flex-col items-center font-tiro-bangla mb-8">
            <div
                className="title w-[360px] h-[206px] bg-cover bg-no-repeat bg-center text-2xl flex items-center justify-center text-white rounded-md"
                style={{ backgroundImage: `url("${backgroundImage}")` }}
            >
                {title}
            </div>
            <div className="description text-justify text-gray-500 mt-4">
                {description}
            </div>
            <Link href={href} className="self-start mt-10">
                <button className="flex items-center gap-3 text-green-primary">
                    <span>{hrefText}</span>
                    <span>
                        <MdOutlineKeyboardArrowRight />
                    </span>
                </button>
            </Link>
        </div>
    );
};

export default Card;
