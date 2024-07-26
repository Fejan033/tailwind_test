import React from "react";

const Body = () => {
  return (
    <div>
      <div className="flex items-center justify-center ">
        <img
          src="./assets/Blue-Shape.svg"
          alt="1st"
          className=" -rotate-45 h-64"
        />
        <img
          src="./assets/Pink-Shape.svg"
          alt="2nd"
          className="absolute -rotate-[30deg] h-64"
        />
        <img
          src="./assets/Purple-Shape.svg"
          alt="3rd"
          className="absolute -rotate-[15deg] h-64"
        />
        <img
          src="./assets/Hero-Model.png"
          alt="Hero"
          className="absolute h-64"
        />
      </div>

      <div>
        <h1 className="text-5xl font-bold font-playfair leading-tight">Welcome to the world first and fastest hoster for your web</h1>
        <p className="font-playfair text-gray-400 ">
          Experience unparalleled speed and reliability with our cutting-edge
          web hosting solutions.
        </p>
        <form action="" className="flex flex-col gap rounded-md px-4 py-3 bg-gray-100 ">
          <input type="email" placeholder="let us know your mail here" />
          <button>Join Us</button>
        </form>
        <div>
          <img src="./assets/Checkmark.svg" alt="check" />
        </div>
      </div>
    </div>
  );
};

export default Body;
