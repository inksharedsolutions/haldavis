import React from 'react'
import {Link} from 'gatsby';
import Book1 from '../../static/img/book_1.jpg'
import Book2 from '../../static/img/book_2.jpg'

const LowerMain = () =>{
    return(
        <>
        <div className="content-container">
            <secton className="lower-main">
                
                <h1 className="heading-lower-main">
                    Featured Book
                </h1>


                <div className="wrapper-ups">
                    <div className="lower-content section-two-col-grid">
                        <div className="content-wrapper-ft">
                            
                            <span className="fb-num left-span">
                                <span>01</span>
                            </span>

                            <h1>
                                Beyond the Mountains and Across
                                the Seas: Over 50 Years of Romanticizing Travel
                            </h1>

                            <p>
                                Hal Davis is a distinguished US Marine (Ret.) with a career that spanned twenty-two years.
                                In his heart, service is for a lifetime
                            </p>

                            
                            <div className="btn-container">
                                <Link to="">
                                    Read More
                                </Link>
                                <span class="long-arrow-right"></span>
                            </div>

                        </div>

                        <div className="img-book-container">
                            <img src={Book1}/>
                        </div>
                    </div>


                    <div className="lower-content section-two-col-grid">

                        <div className="img-book-container overlap">
                            <img src={Book2}/>
                        </div>

                        <div className="content-wrapper-ft">
                            <span className="fb-num right-span">
                                <span>02</span>
                            </span>

                            <h1>
                               From an Out House to the White House:
                               And Then Some
                            </h1>

                            <p>
                                With over five decades of service to his country,
                                Hal is certainly not a man to be easily detoured or dissuaded from his mission.
                                This book is a real testament of how long-suffering, perseverance, loyalty, 
                                integrity, and patriotism.
                            </p>

                            
                            <div className="btn-container">
                            <span class="long-arrow-left"></span>
                                <Link className="" to="">
                                    Read More
                                </Link>
                            </div>

                        </div>
                    </div>

                </div>

            </secton>
         </div>
        </>
    )
}

export default LowerMain