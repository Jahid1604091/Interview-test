import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import img from '../assets/img/image1.jpeg'
import { ImQuotesLeft } from 'react-icons/im'
import { SiRelianceindustrieslimited } from 'react-icons/si'
import { RiShieldUserLine } from 'react-icons/ri'
import { BsArrowRight } from 'react-icons/bs'
import { FcBusiness } from 'react-icons/fc'
import Landing from '../components/layout/Landing'

const Page1 = () => {

  return (
    <Wrapper>
      <div className="">
        <div className="row">
          <div className="col-md-6">
            <Landing/>
          </div>
          <div className="col-md-6">
            <div className="container">
              <div className="row p-4">
                <div className="col-12">
                  <p className="text-end py-5">
                    Already have an account? <Link to='/sign-in'>Sign In</Link>
                  </p>
                </div>
                <div className="col-10">
                  <h2>Join Us!</h2>
                  <p className="lead">To begin this journey, tell us what type of account you’d be opening.</p>
                  <div className="card individual p-2 my-2 shadow">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="user-icon"><RiShieldUserLine /></div>
                      <div className="text p-2"><h6>Indiviual</h6><p>Personal account to manage all you activities.</p></div>
                      <Link to='/individual-form'><div className="arrow-icon"><BsArrowRight /></div></Link>
                    </div>
                  </div>

                  <div className="card business p-2 my-2 shadow">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="user-icon"><FcBusiness /></div>
                      <div className="text p-2"><h6>Business</h6><p>Own or belong to a company, this is for you.</p></div>
                      <Link to='/'><div className="arrow-icon"><BsArrowRight /></div></Link>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}



const Wrapper = styled.section`

  .card{
    transition:all 0.4s ease-in ;
    .user-icon,.arrow-icon{
      font-size:50px ;
      margin-top:-30px ;
    }

    &:hover{
      background-color: #F5F9FF;
      cursor: pointer;
    }
  }


`

export default Page1;