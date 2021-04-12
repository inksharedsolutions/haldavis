import React from 'react'

import { useStaticQuery, graphql } from "gatsby"
import Parser from 'html-react-parser';

import Layout from '../components/layout'
import Banner from '../components/o-pages/banner'
import { Helmet } from 'react-helmet';

const Pp = () =>{

	const FetchMarkDown = useStaticQuery(graphql`
		 query PrivacyPolicyPageQuery  {
			  markdownRemark(fileAbsolutePath: {regex: "/privacy-policy.md/" }) {
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
				<Helmet title="Hal Davis | Privacy Policy"/>
                <Banner 
                    spanFirst={`Privacy`}
                    contextHeading={`Policy`} 
                />

	 			<div className="container">
					<div id="privacy-policy-content">
	 					<div className="">
							 {Parser(data.html)}
						</div>
 					</div>
 				</div>
	 		</Layout>
		</>
	)
}

export default Pp;