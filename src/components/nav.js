import React from 'react'


const Nav = ()=>{
    return(
        <>
            <nav className="navigation">
                <div className="logo">
                    <img src="#"/>
                </div> 
                 
                <span className="heading-nav">
                    <h1>Hal Davis</h1>
                </span>

                <div className="burger-nav">
                    <span className="span-line-burger"></span>
                    <span className="span-line-burger"></span>
                </div>
            </nav>
        </>
        
    )
 }

 export default Nav;