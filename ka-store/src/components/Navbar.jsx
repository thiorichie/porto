import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import logo from '../assets/LOGO.png';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const userLogin = useSelector((state) => state.userLogin.username);

  const handleSearch = async (data) => {
    console.log(data.search);
  };

  return (
    <div>
      {/* Navbar dengan CSS sticky */}
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
          {/* Navbar Brand */}
          <a className="navbar-brand text-white" onClick={() => navigate('/')}>
            <img src={logo} alt="Logo" width="200px" height="50px" />
          </a>

          {/* Toggle Button */}
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
            {/* Centered Search Bar */}
            <form className="d-flex mx-auto" style={{ maxWidth: "50%" }} role="search" onSubmit={handleSubmit(handleSearch)}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Cari game-mu disini.."
                aria-label="Search"
                style={{ width: "700px", height: "50px" }}
                {...register('search')}
              />
              <button className="btn btn-outline-light" type="submit">Search</button>
            </form>

            {/* Conditional Rendering Based on userLogin */}
            {userLogin === "" ? (
              <button className="btn btn-outline-light" onClick={() => navigate('/login')}>
                Login
              </button>
            ) : (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                color: '#fff',
              }} onClick={() => navigate('/profile')}>
                
                {/* Menampilkan username di sebelah kiri */}
                <div style={{
                  marginRight: '8px',
                  fontSize: '20px',
                  color: '#fff'
                }}>
                  {userLogin}
                </div>

                {/* Lingkaran dengan huruf awal */}
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'black',
                  fontSize: '14px',
                }}>
                  {userLogin?.charAt(0)?.toUpperCase() || 'U'}
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
