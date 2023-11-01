import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [value, setValue] = useState();

  const navigate = useNavigate();
  const handleJoinRoom = useCallback(() => {
    navigate(`/room/${value}`);
  }, [navigate, value]);

  return (
    <div
      style={{
        backgroundImage: "url(/bg.jpeg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          margin: "0",
          paddingTop: "280px",
          color: "rgb(79, 87, 101)",
          textShadow: "5px 5px 7px rgb(255, 207, 187)",
          fontFamily: "cursive",
        }}
      >
        Video Calling App
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "10px",
          paddingBottom: "359px",
        }}
      >
        <input
          style={{
            textAlign: "center",
            height: "25px",
            borderRadius: "10px",
            boxShadow: "5px 5px 7px rgb(255, 207, 187)",
          }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="Enter Room Code"
        />
        <button
          style={{
            height: "30px",
            borderRadius: "10px",
            margin: "15px",
            backgroundColor: "rgb(255, 219, 190)",
            boxShadow: "5px 5px 7px rgb(255, 207, 187)",
          }}
          onClick={handleJoinRoom}
        >
          Join
        </button>
      </div>
    </div>
  );
};

export default HomePage;
