import {Link} from "react-scroll";
import { MapPinHouse } from "lucide-react";

function Footer() {
    return (
        <div className="container mx-auto  border-t bg-[#172B4D] text-white">
            <div className="w-full px-8 lg:px-12 lg:flex py-10">
                <div className="lg:w-[40%] pb-8 lg:pb-0">
                    <h1 className="font-bold text-xl">SSS Engineering Works</h1>
                    <p>Explore a Wide Range of High-Quality Engineering Products</p>
                </div>
                <div className="lg:w-[60%] lg:flex justify-between space-y-14 lg:space-y-0">
                    <div className="lg:w-[20%]  gap-2">
                      <MapPinHouse size={32}/>
                      <p>Nandhavanappatty, Dindigul - 624004</p>
                    </div>
                    <div className="lg:w-[20%]">
                        <h1 className="font-bold text-xl pb-3">Links</h1>
                        <ul className="space-y-3">
                            <li className="cursor-pointer hover:text-[#FFC107]"><Link to="hm" smooth={true} offset={-120} duration={500}>Home</Link></li>
                            <li className="cursor-pointer hover:text-[#FFC107]"><Link to="ab" smooth={true} offset={-70} duration={500}>About Us</Link></li>
                            <li className="cursor-pointer hover:text-[#FFC107]"><Link to="pr" smooth={true} offset={-50} duration={500}>Products</Link></li>
                            <li className="cursor-pointer hover:text-[#FFC107]"><Link to="cu" smooth={true} offset={-70} duration={500}>Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="w-[20%]">
                    <h1 className="font-bold text-xl pb-3">Social</h1>
                        <ul className="space-y-3">
                            <li className="cursor-pointer hover:text-[#FFC107]"><a href="">Facebook</a></li>
                            <li className="cursor-pointer hover:text-[#FFC107]"><a href="">Instagram</a></li>
                            <li className="cursor-pointer hover:text-[#FFC107]"><a href="">India Mart</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className="text-center border-t py-4 px-4 text-sm">
                    All Rights Reserved by SSS Engineering Works | Designed and Developed By <a href="https://www.linkedin.com/in/sanjaysudhan-sivashunmugam-a5a901255/" className="hover:underline text-[#FFC107]">Sanjaysudhan S</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;