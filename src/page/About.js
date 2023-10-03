import React from "react";
import AboutImg from "../img/coffeeshop.jpg";

function About() {
  return (
    <>
      <div id="about">
        <div className="text-white flex justify-center m-10">
          <span className="bg-black w-40 h-7 flex justify-center">
            ABOUT THE CAFE
          </span>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-[700px]">
            <p className="">
              The Cafe was founded in blabla by Mr. Smith in lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
            <p className="my-4">
              In addition to our full espresso and brew bar menu, we serve fresh
              made-to-order breakfast and lunch sandwiches, as well as a
              selection of sides and salads and other good stuff.
            </p>
            <p className="bg-slate-100 my-6 border-l-8 p-2">
              "Use products from nature for what it's worth - but never too
              early, nor too late." Fresh is the new sweet.
              <p className="my-4 ">Chef, Coffeeist and Owner: Liam Brown</p>
            </p>
            <div
              className="w-full h-[400px] box-border bg-cover grayscale mt-7"
              style={{ backgroundImage: `url(${AboutImg})` }}
            ></div>
            <p className="my-4">
              <b>Opening hours:</b> everyday from 6am to 5pm.
            </p>
            <p className="my-4">
              <b>Address:</b> Birendranagar,Surkhet
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
