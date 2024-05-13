import React from 'react'
import gallery from './Gallery'
import { useEffect, useState } from 'react'

const Portfolio = () => {
    const[data,setData] = useState([]);
    const [collection,setCollection] = useState([]);

    useEffect(()=>{
        setData(gallery);
        setCollection([...new Set(gallery.map((item)=> item.title))])
    },[])

    const gallery_filter = (itemData) => {
        const filterData = gallery.filter((item)=> item.title == itemData);
        setData(filterData);


    }



  return (
    <section id='portfolio'>
    <div className='portfolio-container'>
        <h2>PORTFOLIO</h2>
        <p>Welcome to BMP Infotech Group, a leading provider of IT solutions and services. Founded in [year], we have established ourselves as a trusted partner for clients across various industries. 
            At BMP Infotech Group, we offer end-to-end IT solutions that help our clients achieve their business goals. Our team of experienced professionals has the expertise to deliver customized solutions 
            that cater to the unique needs of our clients. Whether it's software development, web design, cloud solutions, or IT consulting, we have the skills and experience 
            to provide high-quality solutions that drive business growth. At BMP Infotech Group, we are committed to delivering excellence and providing our clients with the best possible service.</p>
            {/* <div className='portfolio-gallery'>
                <button className='btn btn-warning1'>All</button>
                <button className='btn btn-warning2'>App</button>
                <button className='btn btn-warning3'>Card</button>
                <button className='btn btn-warning4'>Web</button>
            </div> */}
            <div className='filterItem'>
                <ul>
                    <li><button onClick={()=> setData(gallery)}>All</button></li>
                    {
                        collection.map((item)=> <li><button onClick={()=>{gallery_filter(item)}}>{item}</button></li>)
                    }
                </ul>
            </div>







            <div className='portfolio-images-container'>
                <div className='images-wrapper'>
                    {
                        data.map((item)=> <div key={item.id} className='galleryItem'><img src={item.image}/></div>)
                    }
                </div>


            </div>

    </div>
    </section>
  )
}

export default Portfolio;
