import React from "react";
import Image from "next/image";
import Icon1 from "../../public/assets/Icon1.svg"
import Icon2 from "../../public/assets/Icon2.svg"
import Icon3 from "../../public/assets/Icon3.svg"

const Navbar = () => {

    const navLinks = [
        {name: "Home"},
        {name: "Feature"},
        {name: "Community"},
        {name: "Blog"},
        {name: "Pricing"},
    ]
    return(
        <div className="container mx-auto mt-[44px]">
            <div className="flex flex-col items-center justify-center">
                <p className="font-inter font-medium text-[25px] text-[#4D4D4D]">Manage your entire community in a single system</p>
                <p className="font-inter font-[400px] text-[11px] text-[#717171]">Who is Nextcent suitable for?
</p>
            </div><br></br>
            <div className="grid grid-cols-3 items-center justify-center gap-32">
                <div className="flex flex-col justify-center items-center col-span-1">
                    <Image src={Icon1} alt="icon" />
                    <p className="font-inter font-medium text-[19px] text-[#4D4D4D]  text-center">Membership Organisations</p>
                    <p className="font-inter font-[400px] text-[9px] text-[#717171] text-center">Our membership management software provides full automation of membership renewals and payments</p>
                </div>
                <div className="flex flex-col justify-center items-center col-span-1">
                    <Image src={Icon2} alt="icon" />
                    <p className="font-inter font-medium text-[19px] text-[#4D4D4D] text-center">National Associations</p>
                    <p className="font-inter font-[400px] text-[9px] text-[#717171] text-center">Our membership management software provides full automation of membership renewals and payments</p>
                </div>
                <div className="flex flex-col justify-center items-center col-span-1">
                    <Image src={Icon3} alt="icon" />
                    <p className="font-inter font-medium text-[19px] text-[#4D4D4D] text-center">Clubs And Groups</p>
                    <p className="font-inter font-[400px] text-[9px] text-[#717171] text-center">Our membership management software provides full automation of membership renewals and payments</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar;