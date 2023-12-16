import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='text-center my-4 md:w-3/12 mx-auto'>
            <p className='text-yellow-500 mb-2'>---------{subHeading}--------</p>
            <h3 className='text-4xl uppercase border-y-4 py-4'>{heading}</h3>

            
        </div>
    );
};

export default SectionTitle;