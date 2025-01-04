import logo from './../assets/logo.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const titleStyle = "hover:underline text-[#136A62] font-medium text-xl xl:text-2xl";
    return (
        <div className="bg-gradient-to-r  from-[#E1EFF5] to-[#E1EFF5] text-[#218275] px-10">
            <nav className="flex justify-between items-center p-6">
                <div className="text-2xl font-bold flex items-center">
                    <img src={logo} alt="Tridala Logo" className="inline-block h-12 md:h-16 xl:h-28 mr-2" />
                </div>
                <div className="hidden md:flex space-x-8 xl:space-x-16 text-[#218275]">
                    <Link to="/" className={titleStyle}>Home</Link>
                    <Link to="/Products" className={titleStyle}>Products</Link>
                    <Link to="/Team" className={titleStyle}>Team</Link>
                    <Link to="/Purpose" className={titleStyle}>Purpose</Link>
                    <Link to="/HealthTips" className={titleStyle}>Health Tips</Link>
                </div>
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                        </svg>
                    </button>
                </div>
            </nav>
            {isOpen && (
                <div className="md:hidden flex flex-col items-center space-y-4 mt-4">
                    <Link to="/" className="hover:underline">Home</Link>
                    <Link to="/Products" className="hover:underline">Products</Link>
                    <Link to="/Team" className="hover:underline">Team</Link>
                    <Link to="/Purpose" className="hover:underline">Purpose</Link>
                    <Link to="/HealthTips" className="hover:underline">Health Tips</Link>
                </div>
            )}
        </div>
    );
};

export default Nav;
