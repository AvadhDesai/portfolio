import React from "react";
import { useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'
import ProjectCards from "./ProjectCards";

function Projects(){
    
    useEffect(()=>{
        AOS.init()
      },[]);
    
    return (
        <>
        <div id="Projects">
            <div>
                <div>
                    <h1 data-aos="fade-right" className="text-white text-3xl ml-20 font-semibold mt-20">Projects</h1>
                    <hr data-aos="fade-right" className="w-80 h-1 ml-16 my-6"></hr>
                </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-16">
                <div className="grid gap-4">
                    <div>
                        <ProjectCards title="Data Visualization Project Real Estate - Tableau"
                        content="Developed interactive dashboards using Tableau to visualize complex real estate data sets, enabling stakeholders to gain
actionable insights, track key performance indicators, and make data-driven decisions efficiently."
                        url=""
                        githubLinks="">
                        </ProjectCards>
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <ProjectCards title="ASU Supply Chain Management Association - 11th Annual Starbucks Case Competition"
                        content="Achieved 3rd place out of 17 teams by collaborating with team members to develop a comprehensive supply chain and business model, addressing the risks and challenges of launching a new product, while gaining expertise in data collection and visualization techniques."
                        url=""
                        githubLinks="">
                        </ProjectCards>
                    </div>
                </div>
                <div className="grid gap-4">
                     <div>
                        <ProjectCards title="Inventory Efficiency Project - Edson Grace Center"
                        content="Implemented an inventory organization system that optimized stockroom accessibility and reduced search time from hours to minutes by utilizing innovative Planogram and storage solutions, while introducing inventory tracking mechanisms to monitor stock levels, leading to proactive replenishment and minimizing overstocking and waste."
                        url=""
                        githubLinks="">
                        </ProjectCards>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    );
};

export default Projects