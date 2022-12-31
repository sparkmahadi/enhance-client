import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../images/hero/considering-office2.png';

const OfficeDesign = () => {
    return (
        <div className='mt-10 lg:mt-20'>
            <div data-aos='fade-left' data-aos-duration='1000'>
                <h3 className='text-center text-xl lg:text-2xl font-semibold mb-2'>Considering designing an office space?</h3>
                <p className='text-center mb-2'>Check out our Commercial Design Consultation Packages</p>
            </div>
            <Link to='/Services'><img data-aos='fade-right' data-aos-duration='1000' className='cursor-pointer opacity-50 hover:opacity-100 ease-in duration-100' src={img1} alt="" /></Link>
        </div>
    );
};

export default OfficeDesign;