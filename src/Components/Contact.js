import React from 'react'
import contactform from '../form/contact.php';


const Contact = () => {
  return (
    <section id='contact' className='contact-section'>
      <div className='container'>
        <div className="contact-input">
          <div className="contact-input-1">
            <h2>Contact Us</h2>
            <form action={contactform} method='get'>
            <div className="c-row-1">
              <input id='name' type="text" placeholder='Enter Your name' />
              <input id='email' type="email" placeholder='Enter Your e-mail' />
            </div>
            <div className="c-row-2">
              <input type="text" placeholder='Subject' />
            </div>
            <div className='c-row-3'>
                  <textarea  placeholder='Your Message' name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div className="c-btn">
              <button>Send Message</button>
            </div>
            </form>
          </div>
        </div>
        </div> 
    </section>
  )
}

export default Contact