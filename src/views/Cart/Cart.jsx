import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { useSelector } from 'react-redux'
import '../../Components/Products/products.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useNavigate } from 'react-router-dom';
export default function Cart() {
  const count = useSelector((state) => state.value)
  const [toggle, setToggle] = useState(true)
  const navigate = useNavigate()
  // let a = []
  useEffect(() => {
    // a.push(count)
    console.log(count)
    setcart(count)
    // ss.push('aa')
  }, [count])
  
  const [cart, setcart] = useState([])
  console.log('new array',cart)

  function red() {
    setToggle(!toggle)
  }
  return (
    <div>
      <Navbar />
      {cart?.map(function(items){
        return  <div className='main'>
    <div className='card' key={items.id} >
            <img src={items.url} alt='thumbnail' />
            <div className='detail-box'>
                <div className='price'>
                    <p><b>RS {items.price}</b></p>
                    {!toggle ? <FavoriteIcon color='error' /> :
                        <FavoriteBorderIcon onClick={red} />
                    }
                </div>
                <div className='des'>
                    <p>{items.title}</p>
                    <p>{items.description}</p>
                </div>
                <div className='location'>
                    <p className='week' >Gulberg 3, Lahore</p>
                    <p>2 weeks ago</p>
                </div>
            </div>
        </div>
    </div>
      })}
      {/* <div className='main'>
        <div className='card' key={cart.id} >
          <img src={cart.url} alt='thumbnail' />
          <div className='detail-box'>
            <div className='price'>
              <p><b>RS {cart.price}</b></p>
              {!toggle ? <FavoriteIcon color='error' /> :
                <FavoriteBorderIcon onClick={red} />
              }
            </div>
            <div className='des'>
              <p>{cart.title}</p>
              <p>{cart.description}</p>
            </div>
            <div className='location'>
              <p className='week' >Gulberg 3, Lahore</p>
              <p>2 weeks ago</p>
            </div>
          </div>
        </div>
      </div> */}
      <Footer />
    </div>
  )
}
