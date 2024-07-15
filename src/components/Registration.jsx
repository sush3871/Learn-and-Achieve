import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import Button from './home/Button';

import f1 from '../assets/images/comman/first.svg';
import f2 from '../assets/images/comman/second.svg';
import f3 from '../assets/images/comman/third.svg';



function Registration() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        dob: '',
        gender: '',
        schoolName: '',
        medium: '',
        class: '',
        email: '',
        mobile: '',
        address1: '',
        address2: '',
        state: '',
        district: '',
        taluka: '',
        pinCode: ''
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentStep]);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleNextStep = (e) => {
        e.preventDefault(); // Prevent form submission
        console.log('Current Step:', currentStep);
        console.log('Form Data:', formData);

        if (validateForm()) {
            setCurrentStep((prevStep) => prevStep + 1);
        } else {
            alert('Please fill all the required fields');
        }
    };

    const validateForm = () => {
        if (currentStep === 1) {
            return (
                formData.firstName &&
                formData.lastName &&
                formData.dob &&
                formData.gender &&
                formData.schoolName &&
                formData.medium &&
                formData.class
            );
        }
        if (currentStep === 2) {
            return (
                formData.email &&
                formData.mobile &&
                formData.address1 &&
                formData.state &&
                formData.district &&
                formData.taluka &&
                formData.pinCode
            );
        }
        return true;
    };

    return (
        <>
            <Banner title='Student Registration' page='Student Registration' />
            <section className='section registration_section' style={{ color: 'red' }}>
                <div className="container">
                    <div className="Main_progress_bar">
                        <div className="d-flex flex-column align-items-center">
                            <div className="progress_bar px-3">
                                <div className="step-1" id='checkout-progress' data-current-step={currentStep}>
                                    <div className="progress-bar">
                                        <div className={`step step-1 cursor-pointer ${currentStep >= 1 ? 'active' : ''}`}>
                                            <img src={f1} className="w-75" alt="" style={{ filter: 'brightness(0) saturate(100%) invert(97%) sepia(3%) saturate(2%) hue-rotate(214deg) brightness(117%) contrast(100%)' }} />
                                        </div>
                                        <div className={`step step-2 ${currentStep >= 2 ? 'active' : ''}`}>
                                            <img src={f2} className="w-75" alt="" style={{ filter: 'brightness(0)' }} />
                                        </div>
                                        <div className={`step step-3 ${currentStep >= 3 ? 'active' : ''}`}>
                                            <img src={f3} className="w-75" alt="" style={{ filter: 'brightness(0)' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="stepper-labels-container d-flex justify-content-between w-100 gap-3 text-center px-3">
                            <p className="progress-label mb-0 fw-600">Personal Details</p>
                            <p className="progress-label mb-0 fw-600">Contact Details</p>
                            <p className="progress-label mb-0 fw-600">OTP Verification</p>
                        </div>
                        <div className="stepper-bottom-line"></div>
                    </div>
                    <div className="registration_form">
                        <form onSubmit={handleNextStep}>
                            {currentStep === 1 && (
                                <>
                                    <h3 className="item_title">Personal Details</h3>
                                    <div className="row">
                                        <div className="col-12 col-md-6 col-lg-4">
                                            <div className="mb-4">
                                                <label htmlFor="firstName" className="form-label">First Name</label>
                                                <input type="text" className="form-control" id="firstName" placeholder="Enter your first name" value={formData.firstName} onChange={handleInputChange} required />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-4">
                                            <div className="mb-4">
                                                <label htmlFor="middleName" className="form-label">Middle Name</label>
                                                <input type="text" className="form-control" id="middleName" placeholder="Enter your middle name" value={formData.middleName} onChange={handleInputChange} />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-4">
                                            <div className="mb-4">
                                                <label htmlFor="lastName" className="form-label">Last Name</label>
                                                <input type="text" className="form-control" id="lastName" placeholder="Enter your last name" value={formData.lastName} onChange={handleInputChange} required />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-4">
                                            <div className="mb-4">
                                                <label htmlFor="dob" className="form-label">Date Of Birth</label>
                                                <input type="date" className="form-control" id="dob" value={formData.dob} onChange={handleInputChange} required />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-4">
                                            <div className="mb-4">
                                                <label htmlFor="gender" className="form-label" style={{ marginBottom: '5px' }}>Gender</label>
                                                <select className="form-select" id="gender" value={formData.gender} onChange={handleInputChange} required>
                                                    <option value="">Select Gender</option>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-4">
                                            <div className="mb-4">
                                                <label htmlFor="schoolName" className="form-label">School Name</label>
                                                <input type="text" className="form-control" id="schoolName" placeholder="Enter your School Name" value={formData.schoolName} onChange={handleInputChange} required />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-4">
                                            <div className="mb-4">
                                                <label htmlFor="medium" className="form-label" style={{ marginBottom: '5px' }}>Medium</label>
                                                <select className="form-select" id="medium" value={formData.medium} onChange={handleInputChange} required>
                                                    <option value="">Select Medium</option>
                                                    <option value="English">English</option>
                                                    <option value="Hindi">Hindi</option>
                                                    <option value="Marathi">Marathi</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-4">
                                            <div className="mb-4">
                                                <label htmlFor="class" className="form-label" style={{ marginBottom: '5px' }}>Class</label>
                                                <select className="form-select" id="class" value={formData.class} onChange={handleInputChange} required>
                                                    <option value="">Select Class</option>
                                                    <option value="10th">10th</option>
                                                    <option value="9th">9th</option>
                                                    <option value="8th">8th</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-11">
                                            <div className="text-end">
                                                <div className="btn_group">
                                                    <div className="button_wrapper">
                                                        <button type="submit" className="main-btn">
                                                            <span>Next</span>
                                                            <span className="dot"></span>
                                                            <span className="curve">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="42" viewBox="0 0 43 42" fill="none">
                                                                    <path d="M16 26C15.2 14 5 3.66667 0 0H43.5L43 42C35 31.5 21.5 27 16 26Z" fill="#F6821F">
                                                                    </path>
                                                                </svg>
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                            {currentStep === 2 && (
                                <>
                                    <h3 className="item_title">Contact Details</h3>
                                    <div className="row">
                                        <div className="col-12 col-md-6 col-lg-4">
                                            <div className="mb-4">
                                                <label htmlFor="email" className="form-label">Email</label>
                                                <input type="email" className="form-control" id="email" placeholder="Enter your email id" value={formData.email} onChange={handleInputChange} required />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-4">
                                            <div className="mb-4">
                                                <label htmlFor="mobile" className="form-label">Mobile</label>
                                                <input type="text" className="form-control" id="mobile" placeholder="Enter your mobile no" value={formData.mobile} onChange={handleInputChange} required />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-4">
                                            <div className="mb-4">
                                                <label htmlFor="address1" className="form-label">Address Line-1</label>
                                                <input type="text" className="form-control" id="address1" placeholder="Enter your address" value={formData.address1} onChange={handleInputChange} required />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-4">
                                            <div className="mb-4">
                                                <label htmlFor="address2" className="form-label">Address Line-2</label>
                                                <input type="text" className="form-control" id="address2" placeholder="Enter your address" value={formData.address2} onChange={handleInputChange} />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-4">
                                            <div className="mb-4">
                                                <label htmlFor="state" className="form-label" style={{ marginBottom: '5px' }}>State</label>
                                                <select className="form-select" id="state" value={formData.state} onChange={handleInputChange} required>
                                                    <option value="">Select state</option>
                                                    <option value="State1">State1</option>
                                                    <option value="State2">State2</option>
                                                    <option value="State3">State3</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-4">
                                            <div className="mb-4">
                                                <label htmlFor="district" className="form-label" style={{ marginBottom: '5px' }}>District</label>
                                                <select className="form-select" id="district" value={formData.district} onChange={handleInputChange} required>
                                                    <option value="">Select district</option>
                                                    <option value="District1">District1</option>
                                                    <option value="District2">District2</option>
                                                    <option value="District3">District3</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-4">
                                            <div className="mb-4">
                                                <label htmlFor="taluka" className="form-label" style={{ marginBottom: '5px' }}>Taluka</label>
                                                <select className="form-select" id="taluka" value={formData.taluka} onChange={handleInputChange} required>
                                                    <option value="">Select taluka</option>
                                                    <option value="Taluka1">Taluka1</option>
                                                    <option value="Taluka2">Taluka2</option>
                                                    <option value="Taluka3">Taluka3</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-4">
                                            <div className="mb-4">
                                                <label htmlFor="pinCode" className="form-label">Pin Code</label>
                                                <input type="text" className="form-control" id="pinCode" placeholder="Enter your pin code" value={formData.pinCode} onChange={handleInputChange} required />
                                            </div>
                                        </div>
                                        <div className="col-11">
                                            <div className="text-end">
                                                <div className="btn_group">
                                                    <div className="button_wrapper">
                                                        <button type="submit" className="main-btn">
                                                            <span>Next</span>
                                                            <span className="dot"></span>
                                                            <span className="curve">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="42" viewBox="0 0 43 42" fill="none">
                                                                    <path d="M16 26C15.2 14 5 3.66667 0 0H43.5L43 42C35 31.5 21.5 27 16 26Z" fill="#F6821F">
                                                                    </path>
                                                                </svg>
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                            {currentStep === 3 && (
                                <>
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
                                        <div className="col-11">
                                            <div className="text-end">
                                                <div className="btn_group">
                                                    <div className="button_wrapper">
                                                        <button type="submit" className="main-btn">
                                                            <span>Submit</span>
                                                            <span className="dot"></span>
                                                            <span className="curve">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="42" viewBox="0 0 43 42" fill="none">
                                                                    <path d="M16 26C15.2 14 5 3.66667 0 0H43.5L43 42C35 31.5 21.5 27 16 26Z" fill="#F6821F">
                                                                    </path>
                                                                </svg>
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Registration;
