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
                                    Finance and Operations Intern, Shashwat Real Estate 
                                </h3>
                                <time
                                    className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                                    data-aos="fade-right">
                                    June 2024 - August 2024
                                </time>
                                <ul className="space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                                    <li data-aos="fade-right">
                                        Supported the preparation of detailed budgets and financial reports for various projects, ensuring accuracy in cash flow analysis, expenditure tracking, and revenue forecasting.
                                    </li>
                                    <li data-aos="fade-right">
                                        Streamlined the invoice processing system and collaborated across departments to enhance transaction tracking, resulting in improved efficiency in payment collection.
                                    </li>
                                    <li data-aos="fade-right">
                                        Collaborated with Procurement and Sales teams to develop client quotations and vendor tenders, contributing to successful contract negotiations and operational efficiency.
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
                                    Simulation Assistant, Edson Grace Center 
                                </h3>
                                <time
                                    className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                                    data-aos="fade-right">
                                    February 2024 - May 2024
                                </time>
                                <ul className="space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                                    <li data-aos="fade-right">
                                        Ensuring the timely supply of medical equipment to enable smooth laboratory simulations for students of Nursing College.
                                    </li>
                                    <li data-aos="fade-right">
                                        Affirming we have the right amount of required equipment at all times and avoid running out of stock by managing our inventory effectively.
                                    </li>
                                    <li data-aos="fade-right">
                                        Assisting the Procurement team in ordering essential types of medical equipment by creating and analyzing inventory data.
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
                                    Supply Chain Assistant, Keshav Infrastructure Pvt. Ltd 
                                </h3>
                                <time
                                    className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                                    data-aos="fade-right">
                                    January 2022 - April 2022
                                </time>
                                <ul className="space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                                    <li data-aos="fade-right">
                                        Assisted the Purchasing Team in vendor selection, negotiation, and contract management, contributing to cost savings of a total of 10,000 dollars and quality improvement.
                                    </li>
                                    <li data-aos="fade-right">
                                        Conducted market research to identify cost-effective suppliers, resulting in optimized sourcing strategies and reduced procurement lead times.
                                    </li>
                                    <li data-aos="fade-right">
                                        Collaborated cross-functionally to simplify purchase order processing and inventory management, enhancing overall supply chain efficiency.
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