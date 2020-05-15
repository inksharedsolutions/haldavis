import React from 'react'

import { useStaticQuery, graphql } from "gatsby"
import Parser from 'html-react-parser';

import Layout from '../components/layout'
import Banner from '../components/o-pages/banner'

const TaC = () =>{

	const FetchMarkDown = useStaticQuery(graphql`
		 query TermsAndConditionsPageQuery  {
			  markdownRemark(fileAbsolutePath: {regex: "/terms-and-condition.md/" }) {
			    frontmatter {
			      author 
			      date
			      title
			    }
			    html
			}
		}
	`)

	const data = {...FetchMarkDown.markdownRemark};


	return(
	 	<>
	 		<Layout>
                    <Banner 
                            spanFirst={`Terms And`}
                            contextHeading={`Conditions`} 
                    />

	 				<div className="container">
						<div id="terms-and-conditions-content">
							<div className="">{Parser(data.html)}</div>
							
						</div>
					</div>
	 		</Layout>
	 	</>
	)
}


export default TaC;