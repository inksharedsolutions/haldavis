import React from 'react'


const Testimonial = (props)=>{

    return(
        <>

        <div className="grid-testimonals-container">
            <p>
                {props.content}
            </p>

            <div className="grid-cont">
                <span className="linear-ft"></span>
                <span className="year">{props.year}</span>
            </div>
        </div>
       
    </>
    )
}

export default Testimonial