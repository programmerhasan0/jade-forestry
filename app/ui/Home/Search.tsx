import { IoSearchCircleSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { BsHandbagFill } from "react-icons/bs";

const Search: React.FC = () => {
    return (
        <div className="sidebar-wrapper  bg-[#F0ECE3]">
            <div className="md:container mx-auto md:min-h-[112px] min-h-[50px] flex items-center justify-around">
                <div></div>
                <div className="bg-white hidden p-2 md:flex flex-row items-center rounded-3xl">
                    <input
                        type="text"
                        className=" outline-none rounded-3xl px-1 min-w-96"
                        placeholder="Zoeken"
                    />

                    <button className="text-white">
                        <IoSearchCircleSharp className="text-5xl text-dark-green bg-white border-dark-green border-2 rounded-full" />
                    </button>
                </div>
                <div className="text-green-primary flex">
                    <div className="country mr-4">
                        <select className="bg-[#F0ECE3] outline-none">
                            <option value="netherlands">Netherlands</option>
                            <option value="netherlands">England</option>
                        </select>
                    </div>
                    <div className="profile flex mr-4">
                        <CgProfile className="text-xl mr-1" />
                        <span>Inloggen</span>
                    </div>
                    <div className="cart text-xl">
                        <BsHandbagFill />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
