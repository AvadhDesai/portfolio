import React from "react";
import { useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'

function Experience() {
    
    useEffect(()=>{
        AOS.init()
    },[]);

    return (
        <>
            <div id="Experience">
                <div>
                    <div>
                        <h1 data-aos="fade-right" className="text-white text-3xl ml-20 font-semibold mt-20">
                            Experience
                        </h1>
                        <hr data-aos="fade-right" className="w-80 h-1 ml-16 my-6"></hr>
                        <ol className="ml-16 relative border-s border-gray-200 dark:border-gray-200">
                            <li className="mb-10 ms-6">
                                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                    <svg
                                        className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                    </svg>
                                </span>
                                <h3
                                    className="flex items-center mb-1 text-lg font-semibold text-gray-200 dark:text-white"
                                    data-aos="fade-right">
                                    Supply Chain Analyst, Bristol-Myers Squibb
                                </h3>
                                <time
                                    className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                                    data-aos="fade-right">
                                    September 2025 - Current
                                </time>
                                <ul className="space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                                    <li data-aos="fade-right">
                                        Evaluated demand and supply signals in SAP S/4HANA to uncover planning gaps, driving a 15% increase in forecast accuracy across assigned SKUs.
                                    </li>
                                    <li data-aos="fade-right">
                                        Designed Power BI reporting solutions for inventory and service KPIs, accelerating executive visibility and improving decision turnaround time by 25%.
                                    </li>
                                    <li data-aos="fade-right">
                                        Executed safety stock and capacity assessments to rebalance inventory positioning, resulting in a 12% decline in excess stock within scope.
                                    </li>
                                    <li data-aos="fade-right">
                                        Diagnosed supply risks through structured root cause investigations and FMEA methodologies, lowering disruption exposure by 15%.
                                    </li>
                                    <li data-aos="fade-right">
                                        Delivered cost-to-serve insights through quantitative analysis, enabling operational efficiency gains of roughly 10%.
                                    </li>
                                </ul>
                            </li>
                            <li className="mb-10 ms-6">
                                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                    <svg
                                        className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                    </svg>
                                </span>
                                <h3
                                    className="mb-1 text-lg font-semibold text-gray-900 dark:text-white"
                                    data-aos="fade-right">
                                    Procurement Intern, American Airlines 
                                </h3>
                                <time
                                    className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                                    data-aos="fade-right">
                                    June 2025 - August 2025
                                </time>
                                <ul className="space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                                    <li data-aos="fade-right">
                                         Contributed to Professional Services sourcing initiatives, influencing procurement decisions tied to $900M+ in annual expenditure.
                                    </li>
                                    <li data-aos="fade-right">
                                        Assessed supplier bids and conducted competitive price benchmarking, enabling sourcing outcomes that generated 8% cost reductions.
                                    </li>
                                    <li data-aos="fade-right">
                                        Elevated spend transparency and policy adherence by 20% using Coupa, Sievo, and advanced Excel analytics.
                                    </li>
                                    <li data-aos="fade-right">
                                        Tracked supplier performance metrics and reviewed contractual terms, shortening sourcing cycle inefficiencies by 12%.
                                    </li>
                                    <li data-aos="fade-right">
                                        Partnered with finance and operations teams to align vendor strategies with cost and performance objectives.
                                    </li>
                                </ul>
                            </li>
                            <li className="mb-10 ms-6">
                                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                    <svg
                                        className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                    </svg>
                                </span>
                                <h3
                                    className="mb-1 text-lg font-semibold text-gray-900 dark:text-white"
                                    data-aos="fade-right">
                                    Procurement and Contract Assistant, Oregon State Gov
                                </h3>
                                <time
                                    className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                                    data-aos="fade-right">
                                    June 2023 - December 2023
                                </time>
                                <ul className="space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                                    <li data-aos="fade-right">
                                        Mastered the usage of MS Access Database while working on Procurement orders and maintained the Information of suppliers enhancing transparency and accountability.
                                    </li>
                                    <li data-aos="fade-right">
                                        Participated in Oregon Disparity Study Research and learned about the micro, small, and medium industry's supply chain pattern.
                                    </li>
                                    <li data-aos="fade-right">
                                        Developed procurement skills by directly working under the Deputy State Chief Procurement Officer and under the general supervision and direction of the Construction and Commodities sourcing team manager.
                                    </li>
                                </ul>
                            </li>
                            
                        </ol>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Experience