import React from 'react';

const SectionTitle = ({title, subTitle}) => {
    return (
        <div>
            <h4 className='text-primary text-lg'>{subTitle}</h4>
            <h2 className='text-5xl font-bold'>{title}</h2>
        </div>
    );
};

export default SectionTitle;