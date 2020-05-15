import React from 'react'
import Nav from './nav';
import Banner from './o-pages/banner'
import Footer from './footer'

const  Layout = (props)=>{
    return(
        <>
         <Nav/>
            {props.children}
         <Footer/>
        </>
    )
}

export default Layout;