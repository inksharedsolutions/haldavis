import React from 'react'
import {Link} from 'gatsby'
import '../assets/scss/footer.scss'
import {faTwitter, faInstagram, faFacebook, faGoodreads } from '@fortawesome/fontawesome-free-brands'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = ()=>{


    const pages = [
		'Home',
		'About-the-Author', 
		'About-the-Book', 
		'Contact'
   ]
   
	let Listed = pages.map((e) =>{
 		
		var newUrl = ((e).replace(/[ /]/g,"-").trim().toLowerCase());
		let filterUrl = (newUrl === 'home') ? '/' : newUrl;
		const nwList = e.replace(/[/-]/g," ").trim();

		return (
			<li>
				<Link 
					to={filterUrl}>
					{nwList}
				</Link>
			</li>
		)
    })
    
    return(
        <>

         <footer className="footer-section">
				<div className="container">

					<div className="columns navlist-footer-column">
						<div className="column text-center trademark-heading">

							<div className="logo-footer-container">

								<span className="images-portray">
									<h1>HD.</h1>
								</span>
							</div>
						
							<p>
								Hal Davis loves to hear from readers. You can reach him via email. 
								Feel free to send questions about writing, his works, interviews 
								and other publicity matters.
							</p>

						</div>

						<div className="column">
							<nav className="footer-nav-list">
								{Listed}
							</nav>	
						</div>
					</div>

					<div className="columns lower-info-container">
						<div className="column footer-lower-info">
							<span className="footer-copyright">

								<span className="footer-year">{
									( new Date() ).getFullYear()
								}</span>

								&#169; Copyright. Stratton press
							</span>
	
						 	<span class="lower-nav-footer">
								<li>
									<Link to={'privacy-policy'}>
										Privacy Policy
									</Link>

									<Link to={'terms-and-conditions'}>
										Terms & Conditions
									</Link>
								</li>
								<li></li>
						 	</span>
							
						</div>
						
						<div className="column text-center trademark-heading">
							<nav id="style_soc_medias">

								<a
									href="https://www.facebook.com/Hal-Davis-109176304148408/"
									target="_blank"
									rel="noopener noreferrer" >

									<FontAwesomeIcon
										className='font-awesome'
										icon={faFacebook} />
								</a>

								<a
									href="https://twitter.com/strattonpress/"
									target="_blank"
									rel="noopener noreferrer">

									<FontAwesomeIcon
										className='font-awesome'
										icon={faTwitter} />
								</a>

								<a 
									href="https://www.instagram.com/strattonpress/"
									target="_blank"
									rel="noopener noreferrer">

									<FontAwesomeIcon
										className='font-awesome'
										icon={faInstagram} />
								</a>

								<a 
									href="https://www.goodreads.com/book/show/53218906-from-an-out-house-to-the-white-house?from_search=true&from_srp=true&qid=1zHoyFUymt&rank=1"
									target="_blank"
									rel="noopener noreferrer">

									<FontAwesomeIcon 
										className='font-awesome'
										icon={faGoodreads} />
								</a>

							</nav>
						</div>
					</div>  

				</div>			        
			</footer>

        
        </>
    )
}

export default Footer;