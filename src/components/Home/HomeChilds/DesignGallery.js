import React, { useState } from 'react';
import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-cards';
import './DesignGallery.css';

const DesignGallery = () => {
    const [designs, setDesigns] = useState([]);
    useEffect(() => {
        fetch('https://enhance-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setDesigns(data))
    }, [])

    console.log(designs);
    return (
        <div className='text-white mt-10'>
            <div data-aos='fade-left' data-aos-duration='1000'>
                <h3  className='text-center text-xl lg:text-2xl font-semibold mb-2'>Design Gallery</h3>
                <p className='text-center mb-5'>Browse and get inspired by my conceptual designs</p>
            </div>

            <div data-aos='fade-right' data-aos-duration='1000'>
                <Swiper
                    modules={[Navigation]}
                    navigation
                    speed={800}
                    loop
                    spaceBetween={30}
                    breakpoints={{
                        // when window width is >= 640px
                        640: {
                            width: 640,
                            slidesPerView: 1,
                        },
                        // when window width is >= 768px
                        768: {
                            width: 768,
                            slidesPerView: 2,
                        },
                    }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {
                        designs.map(des =>
                            <SwiperSlide>
                                <div className='w-96 h-52' key={des._id}>
                                    <img src={des.img} alt="" />
                                </div>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default DesignGallery;