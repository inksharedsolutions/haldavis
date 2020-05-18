import React, {useRef, useEffect} from 'react'
import Mountain from '../../static/img/mountain_ft.png'
import Parallax from 'parallax-js'

const Banner = ()=>{

    const headingRef = useRef(null);
    const refText = useRef(null);

    // useEffect(
    //     () => {  

    //         var scene = refText.current.querySelector('#scene');
    //         var parallaxInstance = new Parallax(refText.current, {
    //             relativeInput: true
    //         });

    //         parallaxInstance.friction(0.05, 0.05);
    //     },
    // [refText.current]);

    useEffect(
        () => {  
            const element = headingRef.current.querySelector('.heading-banner');
            const letters= (element.textContent);
            element.innerHTML ='';
            
            letters.split('').map(e=>{
                var node = document.createElement("span");
                var textnode = document.createTextNode(e);
                node.appendChild(textnode);
                element.appendChild(node);
            })
        },
        [headingRef.current],
    );
    

    return (
        <>
            <section className="banner-section">
                <div className="banner-wrapper" ref={headingRef}>
                    
                    <div className="img-wrapper" id="scene"> 
                        <img  
                            alt="mountain" 
                            src={Mountain} 
                        />
                    </div> 

                    <h6 className="first-heading">
                        <span>Beyond</span>
                        <span className="span-italice">The</span>
                    </h6>

                    <div id="scene" 
                         className="text-heading-wrapper"
                         ref={refText}>

                        <h1 data-depth="0.2"
                            className="heading-banner">
                            Mountains
                        </h1>
                    </div>

                    <h6 className="bottom-heading-bn">
                        <span className="span-italice">And</span> 
                        <span>Across</span>
                        <span className="span-italice">The</span> 
                        <span>Seas</span>
                    </h6>

                    <div className="ellipse">
                        <div className="ellipse-inner"></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner;