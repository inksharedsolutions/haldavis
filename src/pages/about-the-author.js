import React from 'react'
import Layout from '../components/layout'
import Banner from '../components/o-pages/banner'
import AuthorImg from '../../static/img/author.png'
import Img1 from '../../static/author/1.jpg'
import Img2 from '../../static/author/2.jpg'

const ATA  = ()=>{
    return(
        <>
         <Layout>

                <Banner 
                    spanFirst={`About the`}
                    contextHeading={`Author`} 
                />

                <div className="container">
				    <section className="body-author-contents columns">
                        <div className="column">
                            <div className="heading-quote">

                                <div className="author-image-container">
                                    <img src={AuthorImg} />
                                    <span className="author-name">
                                        <span className="author-span-ft">Author |  Writer </span>
                                        Hal Davis
                                    </span>
                                </div>

                                <h4>
                                    Come on you feather merchants, 
                                    sucker up buttercup
                                </h4>

                                <span className="ata-span-fx">author quote</span>
                            </div>
                        </div>

                        <div className="column">
                            <article className="article-section">

                                <p>
                                    Hal Davis is a distinguished US Marine (Ret.) With a career that spanned twenty-two years.
                                    In his heart, service is for a lifetime. He grew up in Morehead, Kentucky, 
                                    and life back then was never easy. Deprived of all the good things that a childhood normally brings,
                                    I've remained steadfast in reaching his goals. He became a Tennessee State Trooper, FBI Special Investigator,
                                    United States Secret Service Agent to two US presidents, and a Marine and Naval Criminal Investigator.
                                    He had a fulfilling fifty-three year career, but more than that, Hal is a loving husband to Susan and 
                                    a father-hero figure to Allison, who's now their guardian angel in heaven.
                                </p>
                            </article>
                        </div>
                    </section>

                     <div className="grid-images-author">
                        <div className="author-img">
                            <img src={Img1}/>
                        </div>

                        <div className="author-img">
                            <img src={Img2}/>
                        </div>
                    </div>

                </div>
         </Layout>
        </>
    );  
}

export default ATA;
