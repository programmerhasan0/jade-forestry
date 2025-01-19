import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Form: React.FC = () => {
    return (
        <form onSubmit={e => e.preventDefault()} className="mt-8">
            <div className="input-col-wrapper md:flex">
                <div className="firstName">
                    <label htmlFor="firstName">First Name</label>
                    <div className="input">
                        <input
                            type="text"
                            name="firstName"
                            id=""
                            className="outline-none border rounded-md py-2 px-3 mr-2 w-full md:w-auto"
                        />
                    </div>
                </div>
                <div className="lastName">
                    <label htmlFor="lastName">last Name</label>
                    <div className="input">
                        <input
                            type="text"
                            name="lastName"
                            id=""
                            className="outline-none border rounded-md py-2 px-3 mr-2 w-full md:w-auto"
                        />
                    </div>
                </div>
            </div>
            <div className="input-col-wrapper md:flex">
                <div className="email">
                    <label htmlFor="email">Email</label>
                    <div className="input">
                        <input
                            type="email"
                            name="email"
                            id=""
                            className="outline-none border rounded-md py-2 px-3 mr-2 w-full md:w-auto"
                        />
                    </div>
                </div>
                <div className="phone">
                    <label htmlFor="phone">Phone</label>
                    <div className="input">
                        <input
                            type="text"
                            name="phone"
                            id=""
                            className="outline-none border rounded-md py-2 px-3 mr-2 w-full md:w-auto"
                        />
                    </div>
                </div>
            </div>
            <div className="input-col-wrapper">
                <div className="subject">
                    <label htmlFor="subject">Subject</label>
                    <div className="input">
                        <input
                            type="text"
                            name="subject"
                            id=""
                            className="outline-none border rounded-md py-2 px-3 mr-2 w-full"
                        />
                    </div>
                </div>
            </div>
            <div className="input-col-wrapper">
                <div className="subject">
                    <label htmlFor="subject">Message</label>
                    <div className="input">
                        <textarea
                            rows={5}
                            className="outline-none border rounded-md py-2 px-3 mr-2 w-full"
                        />
                    </div>
                </div>
            </div>
            <Link href="/">
                <div
                    className={`btn-wrapper bg-green-primary text-white hover:bg-green-950 transition flex items-center w-56 rounded-sm mt-3`}
                >
                    <div className="text-center inline py-3 px-10 border-r">
                        Verzenden
                    </div>
                    <div className="text-center py-2 flex justify-center items-center ">
                        <MdOutlineKeyboardArrowRight />
                    </div>
                </div>
            </Link>
        </form>
    );
};

export default Form;
