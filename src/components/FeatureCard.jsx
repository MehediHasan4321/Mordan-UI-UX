import React from 'react';

const FeatureCard = ({ icon, title, content }) => {
    return (
        <div className={`flex flex-row p-6 rounded-[20px] gap-6 feature-card`}>
            <div className='w-[64px] h-[64px] rounded-full flex justify-center items-center bg-dimBlue '>
                <img src={icon} alt="icon" className='w-[50%] h-[50%] object-contain ' />
            </div>
            <div className='flex-1 flex flex-col ml-3 text-white'>
                <h4 className='font-poppins font-semibold text-[18px] leading-[23px] mb-1'>{title}</h4>
                <p className='font-poppins font-normal text-[16px] leading-[24px] mb-1 text-dimWhite'>{content}</p>
            </div>
        </div>
    );
};

export default FeatureCard;