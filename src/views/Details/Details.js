import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import { Container } from '@mui/material'
// import Button from 'react-bootstrap/Button';
import { getpro } from '../../config/firebase'
import Header from "../../Components/Navbar/Navbar"
import Footer from "../../Components/Footer/Footer"
import PhoneIcon from '@mui/icons-material/Phone';
import './Details.css'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import 'bootstrap/dist/css/bootstrap.min.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const Details = () => {
  const [singleData, setsingleData] = useState([])
  console.log(singleData)
  const { id} = useParams()

  console.log(id)
  useEffect(() => {
    // debugger
    productDetails()

  }, [])

  const productDetails = async () => {
    setsingleData( await getpro(id))
    console.log(singleData)
  }
  const [toggle, setToggle] = useState(true)
  function red() {
      setToggle(!toggle)
  }
  
  // console.log(singleData)

  return (
    <div>
    <Header />
    <div className='main'>
    <Container maxWidth='xl'>
        <Grid container spacing={2} columns={16} >
          <Grid xs={10} >
          <div className="card" style={{ width: "47.5rem", height: "30rem" }}>
    <img
      id="image"
      src={singleData.url}
      style={{ width: "50rem", height: "30rem" }}
      className="d-block w-100 image"
      alt="..."
    />
  </div>
  
    <div className="price-title-cont" style={{ width: "47.5rem" }}>
      <div className="price-icon">
        <div className="price">
          <h3>RS {singleData.price}</h3>
        </div>
        <div className="heart-share-icon">
          <ShareIcon />
          {!toggle ? <FavoriteIcon color='error' onClick={red} /> :
                          <FavoriteBorderIcon onClick={red} />
                      }
        </div>
      </div>
      <div className="title">
        <p id="title">
          <b />
        </p>
      </div>
      <div className="location-time">
        <div className="location">
          <i className="fa-solid fa-location-dot fa-sm" />
          <p>Raza Abad, Faisalabad</p>
        </div>
        <div className="time">
          <p>4 weeks ago</p>
        </div>
      </div>
    </div>
    <div className="details price-title-cont" style={{ width: "47.5rem" }}>
      <h5>
        <b>Details</b>
      </h5>
      <div className="details-product row">
        <h6 className="col-md-3"><b>Brand:</b></h6>
        <h6 className="col-md-3" id="brand">
        {singleData.Brand}        <b />
        </h6>
        <h6 className="col-md-3"><b>Price:</b></h6>
        <h6 className="col-md-3" id="price2">
        {singleData.price}
          <b />
        </h6>
        <h6 className="col-md-3"><b>Condition:</b></h6>
        <h6 className="col-md-3" id="condition">
        {singleData.neww}
          <b />
        </h6>
      </div>
    </div>
    <div className="price-title-cont" style={{ width: "47.5rem" }}>
      <h5>
        <b>Description:</b>
      </h5>
      <div className="description">
        <h6 id="description">{singleData.description}</h6>
      </div>
    </div>
    <hr style={{ width: "47rem" }} />
  
          </Grid>
          <Grid xs={6}>
        
            <div className="main-box">
    <div className="top-portion">
      <div className="user-icon">
        <img
          src="https://www.olx.com.pk/assets/iconProfilePicture.7975761176487dc62e25536d9a36a61d.png"
          width="68px"
          alt=""
        />
      </div>
      <div className="user-info"style={{
      height: "82px;"}}>
        <h4 id="user" style={{
      height: "8px;"}}>
          <b>{singleData.username}</b>
        </h4>
        <h6>Member Since Oct 2018</h6>
        <h6>
          <b>See profile &nbsp; &gt;</b>
        </h6>
      </div>
      <div className="extra" />
    </div>
    <div className="buttons-portion">
      <button className="btn-phone" id="contact">
        <b>
          <PhoneIcon/>
         {singleData.contact}
        </b>
      </button>
      <button className="btn-chat">
        <ChatBubbleOutlineIcon />
        <b>Chat</b>
      </button>
    </div>
  </div>
  <div className="price-title-cont a" style={{ width: "18.8rem" }}>
    <h5>
      <b>Location</b>
    </h5>
    <LocationOnIcon 
   />
    <p>Raza Abad, Faisalabad</p>
  </div>
  
          </Grid>
        </Grid>
      </Container>
    </div>
    <Footer/>
      </div>
  
  )
}

export default Details
