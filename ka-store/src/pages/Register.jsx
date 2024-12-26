import React, {useEffect} from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Backg from '../assets/KA_BG.jpg'
import Logo from '../assets/LOGO.png'
import {setUserLogin} from "../redux/userLoginSlice"
import {useDispatch} from "react-redux"
import axios from 'axios'

export default function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch()

  useEffect(() => {
    console.log(Backg);
    
    // Set background image for the body
    document.body.style.backgroundImage = `url(${Backg})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";

    // Cleanup function to remove the background image when component unmounts
    return () => {
      document.body.style.backgroundImage = "";
      document.body.style.backgroundSize = "";
      document.body.style.backgroundPosition = "";
      document.body.style.backgroundRepeat = "";
      document.body.style.backgroundAttachment = "";
    };
  }, []);

  const handleRegister = (data) => {
    try {
        axios.post('http://localhost:3000/api/user/createUser', {
            name: data.name, phoneNumber: data.phoneNumber, password: data.password
        })
        .then(response => console.log(response.data))
        .catch(error => console.error('Error:', error));
        alert("User berhasil dibuat!")
        dispatch(setUserLogin(data.name))
        navigate('/')
    }
    catch (e){
        alert(e);
    }
    // Redirect to dashboard or home page after successful login
    // navigate('/dashboard');
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '32px',
        width: '384px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <h1 style={{
          fontSize: '24px',
          fontWeight: 'bold',
          marginBottom: '24px',
          textAlign: 'center',
          fontFamily: 'sans-serif',
          color: 'black',
        }}>Register</h1>
        <form onSubmit={handleSubmit(handleRegister)} style={{display: 'flex', flexDirection: 'column', gap: '16px', width: '100%'}}>
        <div>
            <label htmlFor="name" style={{display: 'block', marginBottom: '8px', fontSize: '14px', color: '#374151'}}>
              Input Your Name
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              type="tel"
              id="name"
              style={{
                width: '100%',
                padding: '8px 12px',
                border: '1px solid #d1d5db',
                borderRadius: '4px',
                outline: 'none'
              }}
            />
            {errors.phoneNumber && <p style={{marginTop: '4px', fontSize: '14px', color: '#dc2626'}}>{errors.phoneNumber.message}</p>}
          </div>
          <div>
            <label htmlFor="phoneNumber" style={{display: 'block', marginBottom: '8px', fontSize: '14px', color: '#374151'}}>
              Input Your Phone Number
            </label>
            <input
              {...register("phoneNumber", { required: "Phone number is required" })}
              type="tel"
              id="phoneNumber"
              style={{
                width: '100%',
                padding: '8px 12px',
                border: '1px solid #d1d5db',
                borderRadius: '4px',
                outline: 'none'
              }}
            />
            {errors.phoneNumber && <p style={{marginTop: '4px', fontSize: '14px', color: '#dc2626'}}>{errors.phoneNumber.message}</p>}
          </div>
          <div>
            <label htmlFor="password" style={{display: 'block', marginBottom: '8px', fontSize: '14px', color: '#374151'}}>
              Create a Password
            </label>
            <input
              {...register("password", { required: "Password is required" })}
              type="password"
              id="password"
              style={{
                width: '100%',
                padding: '8px 12px',
                border: '1px solid #d1d5db',
                borderRadius: '4px',
                outline: 'none'
              }}
            />
            {errors.password && <p style={{marginTop: '4px', fontSize: '14px', color: '#dc2626'}}>{errors.password.message}</p>}
          </div>
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '8px 16px',
              backgroundColor: '#e5e7eb',
              border: 'none',
              borderRadius: '4px',
              fontSize: '14px',
              cursor: 'pointer'
            }}
          >
            Register
          </button>
        </form>
        <p style={{marginTop: '16px', textAlign: 'center', fontSize: '14px', color: '#4b5563'}}>
          Already have an account?{' '}
          <button
            onClick={() => navigate('/login')}
            style={{
              fontWeight: '500',
              color: '#2563eb',
              backgroundColor: 'transparent',
              border: '1px solid #2563eb',
              padding: '4px 8px',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            Login here
          </button>
        </p>
        <img src={Logo} alt="Bootstrap" width="200px" height="50px" style={{marginTop: '0px', backgroundColor: 'black'}}/>
      </div>
    </div>
  );
}

