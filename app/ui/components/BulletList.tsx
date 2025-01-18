import { TbArrowsRight } from "react-icons/tb";

const BulletList: React.FC<{ bullet: string }> = ({ bullet }) => {
    return (
        <div className="flex items-center mb-5">
            <span className="icon text-green-primary mr-4">
                <TbArrowsRight />
            </span>
            <span>{bullet}</span>
        </div>
    );
};

export default BulletList;
