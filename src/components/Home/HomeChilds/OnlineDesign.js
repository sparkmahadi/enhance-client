import React from 'react';
import img1 from '../../../images/space.png';
import img2 from '../../../images/customize.png';
import img3 from '../../../images/implement.png';

const OnlineDesign = () => {
    const data = [
        {
            img: img1,
            title: 'Show us your space',
            details: 'Take a few photos & videos of your space & tell us about your requirements'
        },
        {
            img: img2,
            title: 'Get custom design plans',
            details: 'Your designer will create a detailed design plan for your space as per your requirements and preferences. You will also receive detailed instructions on how to execute the plan.'
        },
        {
            img: img3,
            title: 'Implement your design plan',
            details: "Receive your plan that you can now implement on your own and at your preferred pace"
        },
    ]
    return (
        <div className='text-white'>
            <h3 data-aos='fade-left' data-aos-duration='1000' className='text-center text-xl lg:text-2xl font-semibold mb-5'>Online Interior Design in 3 Easy Steps</h3>
            <div data-aos='fade-right' data-aos-duration='1000' className='lg:flex items-start gap-10'>
                {
                    data.map((d, i) =>
                        <div key={i} className='mb-5'>
                            <div className='w-96'>
                                <img src={d.img} alt="" />
                            </div>
                            <h6 className='font-semibold my-2 text-center lg:text-lg'>{d.title}</h6>
                            <p className='text-sm text-center'>{d.details}</p>
                        </div>)
                }
            </div>
        </div>
    );
};

export default OnlineDesign;