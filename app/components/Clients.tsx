import React from "react";
import Image from "next/image";
import Client1 from "../../public/assets/Client1.svg"
import Client2 from "../../public/assets/Client2.svg"
import Client3 from "../../public/assets/Client3.svg"
import Client4 from "../../public/assets/Client4.svg"
import Client5 from "../../public/assets/Cleint5.svg"
import Client6 from "../../public/assets/Client6.svg"
import Client7 from "../../public/assets/Client7.svg"

const Clients = () => {

    
    return(
        <div className="container ms-auto mt-[24px]">
            <div className="flex flex-col justify-center items-center">
                <p className="text-[#4D4D4D] font-medium text-[25px] items-center justify-center font-inter">Our Clients</p>
                <p className="text-[#717171] font-[400px] text-[11px] items-center justify-center font-inter">We have been working with some Fortune 500+ clients</p>
            </div>
            <br></br>
            <div className="container flex flex-row justify-around">
                <Image src={Client1} alt="Client logo" />
                <Image src={Client2} alt="Client logo" />
                <Image src={Client3} alt="Client logo" />
                <Image src={Client4} alt="Client logo" />
                <Image src={Client5} alt="Client logo" />
                <Image src={Client6} alt="Client logo" />
                <Image src={Client7} alt="Client logo" />
            </div>
        </div>
        
    )
}

export default Clients;