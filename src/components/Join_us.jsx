import React, { useEffect } from 'react'
import Banner from './Banner'
import Button from './home/Button'

import man from '../assets/images/comman/man.svg';
import i1 from '../assets/images/comman/1.png';
import i2 from '../assets/images/comman/2.png';
import i3 from '../assets/images/comman/join.png';
import i4 from '../assets/images/comman/form_img.png';
import i5 from '../assets/images/comman/3.png';



function Join_us() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  return (
    <>
      <Banner desc ='Join Learn and Achieve Edutech as a Coordinator for' title='Bharat SAT Examination' page='Join as a Co-ordinator' />
    
      <section className='section joinUs_section'>
        <div className="container">
            <div className="why_choose_us">
                <div className="row">
                    <div className="col-md-5">
                        <div className="section_heading">
                            <h3 className='heading_title'>Who Can Join?</h3>
                            <p className='mb-0'>
                                If you're 18 years or older and have completed your 12th grade, you're eligible to join
                                us as a Coordinator. Your age and qualification are your assets in this endeavor.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="section_wrapper">
                            <div className="man_img decoration_wrap d-flex flex-column flex-lg-row align-items-center">
                                <img src={man} alt="man_img" className="img-src" />
                                <p className='mb-0'>
                                    Are you a passionate individual looking to make a positive impact on 
                                    the education landscape? Are you motivated to empower students in 
                                    their quest for success? If so, we invite you to become a Coordinator
                                    with Learn and Achieve Edutech, where opportunities abound and your 
                                    potential is unlimited.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <section className="categories section bg-grey">
        <div className="container">
            <div className="section_heading text-center">
                <h3 className='heading_title'>Two Exciting Categories</h3>
            </div>
            <div className="category_item">
                <div className="row">
                    <div className="col-10 m-auto">
                        <div className="d-flex w-100 flex-column mb-4 flex-lg-row">
                            <h3 className='mb-0'>Direct Coordinator</h3>
                            <p className='mb-0'>
                                As a Direct Coordinator, you'll directly engage with parents and students, 
                                helping them register for the prestigious BHARAT SAT Examination and offering our top-notch online 
                                study materials. Be the guiding light on their educational journey.
                            </p>
                        </div>
                        <div className="d-flex w-100 flex-column flex-lg-row">
                            <h3 className='mb-0'>Indirect Coordinator</h3>
                            <p className='mb-0'>
                                If you prefer working with schools, our Indirect Coordinator role is perfect for you.
                                Collaborate with our Learn and Achieve Edutech team to enroll students in the BHARAT SAT Examination
                                through their schools.Team up with us to make education accessible to all.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <section className='section path_join'>
        <div className="container">
            <div className="row">
                <div className="col-lg-7">
                    <div className="row">
                        <div className="col-md-12 col-lg-6">
                            <div className="content_wrapper">
                                <h4 className="title">Your Choice, Your Path</h4>
                                <p>
                                    Choose the category that resonates with your skills and interests.
                                    We trust you to make the best choice for your unique abilities. After selection and appointment by 
                                    Learn and Achieve Edutech, you'll embark on an exciting journey in your chosen domain.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6">
                            <div className="content_wrapper content_wrapper2">
                                <h4 className="title">Rewards for Excellence</h4>
                                <p>
                                    At Learn and Achieve Edutech, we believe in recognizing and rewarding your performance. You'll earn 
                                    commissions that directly reflect your dedication and results. 
                                    The harder you work, the more you can achieve.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-12">
                            <div className="content_wrapper mt-lg-3 content_wrapper3">
                                <div className="d-flex gap-lg-5 flex-lg-row flex-column">
                                    <img src={i1} alt="" className='img-fluid' />
                                    <div>
                                        <h4 className="title">Rewards for Excellence</h4>
                                        <p>
                                            At Learn and Achieve Edutech, we believe in recognizing and rewarding your performance. You'll earn 
                                            commissions that directly reflect your dedication and results. 
                                            The harder you work, the more you can achieve.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="content_wrapper content_wrapper4">
                        <h4 className="title">Compliance is Key</h4>
                        <p>
                            Every Coordinator must adhere to the terms and conditions of Learn and Achieve. 
                            We prioritize ethical conduct, 
                            transparency, and dedication to our mission of fostering quality education.
                        </p>
                        <div className="pt-5 text-end">
                            <img src={i2} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="join_us_form_main">
                <div className="row">
                    <div className="col-md-6 col-lg-7">
                        <div className="join_form">
                            <div className="overlay_img">
                                <img src={i3} alt="join" className='img-fluid' />
                            </div>
                            <h4 className='title'>Join Us</h4>
                            <form action="#!" className='Joiiin_form' method="get">
                                <div className="row">
                                    <div className="col-12 col-lg-11">
                                        <div className="mb-4">
                                            <label htmlFor="join_name" className="form-label">Name</label>
                                            <input type="name" className="form-control" id="join_name" placeholder="Enter your name"/>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-11">
                                        <div className="mb-4">
                                            <label htmlFor="join_name" className="form-label">Email ID</label>
                                            <input type="email" className="form-control" id="join_name" placeholder="Enter your email id"/>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-11">
                                        <div className="mb-4">
                                            <label htmlFor="join_name" className="form-label">Mobile No</label>
                                            <input type="email" className="form-control" id="join_name" placeholder="Enter your mobile no"/>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-11">
                                        <div className="mb-4">
                                            <label htmlFor="join_name" className="form-label">Date Of Birth</label>
                                            <input type="date" className="form-control" id="join_name" placeholder="Enter your mobile no"/>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-11">
                                        <div className="mb-4">
                                            <div className="d-flex justify-content-between flex-column flex-lg-row">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="pass"/>
                                                    <label className="form-check-label" htmlFor="pass">
                                                        12th Pass
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="agree"/>
                                                    <label className="form-check-label" htmlFor="agree">
                                                        I agree to these Terms and Conditions.
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-11">
                                        <div className="text-center mt-5">
                                            <Button name = 'Register Now'/>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-5">
                        <div className="join_us_uimage">
                            <img src={i4} alt="" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="join_cta">
                <div className="content_wrapeer gap-lg-5 d-flex justify-content-between align-items-center flex-column flex-lg-row">
                    <div className="content">
                        <h3>Register today and be the catalyst <br className='d-none d-lg-block' /> for change in education</h3>
                        <p>
                            Take the step towards a fulfilling and rewarding journey by becoming a Coordinator for BHARAT SAT <br className='d-none d-lg-block' /> 
                            Examination with Learn and Achieve Edutech. 
                            Let's shape the future of education together!
                        </p>
                    </div>
                    <div className="content_img">
                        <img src={i5} alt="3" className='img-fluid' />
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Join_us