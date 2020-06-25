import React from 'react'


const Reviews = (props)=>{

    return(
        <>

        <div className="grid-testimonals-container" >
            <div className="grid-cont">
                <span className="year">{props.title}</span>
            </div>

            <p>
                {props.content}
            </p>
            <br/><br/><br/>
            <div className="grid-cont">
                <span className="linear-ft"></span>
            </div>
            <br/><br/><br/>
        </div>
       
    </>
    )
}

export default Reviews