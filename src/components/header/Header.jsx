import React from 'react'
import '../header/Header.css'
import { Container, Row } from 'reactstrap'
import logo from '../../assets/images/eco-logo.png'
import userIcon from "../../assets/images/user-icon.png";
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'

const nav_links = [
  {
    path:'home',
    display:'Home'
  },
  {
    path:'shop',
    display:'Shop'
  },
  {
    path:'cart',
    display:'Cart'
  }
]

const Header = () => {
  return (
    <header className="header">
       <Container>
          <Row>
            <div className="nav__wrapper">
              <div className="logo">
                <img src={logo} alt="" />
                <div>
                  <h1>Multimart</h1>
                  {/* <p>Since 1995</p> */}
                </div>
              </div>

            <div className="navigation">
              <ul className="menu">
               {nav_links.map((item,index)=>(
                 <li className="nav__item" key={index}>
                 <Link className={(navClass) => navClass.isActive ? "nav__active" : ''} to={item.path}>{item.display}</Link>
               </li>
               ))}
              </ul>
            </div>

            <div className="nav__icons">
              <span className="fav__icon">
                <i className="ri-heart-line"></i>
                <span className="badge">1</span>
              </span>
              <span className="cart__icon">
                <i class="ri-shopping-bag-line"></i>
                <span className="badge">1</span>
              </span>
              <span><motion.img whileTap={{scale:1.2}} src={userIcon} alt="" /></span>
            </div>

            <div className="mobile__menu">
               <span>
                <i className="ri-menu-line"></i>
               </span>
            </div>
            </div>
          </Row>
       </Container>
    </header>
  )
}

export default Header