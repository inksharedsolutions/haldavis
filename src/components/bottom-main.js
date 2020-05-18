import React from 'react'
import Testimonial from './testimonial'

const BottomReact = ()=>{
    return(
        <>
             <div className="content-container">
                <section className="testimonial-main">
                    <div className="testimonial-content section-two-col-grid">

                        <div className="testimonial-info">
                            <Testimonial 
                                content={`
                                    Selected top article chosen for leather
                                    Neck Magazine. The Magazine of the Marines`
                                }
                                year={`1986`}
                            />

                            <Testimonial 
                                content={`NBC Interview by the anchor, John Becker`}
                                year={`2015`}
                            />

                            <Testimonial 
                                content={`The City View Magazine Knoxville article`}
                                year={`2016`}
                            />
                        </div>

                        <div className="testimonial-container-head"
                             data-aos="fade-up"
                             data-aos-duration="3000">
                            
                            <span class="tagline-wr"><span></span><span className="cw-ft">Hal Davis</span></span>
                            <h1>
                                <span>Testi</span>
                                <span>monials.</span>
                            </h1>

                        </div>

                    </div>
                </section>
            </div>
        </>
    )

}

export default BottomReact