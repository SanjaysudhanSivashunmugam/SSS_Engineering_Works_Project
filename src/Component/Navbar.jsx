import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

function Navbar() {
    const [mobileDrawer, setMobileDrawer] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Toggle the mobile navigation drawer
    const toggleNavbar = () => {
        setMobileDrawer(!mobileDrawer);
    };

    // Add scroll listener to detect page scrolling
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 ${
                isScrolled ? "bg-white shadow-lg text-black" : "bg-transparent text-white"
            } transition-all duration-300 backdrop-blur-sm`}
        >
            <div className="container mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
                {/* Logo */}
                <h1 className="lg:text-3xl text-xl font-semibold lg:font-bold">
                    SSS Engineering Works
                </h1>

                {/* Desktop Navigation */}
                <ul className="lg:flex space-x-8 lg:space-x-12 hidden">
                    <li className="cursor-pointer">
                        <Link to="hm" smooth={true} offset={-120} duration={500}>
                            Home
                        </Link>
                    </li>
                    <li className="cursor-pointer">
                        <Link to="ab" smooth={true} offset={-70} duration={500}>
                            About Us
                        </Link>
                    </li>
                    <li className="cursor-pointer">
                        <Link to="pr" smooth={true} offset={-50} duration={500}>
                            Products
                        </Link>
                    </li>
                    <li className="cursor-pointer">
                        <Link to="cu" smooth={true} offset={-70} duration={500}>
                            Contact Us
                        </Link>
                    </li>
                </ul>

                {/* Get Quotes Button */}
                <button className="hidden lg:flex px-4 py-2 bg-[#FFC107] text-black font-semibold rounded hover:bg-[#FFD54F] transition">
                    Get Quotes
                </button>

                {/* Mobile Navigation Toggle */}
                <div className="lg:hidden">
                    <button onClick={toggleNavbar}>
                        {mobileDrawer ? <X color="#000000" /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Drawer */}
            {mobileDrawer && (
                <div className="fixed top-0 right-0 z-20 w-full bg-white text-black">
                    {/* Header inside drawer */}
                    <div className="flex justify-between items-center px-6 py-4 border-b">
                        <h1 className="text-xl font-semibold">SSS Engineering Works</h1>
                        <button onClick={toggleNavbar}>
                            <X size={24} />
                        </button>
                    </div>

                    {/* Links */}
                    <ul className="flex flex-col items-center justify-center space-y-6 mt-8 pb-6">
                        <li className="cursor-pointer">
                            <Link
                                to="hm"
                                smooth={true}
                                offset={-120}
                                duration={500}
                                onClick={() => setMobileDrawer(false)}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="cursor-pointer">
                            <Link
                                to="ab"
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick={() => setMobileDrawer(false)}
                            >
                                About Us
                            </Link>
                        </li>
                        <li className="cursor-pointer">
                            <Link
                                to="pr"
                                smooth={true}
                                offset={-50}
                                duration={500}
                                onClick={() => setMobileDrawer(false)}
                            >
                                Products
                            </Link>
                        </li>
                        <li className="cursor-pointer">
                            <Link
                                to="cu"
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick={() => setMobileDrawer(false)}
                            >
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                    <div className="flex justify-center items-center pb-6">
                    <button className="px-4 py-2 bg-[#FFC107] transition text-black font-semibold rounded hover:bg-[#FFD54F] ">
                    Get Quotes
                    </button>
                    </div>
                    
                </div>
            )}
        </nav>
    );
}

export default Navbar;
