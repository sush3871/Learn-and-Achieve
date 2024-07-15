import React, {useEffect} from 'react'
import Banner from './Banner'
function Faq() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  return (
    <>

        <Banner title='Frequently Asked Questions' page='Frequently Asked Questions' />
        <section className='section bharatsat_section'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-11 m-auto">
                        <div className="section_heading">
                            <h3 className='heading_title text-center mb-3'>Frequently Asked questions</h3>
                        </div>
                    </div>
                </div>
                <div className="class_tabs pt-3">
                    <div className="row">
                        <div className="col-lg-10 m-auto">
                            <ul className="nav justify-content-center gap-4 nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="General" data-bs-toggle="tab" data-bs-target="#General-pane" type="button" role="tab" aria-controls="General-pane" aria-selected="true">GENERAL</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="tab-content mt-5" id="Faq_tab">
                        <div className="tab-pane fade show active" id="General-pane" role="tabpanel" aria-labelledby="General" tabIndex="0">
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <a className="accordion-button"  data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        What is Learn and Achieve Edutech Project?
                                    </a>
                                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Learn and Achieve is an educational initiative aimed at providing innovative learning solutions to students across India.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <a className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        What is भारत SAT, and how does it benefit students?
                                    </a>
                                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Bharat SAT is an All India level examination for 5th to 10th students that combines competition and diagnostics to foster skill development, offer scholarships, and identify potential.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <a className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Who is eligible to participate in Bharat SAT?
                                    </a>
                                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Bharat SAT is open to students from 1st to 12th standard, making it inclusive for all.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <a className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#FAQ-4" aria-expanded="false" aria-controls="FAQ-4">
                                        How can I register for Bharat SAT?
                                    </a>
                                    <div id="FAQ-4" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Registration details and instructions can be found on the Bharat SAT page of our website.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <a className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#FAQ-5" aria-expanded="false" aria-controls="FAQ-5">
                                        What are the awards and scholarships provided by Bharat SAT?
                                    </a>
                                    <div id="FAQ-5" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Information about the awards and scholarships can be found in a separate section on the Bharat SAT page.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <a className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#FAQ-6" aria-expanded="false" aria-controls="FAQ-6">
                                        Is Bharat SAT only a competitive examination, or does it have educational value?
                                    </a>
                                    <div id="FAQ-6" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Bharat SAT serves both as a competitive and diagnostic examination, providing a holistic learning experience.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <a className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#FAQ-7" aria-expanded="false" aria-controls="FAQ-7">
                                        How can Learn and Achieve help improve my child's education?
                                    </a>
                                    <div id="FAQ-7" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Learn and Achieve offers a range of educational resources, including Bharat SAT, to enhance your child's learning journey.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <a className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#FAQ-8" aria-expanded="false" aria-controls="FAQ-8">
                                        Are there any fees associated with Bharat SAT registration?
                                    </a>
                                    <div id="FAQ-8" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Details regarding registration fees are available on the Bharat SAT registration page.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <a className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#FAQ-9" aria-expanded="false" aria-controls="FAQ-9">
                                        How can I prepare for Bharat SAT?
                                    </a>
                                    <div id="FAQ-9" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            We provide preparation materials and resources to help students excel in Bharat SAT. Details will be available soon.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <a className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#FAQ-10" aria-expanded="false" aria-controls="FAQ-10">
                                        What subjects and topics are covered in Bharat SAT?
                                    </a>
                                    <div id="FAQ-10" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            The examination covers a wide range of subjects and topics. A syllabus overview can be found on the Bharat SAT page.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <a className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#FAQ-11" aria-expanded="false" aria-controls="FAQ-11">
                                        When is the Bharat SAT conducted?
                                    </a>
                                    <div id="FAQ-11" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            The schedule for the Bharat SAT is published annually on the official website and is subject to changes.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <a className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#FAQ-12" aria-expanded="false" aria-controls="FAQ-12">
                                        Is there a specific date for Bharat SAT examination?
                                    </a>
                                    <div id="FAQ-12" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Information about examination dates and schedules can be found on the Bharat SAT page and the official calendar.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <a className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#FAQ-13" aria-expanded="false" aria-controls="FAQ-13">
                                        How are the Bharat SAT winners announced and recognized?
                                    </a>
                                    <div id="FAQ-13" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            The winners are announced on our website, and they receive recognition at District, State, and National levels.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <a className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#FAQ-14" aria-expanded="false" aria-controls="FAQ-14">
                                        Is Learn and Achieve affiliated with any educational institutions or boards?
                                    </a>
                                    <div id="FAQ-14" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Learn and Achieve operates independently but collaborates with educational partners to enhance the learning experience.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <a className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#FAQ-15" aria-expanded="false" aria-controls="FAQ-15">
                                        How can I contact Learn and Achieve for additional information or support?
                                    </a>
                                    <div id="FAQ-15" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Contact details, including email and phone numbers, are provided on our Contact Us page for your convenience.
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

export default Faq