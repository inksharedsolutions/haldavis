import React, {useEffect} from 'react'
import Author from '../../static/img/author.png'
import { TweenMax, TimelineMax, Timeline, gsap } from "gsap";



const Main = ()=>{



    useEffect(() => {
  
        window.addEventListener('scroll',  scrollHandler);

        return ()=>{
            window.removeEventListener('scroll', scrollHandler);
        }

    },[]);


    const scrollHandler = (event)=>{
         if ( window.pageYOffset > 1400 ){
            const tl  = new TimelineMax();
            tl.to('.wrapper-author-image img',
                {clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" });
        }
    }


    return(
        <>
            <section className="main-content">
                <div className="content-container">
                    <div className="author-section section-two-col-grid">

                        <div className="wrapper-author-image">
                            <img src={Author} />
                        </div>

                        <div className="contents"  data-aos="fade-up" data-aos-duration="3000">
                            <p>
                                Hal Davis is a distinguished US Marine(Ret.) 
                                with a career that spanned twenty-two years.
                                In his heart, serviceis for a lifetime.
                            </p>
                            <span className="authorName">Hal Davis</span>
                            <span className="authorTag">Author & Writer</span>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}


export default Main;