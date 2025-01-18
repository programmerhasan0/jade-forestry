import Search from "@/app/ui/Home/Search";
import Navbar from "@/app/ui/Home/Navbar";
import Hero from "@/app/ui/Home/Hero";
import Forests from "@/app/ui/Home/Forests";
import WhatWeDone from "@/app/ui/Home/WhatWeDone";
import OnzeDroom from "@/app/ui/Home/OnzeDroom";
import Destinations from "@/app/ui/Home/Destinations";
import Klantverhalen from "@/app/ui/Home/Klantverhalen";
import ContactUs from "@/app/ui/Home/ContactUs";
import Footer from "@/app/ui/Home/Footer";

const Page: React.FC = () => {
    return (
        <div className="text2xl">
            <Search />
            <Navbar />
            <Hero />
            <Forests />
            <WhatWeDone />
            <OnzeDroom />
            <Destinations />
            <Klantverhalen />
            <ContactUs />
            <Footer />
        </div>
    );
};

export default Page;
