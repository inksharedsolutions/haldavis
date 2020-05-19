/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import  {useEffect} from 'react'
import './src/assets/scss/style.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';


/* disable AOS disable*/

AOS.init({
    disable: function() {
      var maxWidth = 950;
      return window.innerWidth < maxWidth;
    }
});

console.log(window.innerWidth)