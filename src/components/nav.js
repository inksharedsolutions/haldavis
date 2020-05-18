import React,{useState, useRef} from 'react'
import {Link} from 'gatsby'
import Logo from '../../static/img/logo.png'

const Nav = ()=>{



    const refSpan  = useRef();
	const [toggled, setToggled] = useState(false);

	const pages = [
		 'home',
		 'about-the-author', 
		 'about-the-book', 
		 'contact'
	]	

	let Listed = pages.map((e, i) =>{
 		
		var newUrl = ((e).replace(/[ /]/g,"-").trim().toLowerCase());
        let filterUrl = (newUrl === 'home') ? '/' : newUrl;
        let fNum =  i==0? 'f-num-list' : '';

		return (
			<li>
				<Link 
					to={filterUrl}>
					 <span className={`${fNum} num-list`}>
                         {`0${i+1}.`}
                    </span>    

                     <span className="list-name">
                         {e.replace(/[ /-]/g," ").trim().toLowerCase()}
                    </span>
				</Link>	
			</li>
		)
    })
    

    
    const onClickEvent = (e) =>{
        setToggled(!toggled);

        console.log(toggled);
    }   


    return(
        <>
            <nav className="navigation">
                <div className="logo">
                    <img src={Logo}/>
                </div> 
                 
                <span className="heading-nav">
                    <h1>Hal Davis</h1>
                </span>

                <div className="burger-nav"  onClick={(e)=> onClickEvent(e)} >
                    <span className="span-line-burger"></span>
                    <span className="span-line-burger"></span>
                </div>

                <nav className={toggled ? 'nav-list': 'non-active-nav'}>
                    
                    <div className="x-mark" onClick={(e)=>onClickEvent(e)}>
                        <span className="span-line-burger"></span>
                        <span className="span-line-burger"></span>
                    </div>

                    <ul>

                        <p className="list-label">
                            Navigations.
                        </p>
                        
                        {
                            Listed
                        }

                    </ul>
                </nav>
            </nav>
        </>
        
    )
 }

 export default Nav;