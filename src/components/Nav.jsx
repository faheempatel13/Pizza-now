import React from 'react';
import '../components/Nav.css';


const Nav = () => {
  return (
    <>
    <div className="container">
        <div className="nav-bar">
          <div className="left">
            <div className="icon-button">
                <img src="../img/telephone.png" alt="" className="img" />
            </div>
              <div className="texts">
                <div className="text">ORDER NOW</div>
                <div className="text"> 9876543210</div>
              </div>  
          </div>
          <ul>
              <li ><a href="#">Home</a></li>
              <li ><a href="#">Product</a></li>
              <img src="../img/logo.png" alt="" />
              <li ><a href="#">Blog</a></li>
              <li ><a href="#">Contach</a></li>
          </ul>
          <div className="right">
              <img src="../img/cart.png" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Nav