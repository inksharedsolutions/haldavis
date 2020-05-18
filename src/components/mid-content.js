import React from 'react';


const MidContent = ()=>{
    return(
        <>
         <div className="content-container">
            <section className="mid-content section-two-col-grid">
            
                    <div className="event-heading">
                        <h1 data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine">
                                
                            <span className="tagline-wr">
                                <span></span>
                                <span>Life</span>
                            </span>

                            <h1>Events</h1>
                            <p>
                                He had done so much and traveled so 
                                much in his life before he met me
                            </p>
                        </h1>
                    </div>

                    <div className="event-date-wrappers">
                        <div className="event-ft" data-aos="fade-up" >
                            <span>01</span>
                            <h5>Book Conference in Javit Center NYC</h5>
                            <p>July 25-26, 2020</p>
                        </div>

                        <div className="event-ft"  data-aos="fade-up">
                            <span>02</span>
                            <h5>Frankfurt International Book Fair</h5>
                            <p>July 25-26, 2020</p>
                        </div>
                    </div> 
            
            </section>
        </div>
        </>
    )
}

export default MidContent;