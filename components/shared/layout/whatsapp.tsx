import React from 'react'
import img from "@/public/icons/social/whatsapp.svg"
import Image from 'next/image'

interface WhatsappProps {
    mobileNumber: string;
}

function Whatsapp({ mobileNumber }: WhatsappProps) {
    return (
        <a className='z-50 group max-w-18 fixed bottom-12 left-12 cursor-pointer' href={`https://api.whatsapp.com/send/?phone=${mobileNumber}&text&type=phone_number&app_absent=0`}>
            <div className='rounded-full z-1 p-4 bg-[#25D366] hover:bg-[#075E54]'>
                <Image src={img} alt="whatsapp" />
            </div>
            <span className="fixed bottom-18 left-36 hidden group-hover:inline text-black ml-2 bg-white p-1 rounded-lg 
                after:content-[''] after:absolute after:left-[-16px] after:top-1/2 after:-translate-y-1/2 
                after:border-8 after:border-transparent after:border-r-white"
            >
                Chat on Whatsapp
            </span>
        </a>
    )
}

export default Whatsapp