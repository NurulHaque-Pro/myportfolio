import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import SectionTitle from '../../Common/SectionTitle/SectionTitle';
import { FaCss3, FaGithub, FaHtml5, FaNodeJs, FaReact, FaWordpress } from 'react-icons/fa';
import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";

const Skills = () => {
    return (
        <div className='bg-base-200'>
            <div className='container mx-auto border-b-2 border-[#121415] py-20'>
                <div className='text-center'>
                    <SectionTitle title='My Skills' subTitle='Showcasing My Skills and Talents'></SectionTitle>
                </div>
                <div className='grid grid-cols-3 gap-7 pt-16'>
                    <div className='w-full items-center p-5 grid grid-cols-5 bg-gradient-to-b hover:bg-gradient-to-t h-full cursor-pointer from-base-100 shadow-xl rounded-ss-[40px] rounded-ee-[40px] rounded'>
                        <FaHtml5 className='text-5xl text-primary'></FaHtml5>
                        <div className='col-span-4'>
                            <h2 className='font-semibold text-2xl'>HTML</h2>
                            <p className='text-sm'>Proficient in creating the structure and content of web pages using HTML.</p>
                        </div>
                    </div>
                    <div className='w-full items-center p-5 grid grid-cols-5 bg-gradient-to-b hover:bg-gradient-to-t h-full cursor-pointer from-base-100 shadow-xl rounded-ss-[40px] rounded-ee-[40px] rounded'>
                        <FaCss3 className='text-5xl text-primary'></FaCss3>
                        <div className='col-span-4'>
                            <h2 className='font-semibold text-2xl'>CSS</h2>
                            <p className='text-sm'>Experienced in CSS, including Bootstrap and Tailwind, for enhancing web page appearance and styling.</p>
                        </div>
                    </div>
                    <div className='w-full items-center p-5 grid grid-cols-5 bg-gradient-to-b hover:bg-gradient-to-t h-full cursor-pointer from-base-100 shadow-xl rounded-ss-[40px] rounded-ee-[40px] rounded'>
                        <IoLogoJavascript className='text-5xl text-primary'></IoLogoJavascript>
                        <div className='col-span-4'>
                            <h2 className='font-semibold text-2xl'>JavaScript</h2>
                            <p className='text-sm'>Well-versed in using JavaScript to add interactivity and dynamic elements to websites, enhancing user experience.</p>
                        </div>
                    </div>
                    <div className='w-full items-center p-5 grid grid-cols-5 bg-gradient-to-b hover:bg-gradient-to-t h-full cursor-pointer from-base-100 shadow-xl rounded-ss-[40px] rounded-ee-[40px] rounded'>
                        <FaReact className='text-5xl text-primary'></FaReact>
                        <div className='col-span-4'>
                            <h2 className='font-semibold text-2xl'>React</h2>
                            <p className='text-sm'>Experienced in building user interfaces using React, a popular JavaScript library known for its component-based development approach.</p>
                        </div>
                    </div>
                    <div className='w-full items-center p-5 grid grid-cols-5 bg-gradient-to-b hover:bg-gradient-to-t h-full cursor-pointer from-base-100 shadow-xl rounded-ss-[50px] rounded-ee-[50px]'>
                        <FaWordpress className='text-5xl text-primary'></FaWordpress>
                        <div className='col-span-4'>
                            <h2 className='font-semibold text-2xl'>WordPress</h2>
                            <p className='text-sm'>Skilled in utilizing WordPress, a popular CMS, for creating and managing websites with ease, including themes, plugins, and customization.</p>
                        </div>
                    </div>
                    <div className='w-full items-center p-5 grid grid-cols-5 bg-gradient-to-b hover:bg-gradient-to-t h-full cursor-pointer from-base-100 shadow-xl rounded-ss-[40px] rounded-ee-[40px] rounded'>
                        <IoLogoFirebase className='text-5xl text-primary'></IoLogoFirebase>
                        <div className='col-span-4'>
                            <h2 className='font-semibold text-2xl'>Firebase</h2>
                            <p className='text-sm'>Proficient in developing web and mobile applications using Firebase, which offers built-in cloud services and real-time database functionality.</p>
                        </div>
                    </div>
                    <div className='w-full items-center p-5 grid grid-cols-5 bg-gradient-to-b hover:bg-gradient-to-t h-full cursor-pointer from-base-100 shadow-xl rounded-ss-[40px] rounded-ee-[40px] rounded'>
                        <SiMongodb className='text-5xl text-primary'></SiMongodb>
                        <div className='col-span-4'>
                            <h2 className='font-semibold text-2xl'>MongoDB</h2>
                            <p className='text-sm'>Experienced in working with MongoDB, a flexible NoSQL database program that offers high scalability and storage flexibility.</p>
                        </div>
                    </div>
                    <div className='w-full items-center p-5 grid grid-cols-5 bg-gradient-to-b hover:bg-gradient-to-t h-full cursor-pointer from-base-100 shadow-xl rounded-ss-[40px] rounded-ee-[40px] rounded'>
                        <FaGithub className='text-5xl text-primary'></FaGithub>
                        <div className='col-span-4'>
                            <h2 className='font-semibold text-2xl'>GitHub</h2>
                            <p className='text-sm'>Proficient in using GitHub for version control, collaboration, and efficient project management.</p>
                        </div>
                    </div>
                    <div className='w-full items-center p-5 grid grid-cols-5 bg-gradient-to-b hover:bg-gradient-to-t h-full cursor-pointer from-base-100 shadow-xl rounded-ss-[40px] rounded-ee-[40px] rounded'>
                        <FaNodeJs className='text-5xl text-primary'></FaNodeJs>
                        <div className='col-span-4'>
                            <h2 className='font-semibold text-2xl'>Node.js</h2>
                            <p className='text-sm'>Skilled in utilizing Node.js, a JavaScript runtime environment, for server-side development and building scalable web applications.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Skills;