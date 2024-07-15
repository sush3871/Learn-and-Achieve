import React from 'react'
import { Link } from 'react-router-dom'

function Banner({title =  'Page Heading',  page = 'Page Name' , desc}) {
  return (
    <section className="page_banner">
        <div className="container decoration_wrap">
            <div className="row">
                <div className="col-md-7">
                    <div className="page_wrapper ms-lg-5">
                        <p className='mb-0 text-light'>{desc}</p>
                        <h1 className="page_title">{title}</h1>
                        <nav className='breadcrumb_wrapper ' aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">{page}</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}


export default Banner