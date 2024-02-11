import React, { useRef } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { add } from '../../store/userSlice'
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useSelector } from 'react-redux'

import './products.css'
export default function Products(props) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // const [data, setdata]= useState()
    const { title, url, price, id, description } = props.data[props.sno]
    const reduxdata = useSelector((state) => state.value)

    const [toggle, setToggle] = useState(true)
    function red() {
        setToggle(!toggle)
         console.log(props.data[props.sno])
        const data = props.data[props.sno]
        dispatch(add(data))
        console.log(data)
    }
    // const pro = [{
    //     img: '	https://images.olx.com.pk/thumbnails/420119667-800x600.webp',
    //     price: '130000/-',
    //     title: 'iphone 13 pro max',
    //     location: 'Gulberg 3, Lahore',
    //     time: '2 weeks ago',
    //     des: 'Iphone 13 Pro Max 256GB'
    // },
    // {
    //     img: '	https://images.olx.com.pk/thumbnails/420119667-800x600.webp',
    //     price: '130000/-',
    //     title: 'iphone 13 pro max',
    //     location: 'Gulberg 3, Lahore',
    //     time: '2 weeks ago',
    //     des: 'Iphone 13 Pro Max 256GB'
    // },
    // {
    //     img: '	https://images.olx.com.pk/thumbnails/420119667-800x600.webp',
    //     price: '130000/-',
    //     title: 'iphone 13 pro max',
    //     location: 'Gulberg 3, Lahore',
    //     time: '2 weeks ago',
    //     des: 'Iphone 13 Pro Max 256GB'
    // },
    // {
    //     img: '	https://images.olx.com.pk/thumbnails/420119667-800x600.webp',
    //     price: '130000/-',
    //     title: 'iphone 13 pro max',
    //     location: 'Gulberg 3, Lahore',
    //     time: '2 weeks ago',
    //     des: 'Iphone 13 Pro Max 256GB'
    // }, {
    //     img: '	https://images.olx.com.pk/thumbnails/420119667-800x600.webp',
    //     price: '130000/-',
    //     title: 'iphone 13 pro max',
    //     location: 'Gulberg 3, Lahore',
    //     time: '2 weeks ago',
    //     des: 'Iphone 13 Pro Max 256GB'
    // }, {
    //     img: '	https://images.olx.com.pk/thumbnails/420119667-800x600.webp',
    //     price: '130000/-',
    //     title: 'iphone 13 pro max',
    //     location: 'Gulberg 3, Lahore',
    //     time: '2 weeks ago',
    //     des: 'Iphone 13 Pro Max 256GB'
    // }, {
    //     img: '	https://images.olx.com.pk/thumbnails/420119667-800x600.webp',
    //     price: '130000/-',
    //     title: 'iphone 13 pro max',
    //     location: 'Gulberg 3, Lahore',
    //     time: '2 weeks ago',
    //     des: 'Iphone 13 Pro Max 256GB'
    // }, {
    //     img: '	https://images.olx.com.pk/thumbnails/420119667-800x600.webp',
    //     price: '130000/-',
    //     title: 'iphone 13 pro max',
    //     location: 'Gulberg 3, Lahore',
    //     time: '2 weeks ago',
    //     des: 'Iphone 13 Pro Max 256GB'
    // },

    // ]
    return (
        <div className='main'>
            {/* <div> */}
            {/* <div className='card-cover'> */}
            {/* <button className='back'> <KeyboardArrowUpIcon/> <b>Back to top</b></button> */}
            <div className='card' key={id} >
                <img src={url} alt='thumbnail' onClick={() => navigate(`details/${id}`)} />
                <div className='detail-box'>
                    <div className='price'>
                        <p><b>RS {price}</b></p>
                        {!toggle ? <FavoriteIcon color='error' /> :
                            <FavoriteBorderIcon onClick={red} />
                        }
                    </div>
                    <div className='des' onClick={() => navigate(`details/${id}`)}>
                        <p>{title}</p>
                        <p>{description}</p>
                    </div>
                    <div className='location' onClick={() => navigate(`details/${id}`)}>
                        <p className='week' >Gulberg 3, Lahore</p>
                        <p>2 weeks ago</p>
                    </div>
                </div>
            </div>
        </div>
        // </div>
        // </div>
    )
}
