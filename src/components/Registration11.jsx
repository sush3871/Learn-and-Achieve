import React, { useEffect } from 'react'
import Banner from './Banner'
import Button from './home/Button'


function Registration() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  return (
    <>
        <Banner title = 'Student Registration' page ='Student Registration'/>
        <section className='section registration_section' style={{color:'red'}}>
            <div className="container">
                <div className="Main_progress_bar">
                    <div className="d-flex flex-column align-items-center">
                        <div className="progress_bar px-3">
                            <div className="step-1" id='checkout-progress' data-current-step='1'>
                                <div className="progress-bar">
                                    <div className="step step-1 cursor-pointer active">
                                        <img src="src/assets/images/comman/first.svg" className="w-75" alt="" style={{filter: 'brightness(0) saturate(100%) invert(97%) sepia(3%) saturate(2%) hue-rotate(214deg) brightness(117%) contrast(100%)'}}/>
                                    </div>
                                    <div className="step step-2 ">
                                        <img src="src/assets/images/comman/second.svg" className="w-75" alt="" style={{filter: 'brightness(0)'}}/>
                                    </div><div className="step step-3 ">
                                        <img src="src/assets/images/comman/third.svg" className="w-75" alt="" style={{filter: 'brightness(0)'}}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="stepper-labels-container d-flex justify-content-between w-100 gap-3 text-center px-3">
                        <p className="progress-label mb-0 fw-600">
                            Personal Details
                        </p>
                        <p className="progress-label mb-0 fw-600">
                            Contact Details
                        </p>
                        <p className="progress-label mb-0 fw-600">
                            OTP Verification
                        </p>
                    </div>
                    <div className="stepper-bottom-line"></div>
                </div>
                <div className="registration_form">
                    <form action="#!">
                        <h3 className="item_title">Personal Details</h3>
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="mb-4">
                                    <label htmlFor="student_name" className="form-label">First Name</label>
                                    <input type="text" className="form-control" id="student_name" placeholder="Enter your first name"/>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="mb-4">
                                    <label htmlFor="father_name" className="form-label">Middle Name</label>
                                    <input type="text" className="form-control" id="father_name" placeholder="Enter your middle name"/>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="mb-4">
                                    <label htmlFor="student_name" className="form-label">Last Name</label>
                                    <input type="text" className="form-control" id="student_name" placeholder="Enter your last name"/>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="mb-4">
                                    <label htmlFor="DOB" className="form-label">Date Of Birth</label>
                                    <input type="date" className="form-control" id="DOB"/>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="mb-4">
                                    <label htmlFor="DOB" className="form-label" style={{marginBottom: '5px'}}>Gender</label>
                                    <select className="form-select" aria-label="Default select example">
                                        <option defaultValue>Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="mb-4">
                                    <label htmlFor="school_name" className="form-label">School Name</label>
                                    <input type="text" className="form-control" id="school_name" placeholder="Enter your School Name"/>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="mb-4">
                                    <label htmlFor="medium" className="form-label" style={{marginBottom: '5px'}}>Medium</label>
                                    <select className="form-select" aria-label="Default select example">
                                        <option defaultValue>Select Medium</option>
                                        <option value="English">English</option>
                                        <option value="Hindi">Hindi</option>
                                        <option value="Marathi">Marathi</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="mb-4">
                                    <label htmlFor="classes" className="form-label" style={{marginBottom: '5px'}}>Class</label>
                                    <select className="form-select" aria-label="Default select example">
                                        <option defaultValue>Select Class</option>
                                        <option value="10th">10th</option>
                                        <option value="9th">9th</option>
                                        <option value="8th">8th</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-11">
                                <div className="text-end">
                                    <Button name= 'Next'/>
                                </div>
                            </div>
                        </div>
                        <h3 className="item_title">Contact Details</h3>
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="mb-4">
                                    <label htmlFor="student_email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="student_email" placeholder="Enter your email id"/>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="mb-4">
                                    <label htmlFor="student_mobile" className="form-label">Mobile</label>
                                    <input type="text" className="form-control" id="student_mobile" placeholder="Enter your mobile no"/>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="mb-4">
                                    <label htmlFor="student_address_main" className="form-label">Address Line-1</label>
                                    <input type="text" className="form-control" id="student_address_main" placeholder="Enter your address"/>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="mb-4">
                                    <label htmlFor="student_address_alt" className="form-label">Address Line-2</label>
                                    <input type="text" className="form-control" id="student_address_alt" placeholder="Enter your address"/>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="mb-4">
                                    <label htmlFor="State" className="form-label" style={{marginBottom: '5px'}}>State</label>
                                    <select className="form-select" aria-label="Default select example">
                                        <option defaultValue>Select state</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="mb-4">
                                    <label htmlFor="district" className="form-label" style={{marginBottom: '5px'}}>District</label>
                                    <select className="form-select" aria-label="Default select example">
                                        <option defaultValue>Select district</option>
                                        <option value="English">English</option>
                                        <option value="Hindi">Hindi</option>
                                        <option value="Marathi">Marathi</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="mb-4">
                                    <label htmlFor="Taluka" className="form-label" style={{marginBottom: '5px'}}>Taluka</label>
                                    <select className="form-select" aria-label="Default select example">
                                        <option defaultValue>Select taluka</option>
                                        <option value="10th">10th</option>
                                        <option value="9th">9th</option>
                                        <option value="8th">8th</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="mb-4">
                                    <label htmlFor="student_address_alt" className="form-label">Pin Code</label>
                                    <input type="text" className="form-control" id="student_address_alt" placeholder="Enter your pin code"/>
                                </div>
                            </div>
                            <div className="col-11">
                                <div className="text-end">
                                    <Button name= 'Next'/>
                                </div>
                            </div>
                        </div>
                        <h3 className="item_title">OTP Verification</h3>
                        <p>A One-Time Password has been sent to XXXXXXXX83.</p>
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="mb-4">
                                    <label htmlFor="student_OTP" className="form-label">OTP</label>
                                    <div class="otp-input-group">
                                        <input type="text" class="otp-box" maxlength="1"/>
                                        <input type="text" class="otp-box" maxlength="1"/>
                                        <input type="text" class="otp-box" maxlength="1"/>
                                        <input type="text" class="otp-box" maxlength="1"/>
                                        <input type="text" class="otp-box" maxlength="1"/>
                                        <input type="text" class="otp-box" maxlength="1"/>
                                    </div>
                                    <div className="d-flex mt-3 align-items-center justify-content-between">
                                        <div className="otp-time">
                                            <span>02 : 54</span>
                                        </div>
                                        <div className="resend-otp">
                                            <span>Resend OTP</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </>
  )
}

export default Registration