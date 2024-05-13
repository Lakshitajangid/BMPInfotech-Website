import React from 'react';

export const Services = () => {
    return (
        <section id='services'>
            <div className='services_main_container' id='Services'>
                <div className='services_container'>
                    <div>
                        <h3 className='services_main_heading'>SERVICES</h3>
                        <p className='services_main_sub'>We offer a wide range of IT sevices to meet your bussiness needs.</p>
                    </div>
                    <div className='services_sub_div d1'>
                        <h4 className='services_sub_heading'>IT Support</h4>
                        <p className='services_sub_para'>We offer comprehensive IT support services to ensure your systems are always up and running.</p>
                    </div>
                    <div className='services_sub_div d2'>
                        <h4 className='services_sub_heading'>Software Development</h4>
                        <p className='services_sub_para'>We specialize in custom software development to meet your unique business needs.</p>
                    </div>
                    <div className='services_sub_div d3'>
                        <h4 className='services_sub_heading'>Data Analysis</h4>
                        <p className='services_sub_para'>Our data analytics services help you make informed business decisions based on data-driven insights.</p>
                    </div>
                    <div className='services_sub_div d4'>
                        <h4 className='services_sub_heading'>Cloud Services</h4>
                        <p className='services_sub_para'>Our cloud services help you securely store and access your data from anywhere at any time.</p>
                    </div>
                </div>
            </div>
            {/* <div className='services_bottom'>
        <div className='services_bottom_para'>
            <h3 className='services_bottom_heading'>BMP-INTERIORS</h3>
            <p className='services_bottom_content'>BMP Interiors is a full-service interior design and construction company that 
            specializes in creating beautiful and functional spaces for residential and
            commercial clients.With a team of skilled designers and craftsmen, we provide 
            end-to-end solutions that encompass everything from concept development to execution.
            At BMP Interiors, we are passionate about transforming spaces and creating experiences 
            that our clients will cherish for years to come.
            </p>
        </div>
        <div className='services_bottom_btn'>
            <div class='btn'>
                <p className='btn_content'>Call To Action</p>
            </div>
        </div>
    </div>
    </div> */}
        </section>
    )
}

export default Services;