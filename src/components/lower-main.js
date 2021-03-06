import React, {useEffect} from 'react'
import {Link} from 'gatsby';
import Book1 from '../../static/img/book_1.jpg'
import Book2 from '../../static/img/book_2.jpg'
import { TweenMax, TimelineMax, Timeline, gsap } from "gsap";

const LowerMain = () =>{

    const tl  = new TimelineMax();

    
    useEffect(() => {
  
        window.addEventListener('scroll',  scrollHandler);

        return ()=>{
            window.removeEventListener('scroll', scrollHandler);
        }

    },[]);


    const scrollHandler = (event)=>{

         if ( window.pageYOffset > 2000 ){

            tl.to('.first-book img', 1,
                {clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" })
              .to('.second-book img', 1,
                {clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" });
                
            
        }
        
    }       



    return(
        <>
        <div className="content-container">
            <secton className="lower-main">
                
                <h1 className="heading-lower-main">
                    Featured Book
                </h1>


                <div className="wrapper-ups">
                    <div className="lower-content section-two-col-grid">
                        <div 
                            className="content-wrapper-ft" 
                             data-aos="fade-up"
                             data-aos-duration="3000">
                            
                            <span className="fb-num left-span">
                                <span>01</span>
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
                                    <Link className="arrow-ft-r" to="/about-the-book">
                                        Read More
                                    </Link>
                                </div>
                            </div>

                             <div className="first-book img-book-container">
                                <img src={Book2}/>
                        </div>
                    </div>

                    <div className="lower-content section-two-col-grid">
                        <div className="second-book img-book-container overlap">
                            <img src={Book1}/>
                        </div>

                        <div className="content-wrapper-ft"
                             data-aos="fade-up"
                             data-aos-duration="3000">
                            <span className="fb-num right-span">
                                <span>02</span>
                            </span>

                              <h1>
                                  Beyond the Mountains and Across
                                  the Seas: Over 50 Years of Romanticizing Travel
                              </h1>

                              <p>
                                To put one's travel life into proper perspective can be like teetering on the edge of history. 
                                To have lived it, I was totally ensconced in parts of the events that became monumental worldwide.
                              </p>

                                <div className="btn-container">
                                    <Link to="/about-the-book">
                                        Read More
                                    </Link>
                                <span class="long-arrow-right"></span>
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