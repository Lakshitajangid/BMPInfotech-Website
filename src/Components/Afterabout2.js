import React from 'react'
import skills from '../img/portfolio/skills.png';

export const Afterabout2 = () => {
  return (
    <>
    <div class="about2">
        <div className='container about-container'>
            <div class="about-2-image">
                <img id="about-2-image" src={skills} alt=""/>
            </div>
            <div class="about-2-content">
                <div className='about-2-content-2'>
                <div class="about-2-heading">
                <h2>About BMP Infotech Group</h2>
                <p><strong>BMP Infotech Group</strong> is a leading IT solutions provider with over 5 years of experience in the industry. We offer a wide range of services, including web development, software development, mobile app development, and digital marketing.</p>
                </div>
                 <div class="about-2-skill-content">
                 <div class="skill">
                    <div class="flex pt">
                        <p>WEB DEVELOPMENT</p>
                        <p >100%</p>
                    </div>
                     <progress value="100" max="100" width="200%"></progress>  
                     <div class="flex pt"> 
                        <p>SOFTWARE DEVELOPMENT</p>
                        <p >90%</p>
                    </div>
                    <progress value="90" max="100"></progress>
                    <div class="flex pt">
                        <p>MOBILE APP DEVELOPMENT</p>
                        <p >75%</p>
                    </div>
                    <progress value="75" max="100"></progress>
                    <div class="flex pt">
                        <p>SOFTWARE DEVELOPMENT</p>
                        <p >55%</p>
                    </div>
                    <progress value="55" max="100"></progress>
                </div>
              </div>
            </div>
            </div>
            </div>
        </div>
    </>
  )
}
export default Afterabout2;