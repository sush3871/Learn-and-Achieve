import React, { useEffect } from 'react'
import Banner from './Banner'
import a1 from '../assets/images/about/a1.png';
import a2 from '../assets/images/about/a2.png';
import a3 from '../assets/images/about/a3.png';
import a4 from '../assets/images/about/a4.png';

function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  return (
    <>
        <Banner title = 'About Learn and Achieve' page ='About'/>
        <section className='section about_section pb-100'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="about_content">
                            <h2 className="about_title">Building Strong Educational Foundations</h2>
                            <p>
                                At Learn and Achieve, we are a passionate group of young individuals with diverse 
                                backgrounds and dynamic personalities who share a common vision: 
                                to revolutionize the Indian educational system...
                            </p>
                            <div className="bg_image ms-lg-auto">
                                <img src={a1} alt="bg-Img" className='img-fluid'/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="about_content mt-lg-5" style={{backgroundImage : 'linear-gradient(to left bottom, rgb(121, 189, 235), rgb(123, 197, 244))'}}>
                            <h2 className="about_title">Empowering the Next Generation.</h2>
                            <p>
                                We believe in equipping children with the knowledge and skills they need to confidently face 
                                the challenges of an AI-driven future. Our mission is to make every child academically and mentally
                                robust, arming them with fundamental skills that will be their pillars of strength as they 
                                navigate the modern world.
                            </p>
                            <div className="bg_image ms-lg-auto">
                                <img src={a2} alt="bg-Img" className='img-fluid'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="about_content pt-0"  style={{backgroundImage : 'linear-gradient(to left bottom, rgb(83, 158, 148), rgb(125, 225, 217))'}}>
                            <div className="bg_image mt-0">
                                <img src={a3} alt="bg-Img" className='img-fluid'/>
                            </div>
                            <h2 className="about_title">Bharat SAT: <br /> A Path to Success</h2>
                            <p>
                                One of our significant initiatives is the Bharat SAT, a scientifically designed, 
                                skill-based all-India level scholarship examination. Bharat SAT is not only competitive 
                                but also diagnostic in nature. It plays a crucial role in helping students identify 
                                their strengths and weaknesses, enabling them to improve their skills continually.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="about_content mt-lg-5" style={{backgroundImage : 'linear-gradient(212deg, #FFD058 -2.12%, #FFE094 45.73%, #FFC636 97.77%)'}}>
                            <h2 className="about_title">Join Us on the <br /> Journey</h2>
                            <p>
                                Learn and Achieve is dedicated to enhancing the educational experience of students 
                                across India. We invite you to join us on this
                                remarkable journey to build a brighter future for the next generation. 
                            </p>
                            <div className="bg_image ms-lg-auto">
                                <img src={a4} alt="bg-Img" className='img-fluid'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    
  )
}

export default About