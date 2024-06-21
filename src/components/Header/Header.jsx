import Banner from "./Banner";
import Navbar from "./Navbar";



const Header = () => {
    return (
        <div className="container mx-auto px-[130px] font-lexend mt-12 mb-24">
            <Navbar></Navbar>
            <Banner></Banner>
        </div>
    );
};

export default Header;