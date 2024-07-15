import React from 'react'
import Button from './Button';
import line from '../../assets/images/home/cta-line.png';
import bgVector from '../../assets/images/home/bg-vector.png';
import studentGirl from '../../assets/images/home/student-girl.png';
function Cta() {
   
  return (
    <section className='home_cta'>
        <div className="d-flex flex-column flex-lg-row">
            <div className="line_image w-100">
                <img src={line} alt="cta_line" className="img-fluid" />
            </div>
            <div className="d-flex justify-content-center w-100 align-items-center">
                <div className="cta_content">
                    <h2 className="cta_title">Lorem ipsum dolor </h2>
                    <p className="cta_desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Button name= 'Get start now'/>
                </div>
            </div>
            <div className="d-flex decoration_wrap w-100 mt-5 mt-md-0">
                <div className="vector_img deco_item_1">
                    <img src={bgVector} alt="cta_line" className="img-fluid" />
                </div>
                <div className="girl-img deco_item_2">
                    <img src={studentGirl} alt="cta_line" className="img-fluid" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Cta