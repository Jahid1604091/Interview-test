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
import { AiOutlineLock } from 'react-icons/ai'
import { IoIosArrowBack } from 'react-icons/io'
import Landing from '../layout/Landing'
const FormPersonalDetails = ({ prevStep,step,nextStep, handleChange,formData}) => {
    const {phone,address,country} = formData;

    const handleSubmit = (e) =>{
      if(!phone || !address){
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
                  <button onClick={prevStep} className='prevStep'><IoIosArrowBack/> Back</button>
                    <div><p>STEP 0{step}/03</p> <p>Residency Info.</p></div>
                  </div>
                </div>
                <div className="col-10 mt-4">
                  <h2>Complete Your Profile!</h2>
                  <p className="lead">For the purpose of industry regulation, your details are required.</p>
                  <form onSubmit={nextStep}>
                    <div className="mb-3">
                      <label htmlFor="exampleInputEmail1" className="form-label">Phone Number</label>
                      <input type="text" className="form-control"  name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required  />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleInputEmail1" className="form-label">Your Address</label>
                      <input type="text" className="form-control"  name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleInputPassword1" className="form-label">Country of residence</label>
                      <select className='form-control'  name="country"
                        value={formData.country}
                        onChange={handleChange}
                         ></select>
                    </div>
              
                    <div className="d-grid gap-2">
                      <button className="btn btn-primary" onClick={handleSubmit} type="button">Save &amp; Continue</button>
                      <span className='text-center text-secondary'><AiOutlineLock/> Your Info is safely secured</span>
                     

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

export default FormPersonalDetails;