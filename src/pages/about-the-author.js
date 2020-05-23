import React from 'react'
import Layout from '../components/layout'
import Banner from '../components/o-pages/banner'
import AuthorImg from '../../static/img/author.png'

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
                                    Gardiner Noble is a retired electrical engineer who spent forty years in the automobile.
                                    He is the inventor of the coil-on-plug ignition system, which is used in most cars manufactured
                                    around the world. He has written several books: One, Silken Thomas Fitzgerald 
                                    (Henry the Eighth's Irish Thorn), Beliefs, and The Gleeful Banker. 
                                    He is in the process of writing a serious book that explains why the human body ages.
                                </p>
                            
                            </article>
                        </div>
                    </section>
                </div>
         </Layout>
        </>
    );  
}

export default ATA;
