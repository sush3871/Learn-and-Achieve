import React from 'react'
import Button from './Button';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import b1 from '../../assets/images/banner/banner1.png';
import b2 from '../../assets/images/banner/banner2.png';
import b3 from '../../assets/images/banner/banner3.png';
import dot1 from '../../assets/images/banner/dot1.svg';
import shape2 from '../../assets/images/banner/shape2.svg';
import shape3 from '../../assets/images/banner/shape3.svg';
import shape5 from '../../assets/images/banner/shape5.svg';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
export default function Banner() {
  return (
    <>
        <section className='hero_banner_section decoration_wrap pt-4 pt-md-2' >
            <div className="container-xxl p-lg-0">
                <Swiper spaceBetween={30} centeredSlides={true} loop={true}
                    autoplay={{
                        delay: 4500,
                        disableOnInteraction: false,
                    }} 
                    pagination={{clickable: true,}} modules={[Autoplay, Pagination]} className="mySwiper">
                    <SwiperSlide>
                        <div className="row align-items-center">
                            <div className="col-12 col-lg-6">
                                <div className="banner_content"  >
                                    <div className="hero_banner_heading">
                                        <span className="focus_text">
                                            Learn and Achieve
                                        </span>
                                        <h1 className='hero_title'>
                                            Learn Everyday Any <br className='d-lg-block d-none'/>
                                            New Skills Online with
                                            Top <span className='round'>Instructors.</span>
                                        </h1>
                                        <p className='hero_desc'>
                                            Learn and Achieve is dedicated to enhancing the educational experience 
                                            of students across India. We invite you to join us on this remarkable 
                                            journey to build a brighter future for the next generation.
                                        </p>
                                        <Button name= 'get started'/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="hero_banner_image decoration_wrap mt-3 mt-md-0">
                                    <div className="man_image">
                                        <img src={b1} alt="Banner_img" className='img-fluid' />
                                    </div>
                                </div>
                                <div className="deco_item shape_1 spin">
                                    <img src={dot1} alt="dot_1" className='img-fluid' />
                                </div>
                                <div className="deco_item shape_2 amin-up-down">
                                    <img src={shape2} alt="shape_2" className='img-fluid' />
                                </div>
                                <div className="deco_item shape_3 flash">
                                    <img src={shape3} alt="shape_3" className='img-fluid' />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="row align-items-center">
                            <div className="col-12 col-lg-6">
                                <div className="banner_content">
                                    <div className="hero_banner_heading">
                                        <span className="focus_text">
                                            Learn and Achieve
                                        </span>
                                        <h1 className='hero_title'>
                                            Start learning  <span className="round2">Courses</span>
                                            <br/>
                                            Education from.
                                        </h1>
                                        <p className='hero_desc'>
                                            Learn and Achieve is dedicated to enhancing the educational 
                                            experience of students across India. We invite you to join us 
                                            on this remarkable journey to build a brighter future for the 
                                            next generation.
                                        </p>
                                        <Button name= 'get started'/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="hero_banner_image decoration_wrap mt-3 mt-md-0">
                                    <div className="man_image">
                                        <img src={b2} alt="Banner_img" className='img-fluid' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="row align-items-center">
                            <div className="col-12 col-lg-6">
                                <div className="banner_content">
                                    <div className="hero_banner_heading">
                                        <span className="focus_text">
                                            Learn and Achieve
                                        </span>
                                        <h1 className='hero_title'>
                                            <span className="round3">Empowering</span> the Next <br /> Generation
                                        </h1>
                                        <p className='hero_desc'>
                                            Learn and Achieve is dedicated to enhancing the educational 
                                            experience of students across India. We invite you to join us on this remarkable 
                                            journey to build a brighter future for the next generation.
                                        </p>
                                        <Button name= 'get started'/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="hero_banner_image decoration_wrap mt-3 mt-md-0">
                                    <div className="man_image">
                                        <img src={b3} alt="Banner_img" className='img-fluid' />
                                    </div>
                                </div>
                                <div className="deco_item shape_4 spin">
                                    <img src={dot1} alt="dot_1" className='img-fluid' />
                                </div>
                                <div className="deco_item shape_5 amin-up-down">
                                    <img src={shape5} alt="shape_2" className='img-fluid' />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    </>
  )
}

