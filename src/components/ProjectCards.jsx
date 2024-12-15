import React from "react";
import { useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'

function ProjectCards({title, content, url, githubLinks}){
    
    useEffect(()=>{
        AOS.init()
    },[]);

    return (
        <>
        <div id="ProjectCards">
            <div>
                <div class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-slate-400" data-aos="zoom-in" data-aos-duration="1000">
                <a href="#">
                    <img class="rounded-t-lg" src={url} alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{content}</p>       
                </div>
            </div>
        </div>
        </div>
        </>
    );
};

export default ProjectCards