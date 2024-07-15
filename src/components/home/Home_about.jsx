import React from 'react';
import Button from './Button';

import aboutImg from '../../assets/images/about/about_image.png'
import s1 from '../../assets/images/about/1.svg'
import s2 from '../../assets/images/about/2.svg'
import s3 from '../../assets/images/about/3.svg'
function Home_about() {
    return (
        <section className='section home_about decoration_wrap'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="about_image_2 decoration_wrap">
                            <div className="image_wrap">
                                <img src={aboutImg} alt="About_image" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="section_heading">
                            <h2 className="heading_subtitle">
                                <span>Learn about us</span>
                            </h2>
                            <h3 className='heading_title'>Join Us on the Journey</h3>
                        </div>
                        <div className="about_desc">
                            <p>
                                Learn and Achieve is dedicated to enhancing the educational
                                experience of students across India. We invite you to join us on this remarkable journey to
                                build a brighter future for the next generation.
                            </p>
                        </div>
                        <ul className="list-inline about_box">
                            <li>
                                <div className="about_img_wrap">
                                    <img src={s1} alt="Img_1" className='img-fluid' />
                                </div>
                                <h4 className='about_text'>Building Strong Educational Foundations</h4>
                            </li>
                            <li>
                                <div className="about_img_wrap">
                                    <img src={s2} alt="Img_1" className='img-fluid' />
                                </div>
                                <h4 className='about_text'>Empowering the Next Generation</h4>
                            </li>
                            <li>
                                <div className="about_img_wrap">
                                    <img src={s3} alt="Img_1" className='img-fluid' />
                                </div>
                                <h4 className='about_text'>भारत SAT: A Path to Success</h4>
                            </li>
                        </ul>
                        <div className="Home_about_btn">
                            <Button name='learn more' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home_about
