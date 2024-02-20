import Carousel from 'react-bootstrap/Carousel';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import 'bootstrap/dist/css/bootstrap.min.css';
import './slider.css'
import { useState } from 'react';
function UncontrolledExample() {
    const [data,setData]=useState( [
        {
          catogory:"Mobile",
          img:'	https://www.olx.com.pk/assets/mobiles.8c768c96bfde33f18fcf5af2a8b9cf71.png'
        },
        {
          catogory:"Vehicles",
          img:'	https://www.olx.com.pk/assets/vehicles.29fb808d5118f0db56f68a39ce5392e2.png'
        },   
        {
          catogory:"Property for Sale",
          img:'https://www.olx.com.pk/assets/property-for-sale.e3a00dbfdaa69fe5f713665f1069502f.png'
        },
        {
          catogory:"Property for Rent",
          img:'https://www.olx.com.pk/assets/property-for-rent.8436595fbaa90d47f0178006f57090a8.png'
        }, 
        {
          catogory:"Electronics & Home Appliances",
          img:'	https://www.olx.com.pk/assets/electronics-home-appliances.46e034dd8adca44625c2c70e4d1b5984.png'
        },   {
            catogory:"Bikes",
            img:'	https://www.olx.com.pk/assets/bikes.4dcd02c49b2b83aa5b4d629d1e2b383e.png'
        }
        ,   {
            catogory:"Business, Industrial & Agriculture",
            img:'	https://www.olx.com.pk/assets/business-industrial-agriculture.704a6ffb9081bc94b11c102cc613670f.png'
        },   {
            catogory:"Services",
            img:'https://www.olx.com.pk/assets/services.dc6aef196c0403dc61b0ee813f66fa5b.png'
        },   {
            catogory:"Jobs",
            img:'https://www.olx.com.pk/assets/jobs.79e6136dda02111cf8e7afe26b9e0f93.png'
        },   {
            catogory:"animal",
            img:'	https://www.olx.com.pk/assets/animals.62d396e85f7523dbc8ff23889fdd5c31.png'
        },   {
            catogory:"Furniture & Home Decor",
            img:'	https://www.olx.com.pk/assets/furniture-home-decor.66bcf157a53ea4c736a5b0af41219475.png'
        },   {
            catogory:"Fashion & Beauty",
            img:'	https://www.olx.com.pk/assets/fashion-beauty.dd2cf7638c29b0e5c084a6673dd94dd7.png'
        },   {
            catogory:"Books, Sports & Hobbies ",
            img:'	https://www.olx.com.pk/assets/books-sports-hobbies.6fee8d841b332d65a10f050f4a2ee1c8.png'
        },   {
            catogory:"Kids",
            img:'https://www.olx.com.pk/assets/kids.cd8d8864804f1c35dd6a7df68268a48d.png'
        }
    ]) 
    // console.log(setData)   
  return (
    <div>
      <Carousel style={{margin:'auto',width:'fit-content'}}>
      <Carousel.Item style={{width:'100%'}}>
        <img src={'https://images.olx.com.pk/thumbnails/430329513-800x600.webp'} width={'100%'}alt='ss'/>
      </Carousel.Item>
      <Carousel.Item>
        <img src={'https://images.olx.com.pk/thumbnails/430329237-800x600.webp'} width={'100%'} alt='ss'/>
      </Carousel.Item>
    </Carousel>
    <div className='all'>
        <p className='title'><b>All categories</b></p>
        <div className='categories'>
        {data.map(function(items,index){
            return <div className='cat' key={index}>
                <img src={items.img} alt='ss'/>
                <p><b>{items.catogory}</b></p>
            </div>
        })}
    </div>
    </div>
  
    </div>

  );
}

export default UncontrolledExample;