import React from 'react';
import HeroSection from './HeaderHero/HeroSection';
import About from './About/About';
import Features from './Feature/Features';

const Page = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <Features></Features>
        </div>
    );
};

export default Page;