import React from 'react'
import why from '../img/why-us.png'

export const Afterabout1 = () => {
  return (
    <section id='afterabout1'>
    <div className='why-us-container'>
      <div className='why-us-row'>
        <div className='why-us-content'>
          <div className='why-us-content-heading'>
            <h3>Why BMP-INFOTECH <strong>we are committed to delivering exceptional customer service and support.</strong></h3>
            <p>Our mission at BMP Infotech Group is to provide top-quality IT services and solutions to businesses of all sizes.</p>
          </div>
          <div className='accordian-list'>
            <ul>
              <li className='dropdown'>
                01 Why choose BMP Infotech Group?
                <div className='dropdown-content'>
                  <p> BMP Infotech Group has over 20 years of experience in the IT industry, delivering top-quality IT solutions and services to businesses of all sizes. We have a team of experts who stay up-to-date with the latest industry trends and technologies, 
                    and work closely with clients to develop customized solutions that meet their unique needs.</p>
                </div>
              </li>
              <li className='dropdown'>
                02What sets BMP Infotech Group apart from the competition?
                <div className='dropdown-content'>
                  <p>Experience and Expertise: BMP Infotech Group has a team of highly experienced professionals with a wealth of knowledge and expertise in various fields of technology. Our team members have worked
                     on numerous projects and have a proven track record of delivering quality solutions.</p>
                </div>
              </li>
              <li className='dropdown'>
                03 How can BMP Infotech Group help my business succeed?
                <div className='dropdown-content'>
                  <p>BMP Infotech Group can help your business succeed by providing you with cutting-edge IT solutions and services that are tailored to your specific needs. Our team of experts will work closely with you to understand your business goals and develop solutions that help you achieve them.
                     With our help, you can stay ahead of the competition and drive growth for your business.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className='why-us-img'>
          <img src={why} alt='' />
        </div>
      </div>
    </div>
    </section>
    )
}

export default Afterabout1; 