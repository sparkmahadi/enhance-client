import React from 'react';
import img2 from '../../../images/hero/online-design.jpg';

const IsOnlineDesign = () => {
    return (
        <div className='lg:flex items-center justify-between gap-10 mt-10 lg:mt-20'>
            <img data-aos='fade-right' data-aos-duration='1000' className='lg:w-1/2' src={img2} alt="" />
            <div  data-aos='fade-left' data-aos-duration='1000'>
                <h5 className='text-lg lg:text-2xl font-semibold mb-2 text-center'>Is online interior design right for you?</h5>
                <p>Have you ever tried handling a home decoration project by yourself, but found it difficult to execute it all on your own? Or you’ve possibly considered hiring a professional to design your space, but been put off by expensive renovation fees, hassle of coordination and the overall extensive timelines.

                    However, the expense, the hassle and the lengthy timelines do not invalidate the fact that you deserve to have a space that is optimised to your lifestyle, your personality and your preferences – a space that reflects you!

                    Hence, at Sheraspace, we bring to you Bangladesh’s first – Online Interior Design Consultation – a complete alternative to traditional interior design services.

                    We believe interior design should be accessible to everyone, not only a handful few. And hence, our packages have been designed specifically keeping ease, time constraints and affordability in mind, to not only provide you with the best interior design solution but also in the most effective manner.</p>
            </div>
        </div>
    );
};

export default IsOnlineDesign;