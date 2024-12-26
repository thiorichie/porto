import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import logo from '../assets/LOGO.png';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { setUserLogin } from '../redux/userLoginSlice';
import { useDispatch } from 'react-redux';
import axios from 'axios'

function Navbar() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const userLogin = useSelector((state) => state.userLogin);
  const dispatch = useDispatch();

  const handleSearch = async (data) => {
    console.log(data.search);
  };

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:3000/api/user/logout', {}, { withCredentials: true });
      dispatch(setUserLogin({ frontName: null, picture: null }));
      navigate('/login');
    } catch (error) {
      console.error('Error during logout:', error.response?.data || error.message);
    }
  };

  useEffect(() => {
    const getUserLogin = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/user/getUser', {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        });
        dispatch(setUserLogin({
          frontName: response.data.getData.given_name,
          picture: response.data.getData.picture
        }));
      } catch (error) {
        console.error('Error fetching user data:', error.response?.data || error.message);
      }
    };

    getUserLogin();
  }, []);

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-primary text-white"
        style={{
          paddingLeft: '50px',
          paddingRight: '50px',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
        }}
      >
        <div className="container-fluid">
          <a className="navbar-brand text-white" onClick={() => navigate('/')}>
            <img src={logo} alt="Logo" width="200px" height="50px" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex mx-auto" style={{ maxWidth: "50%" }} role="search" onSubmit={handleSubmit(handleSearch)}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Cari game-mu disini.."
                aria-label="Search"
                style={{ width: "700px", height: "50px" }}
                {...register('search')}
              />
              <button className="btn btn-outline-light" type="submit" style={{ backgroundColor: 'aliceblue', color: '#007bff' }}>Search</button>
            </form>

            {!userLogin.frontName ? (
              <button className="btn btn-outline-light" onClick={() => navigate('/login')} style={{ backgroundColor: 'aliceblue', color: '#007bff' }}>
                Login
              </button>
            ) : (
              <div className="dropdown">
                <div
                  className="d-flex align-items-center dropdown-toggle"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{
                    cursor: 'pointer',
                    backgroundColor: 'aliceblue',
                    borderRadius: '10px',
                    padding: '5px 15px'
                  }}
                >
                  <div style={{ marginRight: '8px', fontSize: '20px', color: '#007bff' }}>
                    {userLogin.frontName}
                  </div>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: '#fff',
                      border: '1px solid #007bff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center', // memastikan teks berada di tengah
                      fontSize: '20px',
                      fontWeight: 'bold',
                      color: '#007bff', // warna teks inisial
                    }}
                  >
                    {userLogin.picture ? (
                      <img 
                        src={userLogin.picture} 
                        alt="Profile" 
                        width="40px" 
                        height="40px"
                        style={{ borderRadius: '50%' }}
                      />
                    ) : (
                      userLogin.frontName?.charAt(0)?.toUpperCase() || 'U' // inisial huruf depan
                    )}
                  </div>
                </div>

                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a className="dropdown-item" onClick={() => navigate('/profile')}>Profile</a></li>
                  <li><a className="dropdown-item" onClick={handleLogout}>Logout</a></li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
