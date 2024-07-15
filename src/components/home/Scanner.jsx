import React from 'react'

import mobile from '../../assets/images/home/mobile.png';
import scanner from '../../assets/images/home/scanner_img.png';
import play from '../../assets/images/home/play.png';
import app from '../../assets/images/home/app.png';

function Scanner() {
  return (
    
    <section className='section bg-grey scanner_section pb-100'>
        <div className="container">
            <div className="text-center" style={{marginBottom: '100px'}}>
                <div className="section_heading text-center d-none d-lg-block">
                    <h2 className="heading_subtitle">
                        <span>Learn about us</span>
                    </h2>
                    <h3 className="heading_title">We can Add a Section for Downloading Our App</h3>
                    <p className="mb-0">Learn and Achieve is dedicated to enhancing the educational experience of students across India.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-10 m-auto">
                    <div className="content_box decoration_wrap">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="mobile_img position-relative">
                                    <img src={mobile} alt="Home_mobile" className="img-fluid" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="wrapper_box">
                                    <h2 className="heading">Learn free on the App</h2>
                                    <p className="text-light">
                                        Download free lessons and leam any-lime, anywhere from the free
                                        courses available on our app
                                    </p>
                                </div>
                                <div className="scanner_box d-flex p-4 p-md-0  flex-lg-row align-items-lg-end gap-3">
                                    <div className="scanner_image e1">
                                        <img src={scanner} alt="scanner_img" className="img-fluid" />
                                    </div>
                                    <span className="or text-light e1">OR</span>
                                    <div className="play_store_img e1">
                                        <img src={play} alt="scanner_img" className="img-fluid" />
                                    </div>
                                    <div className="app_store_img e1">
                                        <img src={app} alt="scanner_img" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Scanner