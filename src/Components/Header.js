import React from 'react'
import cancel from '../img/icons/xmark1.png';
import bar from '../img/icons/wbar.png';


const Header = () => {
  return (
    <div className='first-image'>

      <div className='header-image'>
        <div className="header-titles">
          <h2>Empowering innovation, connecting the world</h2>
          <p className='color-white'>Our mission is to help our clients achieve their goals by leveraging the power of technology</p>
        </div>
      </div>
      <section id='home'>
        <header id='home'>

          <div className='main-header'>
            <div className='nav-bar flex '>
              <div className='bmp-heading'>
                <h1> BMP-INFOTECH</h1>
              </div>
              <div className="navbar-section flex">
                <div className='navbar-items-1 active-home'><a href="#home">Home</a></div>
                <div className='navbar-items-2'><a href="#about">About</a></div>
                <div className='navbar-items-3'><a href="#services">Services</a></div>
                <div className='navbar-items-3'><a href="#portfolio">Portfolio</a></div>
                <div className='navbar-items-4'><a href="#team">Team</a></div>
                <div className='tech-menu'>Technical support
                  <div className='sub-tech-menu'>
                    <ul>
                      <li>Our Work</li>
                      <li className='tw'> Technical work</li>
                    </ul>
                  </div>
                  <div className='sub-sub-tech-menu'>
                    <ul>
                      <li>Web-development</li>
                      <li>Network Security</li>
                      <li>Machine Learning</li>
                      <li>Research</li>
                      <li>Development</li>
                    </ul>
                  </div>
                </div>
                <div className='navbar-items-5'><a href="#contact">Contact-Us</a></div>
              </div>
            </div>
          </div>


          <input type="checkbox" id="check" />
          <label for="check">
            <img src={bar} alt="" className='check-btn' id='btn' />
            <img src={cancel} id="cancel" alt="" />
            <img src="" alt="" />
          </label>
          <div class="slide-bar">
            <h2>BMP-INFOTECH</h2>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href='#about'>About</a></li>
              <li><a href="#services">services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#contact">Contact-Us</a></li>
            </ul>
          </div>

        </header>
      </section>
    </div>
  )
}

export default Header;