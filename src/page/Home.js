import React from "react";
import CafeImg from "../img/cafeimg.jpg";

function Home() {
  return (
    <>
      <div
        className="w-full h-[600px] box-border bg-cover"
        style={{ backgroundImage: `url(${CafeImg})` }}>
                <p className="bg-black text-white inline-block ">Open from 6am to 8pm </p>
        </div>
    </>
  );
}

export default Home;
