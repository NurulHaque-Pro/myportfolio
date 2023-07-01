import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Common/SectionTitle/SectionTitle';
import { FaCode } from "react-icons/fa";
const Features = () => {

    // const [services, setServices] = useState([]);

    // useEffect(() => {
    //     fetch('services.json')
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [])
    // // console.log(services);

    return (
        <div className='py-16 border-b-2 border-[#121415] container mx-auto'>
            <SectionTitle title='What I Do' subTitle='Features'></SectionTitle>
            <div>
                {
                    services.map((service, index) => (
                        <div className="card w-96 bg-base-200 shadow-xl" key={index}>
                            <div className="card-body">
                                <FaCode className='text-primary text-5xl font-light'></FaCode>
                                <h2 className="card-title">{service.name}</h2>
                                <p>{service.description}</p>
                                <div className="card-actions">
                                    {/* Add necessary actions or buttons here */}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Features;