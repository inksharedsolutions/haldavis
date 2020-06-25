import React from 'react'
import Layout from '../components/layout'
import Banner from '../components/o-pages/banner'
import Testimonial from '../components/testimonial'
import Review from '../components/reviews'

const TaR  = ()=>{

    return(
        <>
         <Layout>

                <Banner 
                    spanFirst={`Testimonials and`}
                    contextHeading={`Reviews`}
                />

                <div className="container">
				    <section className="body-reviews columns">
                        <div className="column">
                                <h1>Testimonials</h1>
                                <Testimonial 
                                    content={`Knoxville’s Community Radio Show - Interviewing People of Interest `}
                                    year={`2019`}
                                />
                                <Testimonial 
                                    content={`Military Monday Interview `}
                                    year={`2017`}
                                />
                                <Testimonial 
                                    content={`The City View Magazine Knoxville article`}
                                    year={`2016`}
                                />
                                <Testimonial 
                                    content={`NBC Interview by the anchor, John Becker`}
                                    year={`2015`}
                                />
                                <Testimonial 
                                    content={`
                                        Selected top article chosen for leather
                                        Neck Magazine. The Magazine of the Marines`
                                    }
                                    year={`1986`}
                                />
                        </div>
                    </section>
				    <section className="body-reviews columns">
                        <div className="column">
                            <h1>Reviews</h1>
                            <Review 
                                title={`Outstanding book.`}
                                content={`I found this book through Susan Davis, a high school classmate.
                                This is her husband's story.
                                I moved from our little town and lost touch with many of our classmates but we reconnected on Facebook. When she mentioned her husband had written a book, I knew I wanted to read it.
                                When I read about the life Hal was born into I felt so sorry for him. Reading about his struggles, you would have thought he wouldn't have made it out. I giggled at some of his antics, when he started talking about being a State Trooper in Tennessee, I could see it. Working with State Troopers for 30+ years, I've heard stories like it before and it brought a smile or cringe.
                                This book is a great read about a boy that thought he would never have a chance to a man I would like to have my back as a friend. `}
                            />
                            <Review 
                                title={`A Must Read.`}
                                content={`I read this book and I want my son to read it as well and so should anyone who is going through any rough time in their life. Hal Davis’ story is an inspiration to always strive to do better no matter the circumstances. Just like the title “From an outhouse to the White House...” he came from nothing to accomplish so much.

This young generation should read this book and learn not to let anything keep them down and out. Learn like Hal to find that inner strength and look for better never settling for less. – Julio J. `}
                            />
                            <Review 
                                title={`Fantastic read.`}
                                content={`There is a quote that really stuck out to me, which was "There is no bond stronger than that which is forged in adversity". Hal's entire story was forged in and from adversity, and his incredible perseverance and passion for service took him all over the globe. This is a book anyone, military or not, can pick up and easily learn from. It shows that no matter what background you come from, and as long as you have integrity and unwavering grit, you will accomplish something special in your life.

                                The story is both heartbreaking and inspiring, and I highly recommend it. `}
                            />
                            <Review 
                                title={`A great read and highly recommended.`}
                                content={`Like the major league rookie baseball player, who, at his first time at bat, hits a home run, so it is for first time author Hal Davis.
                                His well-written earthy style carries us on his journey from a poverty level childhood to guarding the leader of free world.
                                After escaping the draconian environment dominated by his father, Hal shows the results of ambition, dedication and discipline. From the rigors of boot camp in the Marines, facing the enemy in Vietnam, guarding the president of the United States, riding alone on dangerous highways as a state trooper, he finally goes back to the Corps. A life of adventure, excitement, and satisfaction brings him to a rest with his wife Susan in his home looking out over the Great Smokey Mountains. Sadly, he does not have his daughter Allison to enjoy this part of his life, but keeps her in his memory. - Tammy McReynolds `}
                            />
                            <Review 
                                title={`Excellent Book!!!!`}
                                content={`An excellent read from start to finish!!!! Hal Davis is a great American and Patriot and has led a truly remarkable life. It is the story of a young man rising from the grips of a childhood with Draconian laws to enduring some of the most challenging training in our military to become a United States Marine. Hal then moved on to become a Secret Service agent and a State Trooper. This is a truly inspiring story that goes to show you can accomplish anything you set your mind to. `}
                            />
                        </div>
                    </section>
                </div>
         </Layout>
        </>
    );  
}

export default TaR;
