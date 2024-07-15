import React, { useEffect } from 'react'
import Banner from './Banner'

import star from '../assets/images/bharat_sat/Group.png';
import s1 from '../assets/images/bharat_sat/star_img.png';
import s2 from '../assets/images/bharat_sat/cta-img.png';
import s3 from '../assets/images/bharat_sat/cta_bg.svg';
import trophy from '../assets/images/bharat_sat/trophy.png';


function Rewards() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  return (
    <>
     <Banner title='Rewarding Brilliance' page='Rewarding Brilliance' />
     <section className='section rewards_section'>
        <div className="container">
            <div className="row">
                <div className="col-lg-11 m-auto">
                    <div className="section_heading">
                        <h3 className='heading_title text-center mb-3'>Empowering Minds, Celebrating Excellence</h3>
                        <p className='mb-0'>
                            Welcome to Bharat SAT, a flagship initiative of the "Learn and Achieve" Edutech project, aimed at transforming the 
                            educational landscape of India. Bharat SAT is an All India level examination specially designed for K12 classes, 
                            catering to students from 1st to 12th standard. This initiative stands out for its unique approach, 
                            combining competition and diagnosis to empower students on their educational journey.
                        </p>
                    </div>
                </div>
            </div>
            <div className="rewards_wrapper mt-5">
                <div className="section_heading">
                    <h3 className='heading_title text-center mb-4'>Scholarship Distribution</h3>
                </div>
                <div className="row">
                    <div className="col-12 mb-4">
                        <div className="reward_box box_1">
                            <div className="d-flex flex-column flex-lg-row gap-3">
                                <div className="box_img">
                                    <img src={s1} alt="star_img" className='img-fluid' />
                                </div>
                                <div className="box_content">
                                    <h5 className='fw-600'>District-Level Recognition</h5>
                                    <p>In each of the 300 districts, we celebrate the top 20 achievers across grades 1 to 12 with prestigious Scholarships. This means 240 exceptional scholars in every district! The total grant in each district amounts to a remarkable</p>
                                    <p>INR 15,00,000 ensuring a minimum participation of 1,500 students from each grade. Nationally, this equates to a staggering 72,000 scholarships, fostering healthy competition and fair opportunities for success.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4 mb-lg-0">
                        <div className="reward_box box_2">
                            <div className="box_content">
                                <h5 className='fw-600'>Nationwide Commitment</h5>
                                <p className='mb-0'>Total Scholarship Fund: BHARAT SAT proudly announces a substantial commitment of Rs. 25 Crores at the national level. This financial support is dedicated to nurturing and encouraging the educational pursuits of the brightest young minds throughout the country.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4 mb-lg-0">
                        <div className="reward_box box_3">
                            <div className="box_content">
                                <h5 className='fw-600'>Nurturing Excellence, Unlocking Potential</h5>
                                <p className='mb-0'>Academic excellence is paramount, and our scholarships aim to pave the way for deserving students to chase their dreams. These rewards signify more than just financial aid; they represent our unwavering dedication to fostering talent, promoting a culture of learning, and championing the aspirations of our youth.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-11 m-auto mb-4 mb-lg-0">
                        <div className="reward_box text-center box_4">
                            <div className="box_content">
                                <p className='mb-0'>At Learn and Achieve Edutech, we firmly believe that acknowledging and rewarding merit is pivotal in sculpting a brighter future for our nation. The BHARAT SAT Examination's rewards program is a testament to our commitment to nurturing talent and supporting academic achievement, both at the district and national levels. Join us in celebrating brilliance and shaping a prosperous tomorrow!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rewards_cta">
                <div className="reward-price-card">
                    <div className="d-flex flex-column flex-lg-row gap-4 align-items-center position-relative">
                        <div className="cta_img">
                            <img src={s2} alt="cta_img" className='img-fluid' />
                        </div>
                        <div className="section_heading">
                            <h1 className='heading_title text-start mb-3'> ₹ 14,00,000 </h1>
                            <p className='fw-600 mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        </div>
                    </div>
                    <div className="cta_bg">
                        <img src={s3} alt="cta_bg" className='img-fluid'  />
                    </div>
                </div>
            </div>
        </div>
     </section>
     <section className='section  bg-grey scholership_section'>
        <div className="container">
            <div className="row">
                <div className="col-lg-11 m-auto">
                    <div className="section_heading">
                        <h3 className='heading_title text-center mb-3'>District Level Scholarships</h3>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="row">
                        <div className="exam_fee_wrapper flex-lg-row flex-column col-md-10 gap-3">
                            <div className="level">
                                <span className='fw-600 mb-0 me-3'>District Level</span>
                                <span className='fw-600 mb-0'>Taluka Level</span>
                            </div>
                            <p className="mb-0 fw-600">
                                Exam Date : Nov 24th 2024
                            </p>
                        </div>
                        <div className="exam_date col-md-2">
                            <h5 className="mb-0 fw-600 color-light">
                                Exam Fee : ₹ 650
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="scholership_tab">
                <div className="row">
                    <div className="col-md-3">
                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="ST-10" data-bs-toggle="pill" data-bs-target="#ST-10-home" type="button" role="tab" aria-controls="ST-10-home" aria-selected="true">
                                    <img src={star} alt="" />
                                    Standard 10
                                    </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="ST-9" data-bs-toggle="pill" data-bs-target="#ST-9-home" type="button" role="tab" aria-controls="ST-9-home" aria-selected="false">
                                    <img src={star} alt="" />
                                    Standard 9
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="ST-8" data-bs-toggle="pill" data-bs-target="#ST-8-home" type="button" role="tab" aria-controls="ST-8-home" aria-selected="false">
                                    <img src={star} alt="" />
                                    Standard 8
                                </button>
                            </li>
                            
                        </ul>
                    </div>
                    <div className="col-md-9">
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="ST-10-home" role="tabpanel" aria-labelledby="ST-10" tabIndex="0">
                                <div className="row">
                                    <div className="col-md-6 col-lg-3 col-6">
                                        <div className="rank-card mb-3 p-3 d-flex flex-column gap-3 bg-light-alt">
                                            <img src={trophy} style={{width:'30px'}} alt="img" className='img-fluid'/>
                                            <p className="mb-0 fw-600">Rank 1 :</p>
                                            <h3 className="mb-0 fw-600">₹ 50,000</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 col-6">
                                        <div className="rank-card mb-3 p-3 d-flex flex-column gap-3 bg-light-alt">
                                            <img src={trophy} style={{width:'30px'}} alt="img" className='img-fluid'/>
                                            <p className="mb-0 fw-600">Rank 2 :</p>
                                            <h3 className="mb-0 fw-600">₹ 35,000</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 col-6">
                                        <div className="rank-card mb-3 p-3 d-flex flex-column gap-3 bg-light-alt">
                                            <img src={trophy} style={{width:'30px'}} alt="img" className='img-fluid'/>
                                            <p className="mb-0 fw-600">Rank 3 :</p>
                                            <h3 className="mb-0 fw-600">₹ 30,000</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 col-6">
                                        <div className="rank-card mb-3 p-3 d-flex flex-column gap-3 bg-light-alt">
                                            <img src={trophy} style={{width:'30px'}} alt="img" className='img-fluid'/>
                                            <p className="mb-0 fw-600">Rank 4 :</p>
                                            <h3 className="mb-0 fw-600">₹ 25,000</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 col-6">
                                        <div className="rank-card mb-3 p-3 d-flex flex-column gap-3 bg-light-alt">
                                            <img src={trophy} style={{width:'30px'}} alt="img" className='img-fluid'/>
                                            <p className="mb-0 fw-600">Rank 5 :</p>
                                            <h3 className="mb-0 fw-600">₹ 30,000</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 col-6">
                                        <div className="rank-card mb-3 p-3 d-flex flex-column gap-3 bg-light-alt">
                                            <img src={trophy} style={{width:'30px'}} alt="img" className='img-fluid'/>
                                            <p className="mb-0 fw-600">Rank 6 :</p>
                                            <h3 className="mb-0 fw-600">₹ 25,000</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 col-6">
                                        <div className="rank-card mb-3 p-3 d-flex flex-column gap-3 bg-light-alt">
                                            <img src={trophy} style={{width:'30px'}} alt="img" className='img-fluid'/>
                                            <p className="mb-0 fw-600">Rank 7 :</p>
                                            <h3 className="mb-0 fw-600">₹ 20,000</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 col-6">
                                        <div className="rank-card mb-3 p-3 d-flex flex-column gap-3 bg-light-alt">
                                            <img src={trophy} style={{width:'30px'}} alt="img" className='img-fluid'/>
                                            <p className="mb-0 fw-600">Rank 8 :</p>
                                            <h3 className="mb-0 fw-600">₹ 15,000</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 col-6">
                                        <div className="rank-card mb-3 p-3 d-flex flex-column gap-3 bg-light-alt">
                                            <img src={trophy} style={{width:'30px'}} alt="img" className='img-fluid'/>
                                            <p className="mb-0 fw-600">Rank 9 :</p>
                                            <h3 className="mb-0 fw-600">₹ 10,000</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 col-6">
                                        <div className="rank-card mb-3 p-3 d-flex flex-column gap-3 bg-light-alt">
                                            <img src={trophy} style={{width:'30px'}} alt="img" className='img-fluid'/>
                                            <p className="mb-0 fw-600">Rank 10 :</p>
                                            <h3 className="mb-0 fw-600">₹ 5,000</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="ST-9-home" role="tabpanel" aria-labelledby="ST-9" tabIndex="0">
                            <div className="row">
                                    <div className="col-md-6 col-lg-3 col-6">
                                        <div className="rank-card mb-3 p-3 d-flex flex-column gap-3 bg-light-alt">
                                            <img src={trophy} style={{width:'30px'}} alt="img" className='img-fluid'/>
                                            <p className="mb-0 fw-600">Rank 1 :</p>
                                            <h3 className="mb-0 fw-600">₹ 50,000</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 col-6">
                                        <div className="rank-card mb-3 p-3 d-flex flex-column gap-3 bg-light-alt">
                                            <img src={trophy} style={{width:'30px'}} alt="img" className='img-fluid'/>
                                            <p className="mb-0 fw-600">Rank 2 :</p>
                                            <h3 className="mb-0 fw-600">₹ 35,000</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 col-6">
                                        <div className="rank-card mb-3 p-3 d-flex flex-column gap-3 bg-light-alt">
                                            <img src={trophy} style={{width:'30px'}} alt="img" className='img-fluid'/>
                                            <p className="mb-0 fw-600">Rank 3 :</p>
                                            <h3 className="mb-0 fw-600">₹ 30,000</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 col-6">
                                        <div className="rank-card mb-3 p-3 d-flex flex-column gap-3 bg-light-alt">
                                            <img src={trophy} style={{width:'30px'}} alt="img" className='img-fluid'/>
                                            <p className="mb-0 fw-600">Rank 4 :</p>
                                            <h3 className="mb-0 fw-600">₹ 25,000</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 col-6">
                                        <div className="rank-card mb-3 p-3 d-flex flex-column gap-3 bg-light-alt">
                                            <img src={trophy} style={{width:'30px'}} alt="img" className='img-fluid'/>
                                            <p className="mb-0 fw-600">Rank 5 :</p>
                                            <h3 className="mb-0 fw-600">₹ 30,000</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 col-6">
                                        <div className="rank-card mb-3 p-3 d-flex flex-column gap-3 bg-light-alt">
                                            <img src={trophy} style={{width:'30px'}} alt="img" className='img-fluid'/>
                                            <p className="mb-0 fw-600">Rank 6 :</p>
                                            <h3 className="mb-0 fw-600">₹ 25,000</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 col-6">
                                        <div className="rank-card mb-3 p-3 d-flex flex-column gap-3 bg-light-alt">
                                            <img src={trophy} style={{width:'30px'}} alt="img" className='img-fluid'/>
                                            <p className="mb-0 fw-600">Rank 7 :</p>
                                            <h3 className="mb-0 fw-600">₹ 20,000</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 col-6">
                                        <div className="rank-card mb-3 p-3 d-flex flex-column gap-3 bg-light-alt">
                                            <img src={trophy} style={{width:'30px'}} alt="img" className='img-fluid'/>
                                            <p className="mb-0 fw-600">Rank 8 :</p>
                                            <h3 className="mb-0 fw-600">₹ 15,000</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 col-6">
                                        <div className="rank-card mb-3 p-3 d-flex flex-column gap-3 bg-light-alt">
                                            <img src={trophy} style={{width:'30px'}} alt="img" className='img-fluid'/>
                                            <p className="mb-0 fw-600">Rank 9 :</p>
                                            <h3 className="mb-0 fw-600">₹ 10,000</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 col-6">
                                        <div className="rank-card mb-3 p-3 d-flex flex-column gap-3 bg-light-alt">
                                            <img src={trophy} style={{width:'30px'}} alt="img" className='img-fluid'/>
                                            <p className="mb-0 fw-600">Rank 10 :</p>
                                            <h3 className="mb-0 fw-600">₹ 5,000</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="ST-8-home" role="tabpanel" aria-labelledby="ST-8" tabIndex="0">
                            <div className="row">
                                    <div className="col-md-6 col-lg-3 col-6">
                                        <div className="rank-card mb-3 p-3 d-flex flex-column gap-3 bg-light-alt">
                                            <img src={trophy} style={{width:'30px'}} alt="img" className='img-fluid'/>
                                            <p className="mb-0 fw-600">Rank 1 :</p>
                                            <h3 className="mb-0 fw-600">₹ 50,000</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 col-6">
                                        <div className="rank-card mb-3 p-3 d-flex flex-column gap-3 bg-light-alt">
                                            <img src={trophy} style={{width:'30px'}} alt="img" className='img-fluid'/>
                                            <p className="mb-0 fw-600">Rank 2 :</p>
                                            <h3 className="mb-0 fw-600">₹ 35,000</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 col-6">
                                        <div className="rank-card mb-3 p-3 d-flex flex-column gap-3 bg-light-alt">
                                            <img src={trophy} style={{width:'30px'}} alt="img" className='img-fluid'/>
                                            <p className="mb-0 fw-600">Rank 3 :</p>
                                            <h3 className="mb-0 fw-600">₹ 30,000</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 col-6">
                                        <div className="rank-card mb-3 p-3 d-flex flex-column gap-3 bg-light-alt">
                                            <img src={trophy} style={{width:'30px'}} alt="img" className='img-fluid'/>
                                            <p className="mb-0 fw-600">Rank 4 :</p>
                                            <h3 className="mb-0 fw-600">₹ 25,000</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 col-6">
                                        <div className="rank-card mb-3 p-3 d-flex flex-column gap-3 bg-light-alt">
                                            <img src={trophy} style={{width:'30px'}} alt="img" className='img-fluid'/>
                                            <p className="mb-0 fw-600">Rank 5 :</p>
                                            <h3 className="mb-0 fw-600">₹ 30,000</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 col-6">
                                        <div className="rank-card mb-3 p-3 d-flex flex-column gap-3 bg-light-alt">
                                            <img src={trophy} style={{width:'30px'}} alt="img" className='img-fluid'/>
                                            <p className="mb-0 fw-600">Rank 6 :</p>
                                            <h3 className="mb-0 fw-600">₹ 25,000</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 col-6">
                                        <div className="rank-card mb-3 p-3 d-flex flex-column gap-3 bg-light-alt">
                                            <img src={trophy} style={{width:'30px'}} alt="img" className='img-fluid'/>
                                            <p className="mb-0 fw-600">Rank 7 :</p>
                                            <h3 className="mb-0 fw-600">₹ 20,000</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 col-6">
                                        <div className="rank-card mb-3 p-3 d-flex flex-column gap-3 bg-light-alt">
                                            <img src={trophy} style={{width:'30px'}} alt="img" className='img-fluid'/>
                                            <p className="mb-0 fw-600">Rank 8 :</p>
                                            <h3 className="mb-0 fw-600">₹ 15,000</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 col-6">
                                        <div className="rank-card mb-3 p-3 d-flex flex-column gap-3 bg-light-alt">
                                            <img src={trophy} style={{width:'30px'}} alt="img" className='img-fluid'/>
                                            <p className="mb-0 fw-600">Rank 9 :</p>
                                            <h3 className="mb-0 fw-600">₹ 10,000</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 col-6">
                                        <div className="rank-card mb-3 p-3 d-flex flex-column gap-3 bg-light-alt">
                                            <img src={trophy} style={{width:'30px'}} alt="img" className='img-fluid'/>
                                            <p className="mb-0 fw-600">Rank 10 :</p>
                                            <h3 className="mb-0 fw-600">₹ 5,000</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </section>
    </>
  )
}

export default Rewards