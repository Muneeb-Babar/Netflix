import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './app.css'
import Checkbox from '@mui/material/Checkbox';
import { useForm } from 'react-hook-form';
import signUpUser from '../../config/firebase';

function SignForm() {
    const [checked, setChecked] = useState(false);
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const {
        register,
        handleSubmit,
} = useForm();

    const navigate=useNavigate()

    const onSubmit=(data)=>{
        const {email,password} = data
        signUpUser({email,password})
        alert('Register Successfully');
        navigate('/')
    }

    return (
        <div>
            <div className="form-container">
                <div className='inner-container'>
                    <h2 style={{ color: 'white' }}>Sign In</h2>
                    <form  onSubmit={handleSubmit(onSubmit)}>
                    <div style={{marginTop:'20px', display: 'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',gap:'20px'}}>
                    <input placeholder='Enter Your Email' required className='from-input'{...register('email')}/>
                    {/* {errors&&<p>Enter your Email</p>} */}
                    <input placeholder='Enter Your Password' required  className='from-input' {...register('password')}/>
                    <button className='sign-btn' type='submit'>Sign In</button>
                    <h6 style={{color:'aliceblue',cursor:'pointer'}}>OR</h6>
                    <button className='signcode-btn'>Use a Sign-In Code</button>
                    <p style={{color:'white',cursor:'pointer',fontSize:'1rem'}}>Forgot Password?</p>
                    </div>
                    </form>
                    <div style={{display:'flex',alignItems:'center',gap:'5px'}}>
                    <div><Checkbox {...label} defaultChecked /> </div> 
                    <div><p style={{textAlign:'center',color:'white',marginTop:'10px'}}>Remember Me</p> </div> 
                    </div>
                    <div style={{paddingLeft:'10px'}}><p style={{color:'lightgray'}}>New to Netflix? <span style={{color:'white'}}>Sign up now.</span></p></div>
                    {!checked ?<div style={{paddingLeft:'10px',color:'white'}}>
                    This page is protected by Google reCAPTCHA <br/>to ensure youre not a bot . <span style={{color:'blueviolet',cursor:'pointer'}} onClick={()=>{setChecked(true)}}>Learn more.</span> 
                    </div>:<div style={{color:'white'}}><p>
                    This page is protected by Google reCAPTCHA to ensure youre not a bot. 
                    <br/><br/>
                    The information collected by Google reCAPTCHA is subject to the Google Privacy Policy and Terms of Service, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).
                    </p></div>}
                </div>
            </div>
        </div>
    );
}

export default SignForm;
