import React from "react"
import { Link } from "gatsby"
import Nav from '../components/nav'
import Banner from '../components/banner'
import UpperMain from '../components/upper-main'
import MidMain from '../components/mid-content'
import Main from '../components/main'
import LowerMain from '../components/lower-main'
import BottomMain from '../components/bottom-main'
import Footer from '../components/footer'

const IndexPage = () => (
    <>  

        <div className="strips">
            <div className="s-one"></div>
            <div className="s-two"></div> 
            <div className="s-three"></div>
        </div> 
         
        <Nav/>
        <Banner/>
        <UpperMain/>
        <MidMain/>
        <Main/>
        <LowerMain/>
        <BottomMain/>
        <Footer/>
    
    </> 
) 

export default IndexPage
