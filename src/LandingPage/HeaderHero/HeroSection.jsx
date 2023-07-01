import React from 'react';
import Lottie from "lottie-react";
import codingAnimation from '../../assets/coding.json'
import { Typewriter } from 'react-simple-typewriter';
import nurulImage from '../../assets/Nurul-Haque-image.png'
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";

const HeroSection = () => {

    const phrases = ['Front-End Developer', 'MERN Stack Specialist', 'WordPress Expert', 'Freelancer'];
    return (
        <div className='bg-base-200 '>
            <div className="hero min-h-screen container mx-auto">
                <div className=" py-16 grid md:grid-cols-5 border-b-2 border-[#121415]">

                    <div className='md:col-span-3 pr-[16%] space-y-2 md:space-y-4 order-2 p-3 md:order-1'>
                        <h4 className='text-[#c4cfde] text-sm'>WELCOME TO MY WORLD</h4>
                        <h1 className="text-[34px] md:text-6xl font-bold text-white">Hi, I'm <span className='text-primary'>Nurul Haque</span></h1>
                        <h2 className='text-3xl md:text-4xl font-bold text-white'>a {' '}
                            <Typewriter
                                words={phrases}
                                loop={true}
                                cursor
                                cursorStyle="_"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </h2>
                        <p className="py-4 md:py-6">I am a skilled Front-End Developer passionate about creating captivating web experiences. With a keen eye for design and expertise in coding, I strive to craft seamless user interfaces that blend aesthetics and functionality.</p>
                        <button className="btn btn-primary bg-primary border-none hover">Download Resume</button>

                        <div className='pt-16'>
                            <h4 className='text-[#c4cfde] py-4 text-sm'>FIND WITH ME</h4>
                            <div className='flex gap-3'>
                                <FaFacebookSquare className='text-4xl rounded-md shadow-1 hover:-translate-y-[2px] cursor-pointer duration-300'></FaFacebookSquare>
                                <FaLinkedin className='text-4xl rounded-md shadow-1 hover:-translate-y-[2px] cursor-pointer duration-300'></FaLinkedin>
                                <FaGithubSquare className='text-4xl rounded-md shadow-1 hover:-translate-y-[2px] cursor-pointer duration-300'></FaGithubSquare>
                            </div>
                        </div>
                    </div>

                    {/* 2nd col */}

                    <div className='md:col-span-2 p-3 order-1 md:order-2'>
                        {/* <Lottie className='' animationData={codingAnimation} loop={true} /> */}

                        <div className='relative z-10'>
                            <div className='shadow-1 bg-[#161a1f79] -z-10 absolute bottom-0 rounded-md w-[100%] h-[88%] mt-40'>
                            </div>
                            <div className='w-full h-auto'>
                                <img src={nurulImage} alt="" />
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;