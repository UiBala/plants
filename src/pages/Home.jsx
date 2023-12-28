import React, { useEffect, useState } from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Col, Container, Row } from 'reactstrap';
import heroImg from "../assets/images/hero-img.png"
import "../styles/home/Home.css"
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';
import Services from '../services/Services';
import ProductList from '../components/UI/ProductList';
import counterImg from '../assets/images/counter-timer-img.png'

import products from '../assets/data/products'
import Clock from '../components/UI/Clock';


const Home = () => {

  const [trendingProducts,setTrendingProducts] = useState([])

  const [bestSalesProducts,setBestSalesProducts] = useState([])

  useEffect(()=>{
    const filteredTrendingProducts = products.filter(item => item.category === "chair");

    const filteredBestSalesProducts = products.filter((item) => item.category === "sofa")
    setTrendingProducts(filteredTrendingProducts)
    setBestSalesProducts(filteredBestSalesProducts)
  },[])
  
  const year = new Date().getFullYear();
  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row className='align-items-center'>
            <Col lg="6" md="6" className='order-sm-last'>
              <div className="hero__content">
                 <p className="hero__subtitle">Trending product in {year}</p>
                 <h2>Make Your Interior More Minimalistics & Modern</h2>
                 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi enim, voluptas placeat quae aperiam laborum rerum eos cum voluptatum accusantium!</p>
                 <motion.button whileTap={{scale:1.1}} className="buy__btn"><Link to="/shop">SHOP NOW</Link></motion.button>
              </div>
            </Col>
            <Col lg="6" md="6" className='order-sm-first'>
              <div className="hero__img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row> 
        </Container>
      </section>
      <Services />
      <section className="trending__products">
         <Container>
          <Row>
            <Col lg="12" className='text-center'>
              <h2 className='section__title'>Trending Products</h2>
            </Col>
           <ProductList data={trendingProducts}/>
          </Row>
         </Container>
      </section>

      <section className="best__sales">
        <Container>
          <Row>
          <Col lg="12" className='text-center'>
              <h2 className='section__title'>Best Sales</h2>
            </Col> 
            <ProductList data={bestSalesProducts}/>
          </Row>
        </Container>
      </section>

      <section className="timer__count">
        <Container>
          <Row>
            <Col lg="6" md="12">
              <div className="clock__top-content">
                <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
                <h3 className='text-white fs-5 mb-3'>Quality Armchair</h3>
              </div>
              <Clock />
              <motion.button whileTap={{scale:1.2}} className="buy__btn store__btn">
                <Link to="/shop">Visit Store</Link>
              </motion.button>
            </Col>
            <Col lg="6" md="12" className='text-end'>
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Home