import React, {useEffect}  from 'react'
import Banner from './Banner'

function Terms() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  return (
    <>

        <Banner title='Terms and conditions' page='Terms and conditions' />
        <section className='section bharatsat_section'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-11 m-auto">
                        <div className="section_heading">
                            <h3 className='heading_title text-center mb-3'>Terms and conditions</h3>
                        </div>
                    </div>
                </div>
                <div className="terms_conditions_content">
                    <div className="content_wrapper">
                        <h4 className="info_title"> Minimum Participation Requirement</h4>
                        <p>
                            District-level participation must consist of a minimum of 1100 students in each 
                            class/grade to qualify for the scholarship program.
                        </p>
                    </div>
                    <div className="content_wrapper">
                        <h4 className="info_title"> Honest Examination Conduct</h4>
                        <p>
                            Participating students are required to take the exam with utmost honesty and sincerity, 
                            adhering to ethical standards throughout the assessment.
                        </p>
                    </div>
                    <div className="content_wrapper">
                        <h4 className="info_title"> Flexibility in Exam Venue</h4>
                        <p>
                            Students have the liberty to take the examination from their homes or any other location of their 
                            choice with a stable internet connection.
                        </p>
                    </div>
                    <div className="content_wrapper">
                        <h4 className="info_title">Personal Devices</h4>
                        <p>
                            Participants must utilize their own devices—smartphones, tablets, laptops, or desktop computers—to 
                            take the exam.
                        </p>
                    </div>
                    <div className="content_wrapper">
                        <h4 className="info_title">Examination Format</h4>
                        <p>
                            The online exam will be conducted for 200 marks, with merit rank holders further undergoing a 100 marks 
                            personal interview at a designated venue by the Learn and Achieve Edutech team.
                        </p>
                    </div>
                    <div className="content_wrapper">
                        <h4 className="info_title">Scholarship Disbursement</h4>
                        <p>
                            Scholarship amounts will be disbursed on a monthly basis, 
                            directly into the scholarship holders' bank accounts via money transfer.
                        </p>
                    </div>
                    <div className="content_wrapper">
                        <h4 className="info_title">Exclusively Online Exam</h4>
                        <p>
                            The examination will solely be conducted online; no pen-and-paper tests will be administered.
                        </p>
                    </div>
                    <div className="content_wrapper">
                        <h4 className="info_title">Preparation Material Access</h4>
                        <p>
                            Learn and Achieve Edutech will provide preparation materials in the form of a Question Bank and mock tests,
                            accessible to students on their digital dashboard. These packages for respective grades will be
                            available for purchase at prices determined by the Learn and Achieve Edutech team.
                        </p>
                    </div>
                    <div className="content_wrapper">
                        <h4 className="info_title">Question Composition</h4>
                        <p>
                            There is a guarantee that 80% of the questions will be sourced from the provided Question Bank, 
                            while the remaining 20% will be based on the respective grade syllabus, including higher difficulty levels
                        </p>
                    </div>

                    <div className="content_wrapper">
                        <h4 className="info_title"> Eligibility Criteria</h4>
                        <p>
                            Students must fulfill all eligibility criteria set forth by the BHARAT SAT EXAMINATION to qualify for scholarships.
                        </p>
                    </div>
                    
                    <div className="content_wrapper">
                        <h4 className="info_title"> Fair Examination Policy</h4>
                        <p>
                            Any form of cheating, plagiarism, or unethical behavior during the examination will result in disqualification and potential legal actions.
                        </p>
                    </div>
                    
                    <div className="content_wrapper">
                        <h4 className="info_title">Validity of Results</h4>
                        <p>
                            The examination results declared by Learn and Achieve Edutech will be final and binding.
                        </p>
                    </div>
                    
                    <div className="content_wrapper">
                        <h4 className="info_title">Exam Duration</h4>
                        <p>
                            The duration of the online exam will be predefined and adhered to strictly.
                        </p>
                    </div>
                    
                    <div className="content_wrapper">
                        <h4 className="info_title"> Participation Fee</h4>
                        <p>
                            There is a participation fee applicable for registering and taking the examination.
                        </p>
                    </div>
                    
                    <div className="content_wrapper">
                        <h4 className="info_title">Code of Conduct</h4>
                        <p>
                            Participants are expected to maintain decorum and adhere to the code of conduct specified by Learn and Achieve Edutech throughout the examination process.
                        </p>
                    </div>
                    
                    <div className="content_wrapper">
                        <h4 className="info_title">Verification Process</h4>
                        <p>
                            All information provided by participants will be subject to verification, and any discrepancy may lead to disqualification.
                        </p>
                    </div>
                    
                    <div className="content_wrapper">
                        <h4 className="info_title">Confidentiality</h4>
                        <p>
                            Participants must not disclose any exam-related information or content to others, ensuring the confidentiality of the examination process.
                        </p>
                    </div>
                    
                    <div className="content_wrapper">
                        <h4 className="info_title"> Technical Requirements</h4>
                        <p>
                            Participants are responsible for ensuring their devices meet the technical specifications required for the online examination.
                        </p>
                    </div>
                    <div className="content_wrapper">
                        <h4 className="info_title"> Compliance with Guidelines</h4>
                        <p>
                            Students must adhere to all instructions, guidelines, and terms outlined by Learn and Achieve Edutech before, during, and after the examination.
                        </p>
                    </div>
                    <div className="content_wrapper">
                        <h4 className="info_title">Modification of Terms</h4>
                        <p>
                            Learn and Achieve Edutech reserves the right to modify, update, or change any terms and conditions related to the Bharat SAT Examination and its rewards program at its discretion.
                        </p>
                    </div>
                    <p className='mt-3'>
                        <b>
                            These terms and conditions aim to ensure fairness, transparency, and integrity throughout the BHARAT SAT EXAMINATION and its associated rewards program.
                        </b>
                    </p>
                </div>
            </div>
        </section>
    </>
  )
}

export default Terms