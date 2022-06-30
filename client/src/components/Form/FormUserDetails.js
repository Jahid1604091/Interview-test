import React,{useState} from 'react'
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

import { IoIosArrowBack } from 'react-icons/io'
import Landing from '../layout/Landing'
const FormUserDetails = ({ step,nextStep, handleChange,formData}) => {
  const navigate = useNavigate()
  const handleClick = () =>{
    navigate('/')
  }

  const {name,email,password} = formData;

  const handleSubmit = (e) =>{
    if(!name || !email || !password){
        alert("please fill out all the fields !")
    }
    else{
        nextStep();
    }
  }

  return (
    <Wrapper>
      <div className="">
        <div className="row">
          <div className="col-md-6">
            <Landing />
          </div>
          <div className="col-md-6">
            <div className="container">
              <div className="row p-4">
                <div className="col-12">
                  <div className="d-flex justify-content-between">
                  <button onClick={handleClick} className=' prevStep'><IoIosArrowBack/> Back</button>
                    <div><p>STEP 0{step}/03</p> <p>Personal Info.</p></div>
                  </div>
                </div>
                <div className="col-10 mt-4">
                  <h2>Register Individual Account!</h2>
                  <p className="lead">For the purpose of industry regulation, your details are required.</p>
                  <form onSubmit={nextStep}>
                    <div className="mb-3">
                      <label htmlFor="exampleInputEmail1" className="form-label">Your Full Name</label>
                      <input type="text" className="form-control" placeholder="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                      <input type="email" className="form-control" placeholder="Email Address"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleInputPassword1" className="form-label">Create Password</label>
                      <input type="password" className="form-control" placeholder="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required />
                    </div>
                    <div className="mb-3 form-check">
                      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                      <label className="form-check-label" htmlFor="exampleCheck1">I agree to terms &amp; conditions</label>
                    </div>
                    <div className="d-grid gap-2">
                      <button onClick={handleSubmit} className="btn btn-primary" type="button">Submit</button>
                      <span className='text-center'>or</span>
                      <button className="btn btn-light" type="button">Register with Google</button>

                    </div>
                  </form>


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

.prevStep{
        background:transparent ;
        border:0 ;
    }


`

export default FormUserDetails;