import React from 'react'
import { connect } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import img from '../../assets/img/image1.jpeg'
import { ImQuotesLeft } from 'react-icons/im'
import { SiRelianceindustrieslimited } from 'react-icons/si'
import { RiShieldUserLine } from 'react-icons/ri'
import { BsArrowRight } from 'react-icons/bs'
import { FcBusiness } from 'react-icons/fc'

const Landing = () => {



  return (
    <Wrapper>
      <div className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <span className='logo'><SiRelianceindustrieslimited /> Oasis</span>
            <span className='quote'><ImQuotesLeft /></span>
            <div className="text">
              <p>
                The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software.
              </p>
              <h5>Vincent Obi</h5>
            </div>
            <div className="triangle">

            </div>
          </div>
        </div>

      </div>
    </Wrapper>
  )
}



const Wrapper = styled.section`
  .dark-overlay {
    /* background-color: #1565D8;
    opacity:0.7 ; */
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .landing {
    position: relative;
    background:linear-gradient(0deg, rgba(21, 101, 216, 0.9), rgba(21, 101, 216, 0.9)),  url(${img}) no-repeat center center/cover;
    height: 100vh;
}

  .landing-inner {
    color: #fff;
    height: 100%;
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    .logo{
      position: absolute;
      width: 28px;
      height: 117px;
      left: 82px;
      top: 20px;
      font-weight: 600;
      font-size: 20px;
      line-height: 117px;
      display: flex;
      align-items: center;

    }
    .text{
      text-align:justify ;
      line-height:1.6 ;
      font-size:20px ;
   
    }

    .quote{
      position: absolute;
      width: 28px;
      height: 117px;
      left: 82px;
      top: 160px;
      font-weight: 700;
      font-size: 96px;
      line-height: 117px;
      display: flex;
      align-items: center;
      color: #00DAF7;
    }
    .triangle{
      position: absolute;
      width: 33.5px;
      height: 33px;
      left: 517.5px;
      top: 390px;
      background: #FFFFFF;
      transform: matrix(-1, 0, 0, 1, 0, 0);
    }
  }

`

export default Landing;