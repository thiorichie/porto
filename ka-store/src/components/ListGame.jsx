import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';

function ListGame() {
  const [fetchGame, setFetchGame] = useState([]);

  useEffect(() => {
    const getGame = async () => {
      try {
        const response = await axios.post('http://localhost:3000/api/game/insertGame', {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        });
        setFetchGame(response.data);
      } catch (e) {
        alert(e);
      }
    };
    getGame();
  }, []);

  return (
    <div>
      <div className="container" style={{ marginTop: '50px', display: 'flex', flexDirection: 'column' }}>
        <div className="title">
          <h5 style={{ color: '#007bff' }}>List Game</h5>
          <h1 style={{ color: 'aliceblue' }}>Android</h1>
        </div>
        <div
          className="cardContainer"
          style={{
            width: 'auto',
            display: 'flex',
            flexDirection: 'row',
            gap: '20px',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            marginTop: '15px',
            rowGap: '50px',
          }}
        >
          {fetchGame.map((game) => (
            <Card key={game.gameId} gameName={game.gameName} publisher={game.publisher} picture={game.picture}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListGame;
