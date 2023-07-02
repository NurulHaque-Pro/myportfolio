import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Common/SectionTitle/SectionTitle';
import { FaCode, FaLaptopCode, FaWordpressSimple } from "react-icons/fa";
import { AiOutlineCode, AiOutlineRedo, AiOutlineSetting, AiOutlineShopping, } from "react-icons/ai";
import Tilt from 'react-parallax-tilt';


const Features = () => {
    const [scale, setScale] = useState(1.03);

    return (
        <div className=' bg-base-200'>
            <div className='container mx-auto border-b-2 border-[#121415] py-20'>
                <SectionTitle title='What I Do' subTitle='Features'></SectionTitle>

                <div className='pt-10 grid md:grid-cols-3 gap-5'>

                    <Tilt
                        tiltEnable={false}
                        scale={scale}
                        transitionSpeed={2500}
                    >
                        <div className="card w-full bg-gradient-to-b from-base-100 h-full cursor-pointer shadow-xl hover:bg-gradient-to-t">
                            <div className="card-body">
                                <FaCode className='text-primary text-5xl font-light'></FaCode>
                                <h2 className="card-title">Web Design</h2>
                                <p>Create visually appealing and user-friendly websites that captivate visitors and effectively communicate your brand's message.</p>
                                <div className="card-actions">

                                </div>
                            </div>
                        </div>
                    </Tilt>
                    <Tilt
                        tiltEnable={false}
                        scale={scale}
                        transitionSpeed={2500}
                    >
                        <div className="card w-full bg-gradient-to-b hover:bg-gradient-to-t h-full cursor-pointer from-base-100 shadow-xl">
                            <div className="card-body">
                                <AiOutlineCode className='text-primary text-5xl font-light'></AiOutlineCode>
                                <h2 className="card-title">Web Development</h2>
                                <p>Build custom websites and web applications using the latest technologies to provide seamless functionality and a great user experience.</p>
                                <div className="card-actions">

                                </div>
                            </div>
                        </div>
                    </Tilt>
                    <Tilt
                        tiltEnable={false}
                        scale={scale}
                        transitionSpeed={2500}
                    >
                        <div className="card w-full bg-gradient-to-b hover:bg-gradient-to-t h-full cursor-pointer from-base-100 shadow-xl">
                            <div className="card-body">
                                <AiOutlineSetting className='text-primary text-5xl font-light'></AiOutlineSetting>
                                <h2 className="card-title">Website Maintenance</h2>
                                <p>Ensure your website remains secure, up-to-date, and performs optimally with regular maintenance and updates.</p>
                                <div className="card-actions">

                                </div>
                            </div>
                        </div>
                    </Tilt>
                    <Tilt
                        tiltEnable={false}
                        scale={scale}
                        transitionSpeed={2500}
                    >
                        <div className="card w-full bg-gradient-to-b hover:bg-gradient-to-t h-full cursor-pointer from-base-100 shadow-xl">
                            <div className="card-body">
                                <AiOutlineShopping className='text-primary text-5xl font-light'></AiOutlineShopping>
                                <h2 className="card-title">E-commerce Website</h2>
                                <p>Establish a powerful online store with secure payment gateways, intuitive product catalogs, and a smooth shopping experience.</p>
                                <div className="card-actions">

                                </div>
                            </div>
                        </div>
                    </Tilt>
                    <Tilt
                        tiltEnable={false}
                        scale={scale}
                        transitionSpeed={2500}
                    >
                        <div className="card w-full bg-gradient-to-b hover:bg-gradient-to-t h-full cursor-pointer from-base-100 shadow-xl">
                            <div className="card-body">
                                <AiOutlineRedo className='text-primary text-5xl font-light'></AiOutlineRedo>
                                <h2 className="card-title">Website Redesign</h2>
                                <p>Transform your outdated website into a modern and engaging online presence that aligns with current design trends and user expectations.</p>
                                <div className="card-actions">

                                </div>
                            </div>
                        </div>
                    </Tilt>
                    <Tilt
                        tiltEnable={false}
                        scale={scale}
                        transitionSpeed={2500}
                    >
                        <div className="card w-full bg-gradient-to-b hover:bg-gradient-to-t h-full cursor-pointer from-base-100 shadow-xl">
                            <div className="card-body">
                                <FaWordpressSimple className='text-primary text-5xl font-light'></FaWordpressSimple>
                                <h2 className="card-title">WordPress Website</h2>
                                <p>Leverage the power of WordPress to create feature-rich, customizable websites that are easy to manage and scale.</p>
                                <div className="card-actions">

                                </div>
                            </div>
                        </div>
                    </Tilt>

                </div>
            </div>
        </div>
    );
};

export default Features;