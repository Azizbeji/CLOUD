import React from "react";
import Map from "../components/Map";

function Home() {
  return (
    <div className="Home">
      <div className="introduction">
        <h2>Welcome to GPS Companion</h2>{" "}
      </div>
      <Map />
    </div>
  );
}

export default Home;
