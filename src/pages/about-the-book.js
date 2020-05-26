import React from 'react'
import { DiscussionEmbed } from "disqus-react"
import Layout from '../components/layout'
import Banner from '../components/o-pages/banner'
import BookInfo  from '../components/book-info/book-info'
import Book1 from '../../static/img/book_1.jpg'
import Book2 from '../../static/img/book_2.jpg'

const ATB = (props)=>{

    const slug =(props.location.href);

	const disqusConfig = {
	  shortname: 'hal-davis',
	  config: { identifier:  12, slug}
	}
    

    return(
        <>
        <Layout>
            <Banner 
                spanFirst={`About the`}
                contextHeading={`Book`} 
            />  

			<main className="wrapperMain">
				<div className='container'>
                    
                    <BookInfo  
                        data={{
                            title:`From An Outhouse to the White House`,
                            spanTitle: 'And Then Some',
                            imgSrc: Book2,
                            content:
                            `With over five decades of service to his country, 
                            Hal is certainly not a man to be easily detoured or dissuaded from his mission. 
                            This book is a real testament of how long-suffering, perseverance, loyalty, 
                            integrity, and patriotism. Hal's wit and humor which he never outgrew even until 
                            today, allowed him to associate with highly recognized and well-established people. 
                            His life really began after he was kicked out by his father. He had a bitter 
                            childhood that continued well into his teens, but everything changed after he
                            became a member of the United States Marine Corps. His success was not given
                            to him on a silver platter, it was definitely a roller-coaster adventure. I lived,
                            I laughed, I cried, I loved, I fell, and I rose yet again. From an Outhouse to the
                            White House, and Then Some, will show you just how he did it.`,

                            ebooks:{
                                stratton : 'https://www.stratton-press.com/books/from-an-out-house-to-the-white-house-and-then-some/',
                                barnes: 'https://www.barnesandnoble.com/w/from-an-out-house-to-the-white-house-hal-davis/1136867362?ean=9781648950179',
                                amazon :'https://www.amazon.com/Out-House-White-Then-Some-ebook/dp/B0875KQW9Q/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1588017993&sr=8-1', 
                            },
                            paperback:{
                                amazon:'https://www.amazon.com/Out-House-White-Then-Some/dp/1648950159/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1588017993&sr=8-1',
                                barnes:'https://www.barnesandnoble.com/w/from-an-out-house-to-the-white-house-hal-davis/1136867362?ean=9781648950155',
                                booksamillion:'https://www.booksamillion.com/p/From-Out-House-White/Hal-Davis/9781648950155?id=7714171848832',
                            }
                        }}
                    />

                    <BookInfo  
                        data={{
                            title:`Beyond The Mountains And Across The Seas`,
                            spanTitle: 'Over 50 years of Romanticizing Travel',
                            imgSrc: Book1,
                            content:
                            `Hal Davis is a distinguished US Marine (Ret.) with a career that spanned twenty-two years.
                            In his heart, service is for a lifetime. He grew up in Knoxville Tennessee, 
                            and life back then was never easy. Deprived of all the good things that a childhood
                            normally brings, he remained steadfast in reaching his goals. He became a Tennessee State Trooper,
                            FBI Special Investigator, United States Secret Service Agent to two US presidents (Nixon and Ford),
                            and a Marine and Naval Criminal Investigator.
                            
                            Hal is currently serving as a Knox County Sheriff’s Deputy. He had a fulfilling fifty-threeyear career,
                            but more than that, Hal is a loving husband to Susan and a father-hero figure to Allison, 
                            who’s now their guardian angel in heaven. He is also the author of From an Outhouse to the
                            White House, and Then Some.`,

                            ebooks:{
                                stratton : 'https://www.stratton-press.com/books/beyond-the-mountains-and-across-the-seas-over-50-years-of-romanticizing-travel/',
                                barnes: 'https://www.barnesandnoble.com/w/beyond-the-mountains-and-across-the-seas-hal-davis/1136867361?ean=9781648950148',
                                amazon :'https://www.amazon.com/Beyond-Mountains-Across-Seas-Romanticizing-ebook/dp/B0875T5BJQ/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1589582810&sr=8-1', 
                            },
                            paperback:{
                                amazon:'https://www.amazon.com/Beyond-Mountains-Across-Seas-Romanticizing/dp/1648950124/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1589582810&sr=8-1',
                                barnes:'https://www.barnesandnoble.com/w/beyond-the-mountains-and-across-the-seas-hal-davis/1136867361?ean=9781648950124',
                                booksamillion:'https://www.booksamillion.com/p/Beyond-Mountains-Across-Seas/Hal-Davis/9781648950124?id=7714171848832',
                            }
                        }}

                    />

							
                    <div className="commentSection" >
                        <DiscussionEmbed {...disqusConfig} />
                    </div>
				</div>	
			</main>

	  	</Layout>
        </>
    );  
}

export default ATB;