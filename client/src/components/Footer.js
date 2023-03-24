import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
  } from 'react-icons/fa';

const Footer = () => {
    return ( 
        <>
        <div className='container-footer'>
            <div className='row-footer'>
                <h4>Main Menu</h4>
                <p>About US</p>
                <p>Admissions</p>
                <p>School Uniform</p>
                <p>Carrer</p>
                <p>FAQ's</p>
                <p>Blogs</p>
            </div>
            <div className='row-footer'>
                <h4>Useful Links</h4>
                <p>Transport Policy</p>
                <p>School Song</p>
                <p>Social Outreach</p>
                <p>Download Brochure</p>
                <p>Sitemap</p>
            </div>
            <div className='row-footer'>
                <h4>Contact Us</h4>
                <p>Mahatma Gandhi Road 40721 India</p>
                <p>+91 6225 0098 12</p>
                <p>kidzee@kidzee.com</p>
            </div>
            <div className='container-footer-left'>
                <div className='logo-footer'>
                    <h1>LOGO</h1>
                </div>
                <div className="social-icons">
                    <FaFacebook/>
                    <FaInstagram/>
                    <FaTwitter/>
                    <FaLinkedin/>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Footer;