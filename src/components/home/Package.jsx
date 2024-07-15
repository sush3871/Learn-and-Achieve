import React from 'react'
import Slider from 'react-slick';

// Import CSS files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home_slick from './Home_slick';

import P1 from '../../assets/images/home/package_1.png';
import P2 from '../../assets/images/home/package_2.png';
import P3 from '../../assets/images/home/package_3.png';

function Package() {


    const images = [
        P1,
        P2,
        P3
      ];

    // Custom Arrows 

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style}}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style}}
            onClick={onClick}
          />
        );
      }

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "0px",
        slidesToShow: 3,
        speed: 500,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            infinite: true,
            }
        },
        {
            breakpoint: 992,
            settings: {
            slidesToShow: 2,
            }
        },
        {
            breakpoint: 767,
            settings: {
            slidesToShow: 1,
            dots : true
            }
        }
        ]
      };

      const tabs = [
        { id: "class_2", label: "Class 2" },
        { id: "class_3", label: "Class 3" },
        { id: "class_4", label: "Class 4" },
        { id: "class_5", label: "Class 5" },
        { id: "class_6", label: "Class 6" },
        { id: "class_7", label: "Class 7" },
        { id: "class_8", label: "Class 8" },
        { id: "class_9", label: "Class 9" },
        { id: "class_10", label: "Class 10" },
        { id: "class_11", label: "Class 11" },
        { id: "class_12", label: "Class 12" },
    ];
  return (
    <section className='section home_package'>
        <div className="container">
            <div className="section_heading text-center">
                <h3 className='heading_title'>Featured Packages</h3>
                <p className='text-center'>Learn and Achieve is dedicated to enhancing the educational experience of students across India.</p>
            </div>

            <div className="class_tabs">
                <div className="row">
                    <div className="col-lg-10 m-auto">
                        <div className="d-block d-md-none">
                            {/* Mobile view dropdown */}
                            <select className="form-select" onChange={(e) => document.querySelector(`#${e.target.value}-tab`).click()}>
                                {tabs.map(tab => (
                                    <option key={tab.id} value={tab.id}>{tab.label}</option>
                                ))}
                            </select>
                        </div>
                        <ul className="nav nav-tabs d-none d-md-flex" id="myTab" role="tablist">
                            {tabs.map((tab, index) => (
                                <li className="nav-item" role="presentation" key={tab.id}>
                                    <button
                                        className={`nav-link ${index === 0 ? 'active' : ''}`}
                                        id={`${tab.id}-tab`}
                                        data-bs-toggle="tab"
                                        data-bs-target={`#${tab.id}-pane`}
                                        type="button"
                                        role="tab"
                                        aria-controls={`${tab.id}-pane`}
                                        aria-selected={index === 0}
                                    >
                                        {tab.label}
                                    </button>
                                </li>
                            ))}
                            </ul>
                    </div>
                </div>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="class_2-pane" role="tabpanel" aria-labelledby="class_2" tabIndex="0">
                        <div className="slider-container">
                            <Slider {...settings}>
                                <div>
                                    <Home_slick imageUrl={images[0]}/>
                                </div>
                                <div>
                                    <Home_slick imageUrl={images[1]}/>
                                </div>
                                <div>
                                    <Home_slick imageUrl={images[2]}/>
                                </div>
                                <div>
                                    <Home_slick imageUrl={images[0]}/>
                                </div>
                                <div>
                                    <Home_slick imageUrl={images[1]}/>
                                </div>
                                <div>
                                    <Home_slick imageUrl={images[2]}/>
                                </div>
                            </Slider>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="class_3-pane" role="tabpanel" aria-labelledby="class_3" tabIndex="0">
                      <div className="slider-container">
                        <Slider {...settings}>
                            <div>
                                <Home_slick imageUrl={images[0]} discount_price='399' actual_price='699'/>
                            </div>
                            <div>
                                <Home_slick imageUrl={images[1]} discount_price='399' actual_price='699'/>
                            </div>
                            <div>
                                <Home_slick imageUrl={images[2]} discount_price='399' actual_price='699'/>
                            </div>
                            <div>
                                <Home_slick imageUrl={images[0]} discount_price='399' actual_price='699'/>
                            </div>
                            <div>
                                <Home_slick imageUrl={images[1]} discount_price='399' actual_price='699'/>
                            </div>
                            <div>
                                <Home_slick imageUrl={images[2]} discount_price='399' actual_price='699'/>
                            </div>
                        </Slider>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="class_4-pane" role="tabpanel" aria-labelledby="class_4" tabIndex="0">
                      <div className="slider-container">
                        <Slider {...settings}>
                            <div>
                                <Home_slick imageUrl={images[0]}  discount_price='499' actual_price='799'/>
                            </div>
                            <div>
                                <Home_slick imageUrl={images[1]}  discount_price='499' actual_price='799'/>
                            </div>
                            <div>
                                <Home_slick imageUrl={images[2]}  discount_price='499' actual_price='799'/>
                            </div>
                            <div>
                                <Home_slick imageUrl={images[0]}  discount_price='499' actual_price='799'/>
                            </div>
                            <div>
                                <Home_slick imageUrl={images[1]}  discount_price='499' actual_price='799'/>
                            </div>
                            <div>
                                <Home_slick imageUrl={images[2]}  discount_price='499' actual_price='799'/>
                            </div>
                        </Slider>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="class_5-pane" role="tabpanel" aria-labelledby="class_5" tabIndex="0">
                      <div className="slider-container">
                        <Slider {...settings}>
                            <div>
                                <Home_slick imageUrl={images[0]}  discount_price='599' actual_price='899'/>
                            </div>
                            <div>
                                <Home_slick imageUrl={images[1]}  discount_price='599' actual_price='899'/>
                            </div>
                            <div>
                                <Home_slick imageUrl={images[2]}  discount_price='599' actual_price='899'/>
                            </div>
                            <div>
                                <Home_slick imageUrl={images[0]}  discount_price='599' actual_price='899'/>
                            </div>
                            <div>
                                <Home_slick imageUrl={images[1]}  discount_price='599' actual_price='899'/>
                            </div>
                            <div>
                                <Home_slick imageUrl={images[2]}  discount_price='599' actual_price='899'/>
                            </div>
                        </Slider>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="class_6-pane" role="tabpanel" aria-labelledby="class_6" tabIndex="0">
                      <div className="slider-container">
                        <Slider {...settings}>
                            <div>
                                <Home_slick imageUrl={images[0]}  discount_price='699' actual_price='999'/>
                            </div>
                            <div>
                                <Home_slick imageUrl={images[1]}  discount_price='699' actual_price='999'/>
                            </div>
                            <div>
                                <Home_slick imageUrl={images[2]}  discount_price='699' actual_price='999'/>
                            </div>
                            <div>
                                <Home_slick imageUrl={images[0]}  discount_price='699' actual_price='999'/>
                            </div>
                            <div>
                                <Home_slick imageUrl={images[1]}  discount_price='699' actual_price='999'/>
                            </div>
                            <div>
                                <Home_slick imageUrl={images[2]}  discount_price='699' actual_price='999'/>
                            </div>
                        </Slider>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="class_7-pane" role="tabpanel" aria-labelledby="class_7" tabIndex="0">
                      <div className="slider-container">
                        <Slider {...settings}>
                            <div>
                                <Home_slick imageUrl={images[0]}  discount_price='799' actual_price='1099'/>
                            </div>
                            <div>
                                <Home_slick imageUrl={images[1]}  discount_price='799' actual_price='1099'/>
                            </div>
                            <div>
                                <Home_slick imageUrl={images[2]}  discount_price='799' actual_price='1099'/>
                            </div>
                            <div>
                                <Home_slick imageUrl={images[0]}  discount_price='799' actual_price='1099'/>
                            </div>
                            <div>
                                <Home_slick imageUrl={images[1]}  discount_price='799' actual_price='1099'/>
                            </div>
                            <div>
                                <Home_slick imageUrl={images[2]}  discount_price='799' actual_price='1099'/>
                            </div>
                        </Slider>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="class_8-pane" role="tabpanel" aria-labelledby="class_8" tabIndex="0">
                      <div className="slider-container">
                        <Slider {...settings}>
                            <div>
                                <Home_slick imageUrl={images[0]}  discount_price='899' actual_price='1199'/>
                            </div>
                            <div>
                                <Home_slick imageUrl={images[1]}  discount_price='899' actual_price='1199'/>
                            </div>
                            <div>
                                <Home_slick imageUrl={images[2]}  discount_price='899' actual_price='1199'/>
                            </div>
                            <div>
                                <Home_slick imageUrl={images[0]}  discount_price='899' actual_price='1199'/>
                            </div>
                            <div>
                                <Home_slick imageUrl={images[1]}  discount_price='899' actual_price='1199'/>
                            </div>
                            <div>
                                <Home_slick imageUrl={images[2]}  discount_price='899' actual_price='1199'/>
                            </div>
                        </Slider>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="class_9-pane" role="tabpanel" aria-labelledby="class_9" tabIndex="0">
                      <div className="slider-container">
                        <Slider {...settings}>
                            <div>
                                <Home_slick imageUrl={images[0]}  discount_price='999' actual_price='1299'/>
                            </div>
                            <div>
                                <Home_slick imageUrl={images[1]}  discount_price='999' actual_price='1299'/>
                            </div>
                            <div>
                                <Home_slick imageUrl={images[2]}  discount_price='999' actual_price='1299'/>
                            </div>
                            <div>
                                <Home_slick imageUrl={images[0]}  discount_price='999' actual_price='1299'/>
                            </div>
                            <div>
                                <Home_slick imageUrl={images[1]}  discount_price='999' actual_price='1299'/>
                            </div>
                            <div>
                                <Home_slick imageUrl={images[2]}  discount_price='999' actual_price='1299'/>
                            </div>
                        </Slider>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="class_10-pane" role="tabpanel" aria-labelledby="class_10" tabIndex="0">
                      <div className="slider-container">
                        <Slider {...settings}>
                            <div>
                                <Home_slick imageUrl={images[0]}  discount_price='999' actual_price='1399'/>
                            </div>
                            <div>
                                <Home_slick imageUrl={images[1]}  discount_price='999' actual_price='1399'/>
                            </div>
                            <div>
                                <Home_slick imageUrl={images[2]}  discount_price='999' actual_price='1399'/>
                            </div>
                            <div>
                                <Home_slick imageUrl={images[0]}  discount_price='999' actual_price='1399'/>
                            </div>
                            <div>
                                <Home_slick imageUrl={images[1]}  discount_price='999' actual_price='1399'/>
                            </div>
                            <div>
                                <Home_slick imageUrl={images[2]}  discount_price='999' actual_price='1399'/>
                            </div>
                        </Slider>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="class_11-pane" role="tabpanel" aria-labelledby="class_11" tabIndex="0">
                      <div className="slider-container">
                        <Slider {...settings}>
                            <div>
                                <Home_slick imageUrl={images[0]}  discount_price='1199' actual_price='1499'/>
                            </div>
                            <div>
                                <Home_slick imageUrl={images[1]}  discount_price='1199' actual_price='1499'/>
                            </div>
                            <div>
                                <Home_slick imageUrl={images[2]}  discount_price='1199' actual_price='1499'/>
                            </div>
                            <div>
                                <Home_slick imageUrl={images[0]}  discount_price='1199' actual_price='1499'/>
                            </div>
                            <div>
                                <Home_slick imageUrl={images[1]}  discount_price='1199' actual_price='1499'/>
                            </div>
                            <div>
                                <Home_slick imageUrl={images[2]}  discount_price='1199' actual_price='1499'/>
                            </div>
                        </Slider>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="class_12-pane" role="tabpanel" aria-labelledby="class_12" tabIndex="0">
                      <div className="slider-container">
                        <Slider {...settings}>
                            <div>
                                <Home_slick imageUrl={images[0]}  discount_price='1299' actual_price='1599'/>
                            </div>
                            <div>
                                <Home_slick imageUrl={images[1]}  discount_price='1299' actual_price='1599'/>
                            </div>
                            <div>
                                <Home_slick imageUrl={images[2]}  discount_price='1299' actual_price='1599'/>
                            </div>
                            <div>
                                <Home_slick imageUrl={images[0]}  discount_price='1299' actual_price='1599'/>
                            </div>
                            <div>
                                <Home_slick imageUrl={images[1]}  discount_price='1299' actual_price='1599'/>
                            </div>
                            <div>
                                <Home_slick imageUrl={images[2]}  discount_price='1299' actual_price='1599'/>
                            </div>
                        </Slider>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Package


