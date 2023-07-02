import React from 'react';
import HeroSection from './HeaderHero/HeroSection';
import About from './About/About';
import Features from './Feature/Features';
import Skills from './Skills/Skills';

const Page = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <Features></Features>
            <Skills></Skills>
        </div>
    );
};

export default Page;