import React from 'react'
import "./_Footer.scss"
import {AiFillHeart,AiOutlineInstagram} from "react-icons/ai"
import {FiFacebook} from "react-icons/fi"
import {BsTwitter} from "react-icons/bs"
import {TbChevronsRight} from "react-icons/tb"
const Footer = () => {
  return (
    <div className='allFooter'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-4 footerLeft">
            <h3>About Us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
            <span>Copyright ©2023 All rights reserved | This template is made with  <AiFillHeart/>by <label>Colorlib</label></span>
          </div>
          <div className="col-5 footerCenter">
            <h3>Newsletter</h3>
            <p>Stay update with our latest</p>
            <form >
              <input type="email" placeholder='Get Email' />
              <button><TbChevronsRight/></button>
            </form>
          </div>
          <div className="col-2 footerRight">
            <h3>Follow Us</h3>
            <p>Let us be social</p>
            <ul>
              <li><FiFacebook/></li>
              <li><BsTwitter/></li>
              <li><AiOutlineInstagram/></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer