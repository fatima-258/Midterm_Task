import React from "react";
import Image from "next/image";
import HeroImg from "../../public/assets/HeroImg.svg"

const Hero = () => {

    
    return(
        <div className="bg-[#F5F7FA]">
            <div className="container mx-auto flex flex-row justify-around  items-center mt-[24px] gap-8">
            <div className="gap-8">
                <p className="font-medium text-[44px] font-inter text-[#4D4D4D]">Lessons and insights</p>
                <span className="font-medium text-[44px] font-inter text-[#4CAF4F]">from 8 years</span>
                <p className="font-[400px] text-[11px] font-inter text-[#717171]">Where to grow your business as a photographer: site or social media?</p>
                <br></br>
                <button className="bg-[#4CAF4F] rounded-[2px] gap-[5px] py-[9px] px-[22px] flex flex-row items-center text-white">
                    Register
                    </button>
            </div>
            <div>
                <Image src={HeroImg} alt="heroImg" />
            </div>
        </div>
        </div>
        
    )
}

export default Hero;