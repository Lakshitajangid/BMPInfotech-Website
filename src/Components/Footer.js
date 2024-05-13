import React from 'react'
import instagram from '../img/icons/instagram (1).png'
import twitter from '../img/icons/twitter.png'
import linkedin from '../img/icons/linkedin (1).png'
import facebook from '../img/icons/facebook.png'
const Footer = () => {
  return (
    
    <div>


        <footer id="footer">
          <div className='container'>
            <div class="footer">
                <div class="ftr-contents">
                    <div class="or-services">
                        <h2>Our Services</h2>
                        <div class="or-services-content">
                            <p><a href="">Web Design</a></p>
                            <p><a href="">Web Development</a></p>
                            <p><a href="">Product Management</a></p>
                            <p><a href="">Marketing</a></p>
                            <p><a href="">Graphic Design</a></p>
                        </div>
                    </div>
                        <div class="use-services">
                            <h2>Userful Links</h2>
                            <div class="or-useful-content">
                                <p><a href="#home">Home</a></p>
                                <p><a href="#about">About us</a></p>
                                <p><a href="#services">Services</a></p>
                                <p><a href="#">Terms of service</a></p>
                                <p><a href="#">Privacy policy</a></p>
                            </div>
                        </div>
                        <div class="or-social-net">
                            <h2>Our Social Networks</h2>
                            <div class="or-social-net-content">
                                <p>Join our social network and connect with like-minded individuals who share your interests and passions.</p>
                                <div class="s-icons">
                                    <li> <a href="https://www.facebook.com/profile.php?id=100094465759566&mibextid=ZbWKwL"><img src={facebook} alt="" /></a></li>
                                    <li> <a href="https://instagram.com/bmpinfotech?igshid=MzNlNGNkZWQ4Mg=="><img src={instagram} alt="" /></a></li>
                                    <li> <a href="https://www.linkedin.com/company/bmp-infotech-group"><img src={linkedin} alt="" /></a></li>
                                    <li> <a href="https://twitter.com/Bmp_Infotech?t=lrd8X0E03c1MfWxoQ7s23w&s=09"><img src={twitter} alt="" /></a></li>
                                </div>
                            </div>
                        </div>
                     <div class="bmp-info-tech">
                        <h2>BMP-INFOTECH</h2>
                        <p>Jaipur</p>
                        <p>Rajasthan,Zip 302031</p>
                        <p>INDIA</p><br/>
                        <p><b>Phone: </b>+91 7229984997</p>
                        <p><b>Email: </b>infotechbmp003@gmail.com</p>
                    </div>
                </div>
              </div>
          </div>
        </footer>
         <div className='l-footer'>
                  <p>@copyright BMP-INFOTECH(Group of Technology). All rights Reserved</p>
          </div>
    </div>

  )
}

export default Footer;