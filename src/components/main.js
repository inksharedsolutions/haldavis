import React from 'react'
import Author from '../../static/img/author.png'

const Main = ()=>{
    return(
        <>
        <section className="main-content">
            <div className="content-container">
                <div className="author-section section-two-col-grid">

                    <div className="wrapper-author-image">
                        <img src={Author} />
                    </div>

                    <div className="contents">
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