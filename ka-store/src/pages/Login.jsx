import React, {useEffect} from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Backg from '../assets/KA_BG.jpg';
import Logo from '../assets/LOGO.png';
import GoogleIcon from '../assets/google_signUp.png'; // Pastikan path gambar sesuai dengan letak file Google icon.
import axios from 'axios'

export default function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  useEffect(() => {



    document.body.style.backgroundImage = `url(${Backg})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";

    return () => {
      document.body.style.backgroundImage = "";
      document.body.style.backgroundSize = "";
      document.body.style.backgroundPosition = "";
      document.body.style.backgroundRepeat = "";
      document.body.style.backgroundAttachment = "";
    };
  }, []);

  const handleLogin = async (data) => {
    axios.post('http://localhost:3000/api/user/login', {
      phoneNumber: data.phoneNumber,
      password: data.password
    }, {withCredentials: true})
    .then(response => {
      console.log(response.data);
      alert(response.data.message);
      navigate('/');
    })
    .catch(error => {
      console.error('Error:', error);
      if (error.response && error.response.data && error.response.data.message) {
          alert(`Error: ${error.response.data.message}`);
      } else {
          alert('Terjadi kesalahan saat login user.');
      }
    });
  };
  

  const handleGoogleLogin = async () => {
    try {
      const cobaLogGoogle = await fetch('http://localhost:3000/api/auth/google/request', {method: 'post'});
      const data = await cobaLogGoogle.json();
      console.log(data)
      window.location.href = data.url;
    } catch (e){
      alert(e)
    }
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
        }}>Login</h1>
        <form onSubmit={handleSubmit(handleLogin)} style={{display: 'flex', flexDirection: 'column', gap: '16px', width: '100%'}}>
          <div>
            <label htmlFor="phoneNumber" style={{display: 'block', marginBottom: '8px', fontSize: '14px', color: '#374151'}}>
              Phone Number
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
              Password
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
            Login
          </button>
        </form>

        {/* Teks OR dengan garis sambung */}
        <div style={{display: 'flex', alignItems: 'center', margin: '16px 0', textAlign: 'center'}}>
          <div style={{flex: 1, borderBottom: '1px solid #d1d5db'}}></div>
          <span style={{margin: '0 8px', color: '#6b7280', fontSize: '14px'}}>OR</span>
          <div style={{flex: 1, borderBottom: '1px solid #d1d5db'}}></div>
        </div>

        {/* Sign in with Google Button */}
        <button
          onClick={handleGoogleLogin}
          style={{
            width: '100%',
            height: '37px',
            backgroundColor: '#4285F4',
            border: 'none',
            borderRadius: '50px',
            fontSize: '14px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img src={GoogleIcon} alt="Google Logo" width="55%" style={{marginRight: '8px', borderRadius: '5px'}} />
        </button>

        <p style={{marginTop: '16px', textAlign: 'center', fontSize: '14px', color: '#4b5563'}}>
          Don't have an account?{' '}
          <button
            onClick={() => navigate('/register')}
            style={{
              fontWeight: '500',
              color: '#2563eb',
              backgroundColor: '#007bff',
              color: 'aliceblue',
              border: '1px solid #2563eb',
              padding: '4px 8px',
              cursor: 'pointer',
              fontSize: '14px',
              borderRadius: '10px'
            }}
          >
            Register here
          </button>
        </p>

        <img src={Logo} alt="Logo" width="200px" height="50px" style={{marginTop: '16px', backgroundColor: 'black'}}/>
      </div>
    </div>
  );
}
