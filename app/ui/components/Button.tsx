import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

interface Props {
    btnText: string;
}

const Button: React.FC<Props> = ({ btnText }) => {
    return (
        <div className="btn flex justify-center md:block">
            <Link href="/">
                <div
                    className={`btn-wrapper bg-white text-black hover:bg-green-primary hover:text-white transition flex items-center w-56 rounded-sm mt-3`}
                >
                    {" "}
                    <div className="text-center inline pl-3 pr-6 py-2 border-r">
                        {btnText}
                    </div>
                    <div className="text-center py-2 flex justify-center items-center ml-6">
                        <MdOutlineKeyboardArrowRight />
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Button;
