import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { TbMail } from "react-icons/tb";
import { useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'

function Contact(){

    useEffect(()=>{
        AOS.init()
    },[]);

    return (
        <>
            <div id="Contact">
            <div>
                <div data-aos="fade-right">
                    <h1 className="text-white text-3xl ml-20 font-semibold mt-20">Contact</h1>
                    <hr className="w-80 h-1 ml-16 my-6"></hr>
                </div>
                <div className="flex mt-6 gap-2 ml-16">
                        <div className="flex items-center justify-center">
                            <div className="flex space-x-4">
                                <a href="mailto:adesai32@asu.edu" target={"_blank"} className="text-slate-400 hover:text-slate-500 rounded-full p-2">
                                    <TbMail className="text-[36px]"></TbMail>
                                </a>
                                <a href="https://www.linkedin.com/in/adesai32/" target={"_blank"} className="text-slate-400 hover:text-slate-500 rounded-full p-2">
                                    <FaLinkedinIn className="text-[36px]"></FaLinkedinIn>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact