import React from "react";
import Image from "next/image";
import Logo from "../../public/assets/Logo.svg"
import navarrow from "../../public/assets/navArrow.svg"

const Navbar = () => {

    const navLinks = [
        {name: "Home"},
        {name: "Feature"},
        {name: "Community"},
        {name: "Blog"},
        {name: "Pricing"},
    ]
    return(
        <div className="container mx-auto flex justify-between items-center mt-[24px]">
            <Image src={Logo} alt="logo" />
            <div className="flex flex-row items-center gap-[16px]">
                {navLinks.map((item, index)=>(
                    <div key={index} className="flex flex-row items-center gap-[16px]">
                        {item.name}
                    </div>
                ))}
                <button className="bg-[#4CAF4F] rounded-[2px] gap-[5px] py-[9px] px-[22px] flex flex-row items-center text-white">
                    Register Now
                    <Image src={navarrow} alt="arrow" />
                </button>
            </div>
        </div>
    )
}

export default Navbar;