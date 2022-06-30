import React, { useState } from 'react'
import styled from 'styled-components'
import { AiOutlineLock } from 'react-icons/ai'
import { IoIosArrowBack } from 'react-icons/io'
import Landing from '../layout/Landing'
import axios from 'axios'
const FormBankDetails = ({ prevStep, step, handleChange, formData }) => {

    const [errors, setErrors] = useState([])
    const { bank_acc } = formData;
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!bank_acc) {
            alert('Please fill out the bank account field!')
        }
        else {
            //register
            const register = async (form) => {
                try {
                    const config = {
                        headers: {
                            'Content-Type': "application/json"
                        }
                    }
                    const body = JSON.stringify(form);
                    const res = await axios.post('/api/users', body, config);
                    if (errors.length === 0) {
                        alert("Registered successfully!")
                    }
                } catch (err) {
                    const errors = err.response.data.errors;
                  
                    if (errors) {
                        setErrors(errors)
                    }
                    else{
                        setErrors([])
                    }
                }
            }
            register(formData)



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
                                        <button onClick={prevStep} className='prevStep'><IoIosArrowBack /> Back</button>
                                        <div><p>STEP 0{step}/03</p> <p>Bank Info.</p></div>
                                    </div>
                                </div>
                                <div className="col-10 mt-4">
                                      {
                                           errors.length > 0 ?  errors.map((err, idx) => <div key={idx} className="alert alert-warning alert-dismissible fade show" role="alert">
                                           {err.msg}
                                           <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                         </div>) : null
                                   
                                        }

                                    <h2>Complete Your Profile!</h2>
                                    <p className="lead">For the purpose of industry regulation, your details are required.</p>
                                    <form >
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">You Bank Account Number (BVN)</label>
                                            <input type="text" className="form-control" name="bank_acc"
                                                value={formData.bank_acc}
                                                onChange={handleChange}
                                                required />
                                        </div>



                                        <div className="d-grid gap-2">
                                            <button onClick={handleSubmit} className="btn btn-primary" type="button">Save &amp; Continue</button>
                                            <span className='text-center text-secondary'><AiOutlineLock /> Your Info is safely secured</span>
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

li{
    list-style-type:none ;
    color:#fff ;
    font-size:18px ;
    text-transform:capitalize ;
}
    .prevStep{
        background:transparent ;
        border:0 ;
    }


`

export default FormBankDetails;