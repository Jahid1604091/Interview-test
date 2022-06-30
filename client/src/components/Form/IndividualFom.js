import React,{useState} from 'react'
import Page1 from '../../pages/Page1';
import FormBankDetails from './FormBankDetails';
import FormPersonalDetails from './FormPersonalDetails';
import FormUserDetails from './FormUserDetails';

const IndividualFom = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '', email: '', password: '', phone: '',country:'', address: '', bank_acc: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    //proceed to next step
    const nextStep = () => {
        setStep(step + 1);
    };

    //back to prev step
    const prevStep = () => {
        setStep(step - 1);
    };

    switch (step) {
        case 1:
          return <FormUserDetails step={step} formData={formData} nextStep={nextStep} handleChange={handleChange} />
        case 2:
          return <FormPersonalDetails step={step} formData={formData} nextStep={nextStep} handleChange={handleChange} prevStep={prevStep}>Form personal details</FormPersonalDetails>;
        case 3:
          return <FormBankDetails step={step} handleChange={handleChange} formData={formData} nextStep={nextStep} prevStep={prevStep}>Confirm</FormBankDetails>;
        default:
            return formData
      }
}

export default IndividualFom