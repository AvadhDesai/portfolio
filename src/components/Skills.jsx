import React from "react";
import { useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'

function Skills(){

    useEffect(()=>{
        AOS.init()
    },[]);

    return (
        <>
            <div id="Skills">
                <div>
                    <div>
                        <h1 data-aos="fade-right" className="text-white text-3xl ml-20 font-semibold">Skills</h1>
                        <hr data-aos="fade-right" className="w-80 h-1 ml-16 my-6"></hr>
                    </div>
                    <div className="px-16">  
                        <button class="cursor-default bg-transparent hover:bg-slate-500 text-white font-semibold hover:text-black py-2.5 px-16 ml-16 border border-slate-500 hover:border-transparent rounded" data-aos="fade-right">Tableau</button>
                        <button class="cursor-default bg-transparent hover:bg-slate-500 text-white font-semibold hover:text-black py-2.5 px-16 ml-16 border border-slate-500 hover:border-transparent rounded" data-aos="fade-right">Microsoft 365 Suite</button>
                        <button class="cursor-default bg-transparent hover:bg-slate-500 text-white font-semibold hover:text-black py-2.5 px-16 ml-16 border border-slate-500 hover:border-transparent rounded" data-aos="fade-right">SQL</button>
                        <button class="cursor-default bg-transparent hover:bg-slate-500 text-white font-semibold hover:text-black py-2.5 px-16 ml-16 border border-slate-500 hover:border-transparent rounded" data-aos="fade-right">Adobe</button>                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default Skills;