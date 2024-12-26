import React from 'react';
// import moleThumbnail from '../assets/MOLE.jpg'

function Card(props) {
  return (
    <div
      style={{
        backgroundColor: '#007bff',
        width: '20%',
        height: '400px',
        borderRadius: '30px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div
        className="gamePicture"
        style={{
          width: '100%',
          height: '60%',
          backgroundColor: 'white',
          borderRadius: '30px',
          overflow: 'hidden', 
        }}
      >
        <img
          src={props.picture}
          alt="Game Thumbnail"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>
      <div
        className="gameProfile"
        style={{
          textAlign: 'center',
          marginTop: '10px',
        }}
      >
        <h6 style={{ margin: '0', padding: '0', color: 'silver' }}>{props.publisher}</h6>
        <h4 style={{ margin: '0', padding: '0', color: 'aliceblue' }}>{props.gameName}</h4>
      </div>
      <div
        className="topUpButton"
        style={{
          display: 'flex',
          width: '100%',
          height: '23%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <button
          style={{
            padding: '10px 20px',
            height: '50px',
            backgroundColor: 'aliceblue',
            color: '#007bff',
            border: 'none',
            borderRadius: '20px',
            cursor: 'pointer',
          }}
        >
          Top Up
        </button>
      </div>
    </div>
  );
}

export default Card;
