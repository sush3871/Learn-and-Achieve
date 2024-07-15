import React, { useEffect } from 'react';
import Banner from './Banner';

import s1 from '../assets/images/services/1.png';
import s2 from '../assets/images/services/2.png';
import s3 from '../assets/images/services/3.png';
import s4 from '../assets/images/services/4.png';
import s5 from '../assets/images/services/5.png';


const services = [
  {
    img: s1,
    title: "Empowering Students with Free E-Learning Services",
    desc: "At Learn and Achieve, our mission is to empower students, parents, and educators with free services that foster learning and growth. We understand the importance of quality education, and to that end, we offer a range of services to support K12 students. Our YouTube channel, filled with educational content, is just a click away. In addition, we provide direct links to YouTube videos and insightful blogs that cater to the diverse needs of students, ensuring that they have the resources they need to excel in their studies.",
    bgColor: "#F6FFD2"
  },
  {
    img: s2,
    title: "Charting Your Path: Free Career Guidance",
    desc: "The journey to a successful career can be daunting, especially for students navigating the transition from school to work. Learn and Achieve offers free career guidance services to help students make informed choices about their future. Our experts provide invaluable insights and advice, empowering students to make confident decisions about their career paths, ultimately leading them toward a brighter, more fulfilling future.",
    bgColor: "#DAFFFF"
  },
  {
    img: s3,
    title: "Supporting Every Learner: Special Education and Remedial Services",
    desc: "We believe in an inclusive education system, and that's why Learn and Achieve offers free special education and remedial services. For children who require additional support, our psychiatric services are designed to address their unique needs. Our team of professionals is dedicated to helping every child reach their full potential, ensuring that no student is left behind.",
    bgColor: "#FFE8E8"
  },
  {
    img: s4,
    title: "Aim High: Guiding You to Success in Competitive Examinations",
    desc: "Success in competitive examinations can open doors to various opportunities. Learn and Achieve is here to guide you on this journey. We provide expert guidance and resources to help you prepare for these challenging exams, making sure you have the knowledge and confidence you need to excel.",
    bgColor: "#FFF5DA"
  },
  {
    img: s5,
    title: "Join Us in the Pursuit of Knowledge",
    desc: "At Learn and Achieve, we are committed to promoting the pursuit of knowledge and supporting students, parents, and educators. Our free services, ranging from e-learning resources and career guidance to special education and competitive examination support, are designed to empower individuals on their educational journeys. Join us in the pursuit of excellence and unleash your potential with Learn and Achieve.",
    bgColor: "#CFFFD1"
  }
];

const ServiceItem = ({ img, title, desc, bgColor, isServiceItem2 }) => (
  <div className="col-md-12">
    <div className={`${isServiceItem2 ? 'service_item2' : 'service_item'} mb-4 mb-lg-0`} >
      <div className="service_img mb-3 mb-lg-0">
        <img src={img} alt="service_image" className="img-fluid" />
      </div>
      <div className="service_content" style={{ backgroundColor: bgColor }}>
        <h2 className="item_title">{title}</h2>
        <p className="item_desc mb-0">{desc}</p>
      </div>
    </div>
  </div>
);

function Service() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Banner title="Services" page="Services" />
      <section className="section service_section pb-100">
        <div className="container">
          <div className="row">
            {services.map((service, index) => (
              <ServiceItem
                key={index}
                img={service.img}
                title={service.title}
                desc={service.desc}
                bgColor={service.bgColor}
                isServiceItem2={index % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Service;
