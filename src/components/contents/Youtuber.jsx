import React from 'react'

import { youtuberText } from '../../data/youtuber'
import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Autoplay } from 'swiper/modules';


const Youtuber = () => {
    return (

        <section id='youtuber'>
            <h2>🏛 ARCHITECT Youtuber</h2>
            <div className='youtuber__inner'>
                <Swiper
                    slidesPerView={9}
                    spaceBetween={30}
                    navigation={true}
                    modules={[Navigation, Autoplay]}
                    centeredSlides={true}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                            spaceBetween: 15
                        },
                        400: {
                            slidesPerView: 3,
                            spaceBetween: 15
                        },
                        960: {
                            slidesPerView: 4,
                            spaceBetween: 20
                        },
                        1200: {
                            slidesPerView: 5,
                            spaceBetween: 20
                        },
                        1600: {
                            slidesPerView: 6,
                            spaceBetween: 20
                        }
                    }}
                    className="mySwiper"
                >
                    {youtuberText.map((youtuber, key) => (

                        <SwiperSlide>
                            <div className='youtuber play__icon' key={key}>
                                <div className='youtuber__img'>
                                    <Link to={`/channel/${youtuber.channelId}`}>
                                        <img src={youtuber.img} alt={youtuber.author} />
                                    </Link>
                                </div>
                                <div className='youtuber__info'>{youtuber.author}</div>
                            </div>
                        </SwiperSlide>

                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Youtuber