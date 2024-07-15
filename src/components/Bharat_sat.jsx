import React, { useEffect } from 'react'
import Banner from './Banner'
import Button from './home/Button'
import list_icon from '../assets/images/list_icon.svg'

const key = [
    {
        num: '01.',
        title: 'All India Level Examination:',
        desc: 'BHARAT SAT is an examination that spans the entire nation, bringing students from every corner of the country together in the pursuit of knowledge and excellence.',
        bg: '#F6FFD2'
    },
    {
        num: '02.',
        title: 'For K12 Classes:',
        desc: 'We believe that nurturing talent should begin at an early age. BHARAT SAT is designed to cater to students from 1st to 12th standard, ensuring inclusivity and equal opportunity for all.',
        bg: '#DAFFFF'
    },
    {
        num: '03.',
        title: 'Monthly Scholarships:',
        desc: 'BHARAT SAT goes beyond traditional assessments by rewarding the top-performing students at various levels, including District, State, and National. Detailed information on the awards can be found separately.',
        bg: '#FFE8E8'
    },
    {
        num: '04.',
        title: 'Competitive and Diagnostic:',
        desc: 'BHARAT SAT is not just about competition. It also serves as a diagnostic tool, helping students identify their strengths and areas for improvement. This dual nature of the examination makes it a valuable educational resource.',
        bg: '#FFF5DA'
    }
]

const Keyitem = ({ num, title, desc, bg }) => {
    return (
        <div className="key_item" style={{ backgroundColor: bg }}>
            <h2 className="key_title">
                <span>{num} </span>
                {title}
            </h2>
            <p className='mb-0'>
                {desc}
            </p>
        </div>
    )
}

import b1 from '../assets/images/bharat_sat/1.png';
import b2 from '../assets/images/bharat_sat/2.png';
import b3 from '../assets/images/bharat_sat/3.png';
import b4 from '../assets/images/bharat_sat/4.png';
import b5 from '../assets/images/bharat_sat/5.png';


function Bharat_sat() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Banner title='Bharat SAT Scholarship Examination' page='Bharat Sat' />
            <section className='section bharatsat_section'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-11 m-auto">
                            <div className="section_heading">
                                <h3 className='heading_title text-center mb-3'>Introducing Bharat SAT: Unlocking Potential <br /> through Education</h3>
                                <p className='mb-0'>
                                    Welcome to Bharat SAT, a flagship initiative of the "Learn and Achieve" Edutech project, aimed at
                                    transforming the educational landscape of India. Bharat SAT is an All India level examination
                                    specially designed for K12 classes, catering to students from 1st to 12th standard. This initiative
                                    stands out for its unique approach,
                                    combining competition and diagnosis to empower students on their educational journey.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row pb-5 pt-3">
                        <div className="col-lg-4">
                            <div className="d-flex gap-3 d-lg-block">
                                <div className="first_img">
                                    <img src={b1} alt="Bharat_sat_img" className='img-fluid' />
                                </div>
                                <div className="second_img">
                                    <img src={b2} alt="Bharat_sat_img" className='img-fluid' />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="main_img">
                                <img src={b3} alt="Bharat_sat_img" className='img-fluid' />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="d-flex gap-3 d-lg-block">
                                <div className="forth_img">
                                    <img src={b4} alt="Bharat_sat_img" className='img-fluid' />
                                </div>
                                <div className="fifth_img">
                                    <img src={b5} alt="Bharat_sat_img" className='img-fluid' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="key_section">
                        <div className="section_heading">
                            <h3 className='heading_title text-center'>Key Highlights</h3>
                        </div>
                        <div className="row mt-5">
                            {key.map((keys, index) => (
                                <div className="col-md-6 mb-4" key={index}>
                                    <Keyitem
                                        num={keys.num}
                                        title={keys.title}
                                        desc={keys.desc}
                                        bg={keys.bg}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className="benefit_section section pb-40">
                <div className="container">
                    <div className="section_heading mb-4">
                        <h3 className='heading_title text-center'>Benefits of BHARAT SAT</h3>
                    </div>
                    <div className="benefit_list">
                        <ul className="list-inline unordered-list">
                            <li>
                                <img src={list_icon} alt="list_icon" />
                                <span>
                                    Skill Enhancement: Participating in BHARAT SAT encourages students to develop a broad spectrum of skills, from problem-solving to time management, fostering their holistic growth.
                                </span>
                            </li>
                            <li>
                                <img src={list_icon} alt="list_icon" />
                                <span>
                                    Healthy Competition: Healthy competition is the cornerstone of personal development. BHARAT SAT instills a sense of competitiveness in students, motivating them to strive for excellence.
                                </span>
                            </li>
                            <li>
                                <img src={list_icon} alt="list_icon" />
                                <span>
                                    Scholarships: With monthly scholarships awarded to the top performers at various levels, BHARAT SAT eases the financial burden on families, making quality education more accessible.
                                </span>
                            </li>
                            <li>
                                <img src={list_icon} alt="list_icon" />
                                <span>
                                    Identify Potential: BHARAT SAT's diagnostic aspect helps students and educators identify their strengths and weaknesses, enabling them to tailor their educational paths for optimal growth.
                                </span>
                            </li>
                            <li>
                                <img src={list_icon} alt="list_icon" />
                                <span>
                                    National Recognition: Achieving success in BHARAT SAT is a badge of honor, signifying excellence at a national level, which can open doors to a world of opportunities.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <div className='container pt-40 pb-60'>
                <div className="row">
                    <div className="col-lg-10 m-auto">
                        <div className="text-center student_registration_desc">
                            <p className='mb-3'>
                                Join us in this remarkable journey of knowledge, competition, and self-improvement 
                                with Bharat SAT. Together, we are shaping a brighter future for India's young minds. 
                                Discover your potential, compete, and succeed with Bharat SAT.
                            </p>
                            <Button name ='Student Registration'/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bharat_sat
