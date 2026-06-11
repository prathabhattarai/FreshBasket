import React from "react";

const Banner = ({ title, bgImage, alt }) => {
  return (
    <header
      className="h-[50vh] mt-25 flex justify-center items-center bg-center bg-cover relative"
      style={{ backgroundImage: `url(${bgImage})` }}
      role="img"
      aria-label={alt || title}
    >
      {/* Overlay */}
      <div className="bg-black/20 absolute inset-0" aria-hidden="true"></div>

      {/* Title */}
      <h1 className="text-5xl text-zinc-800 bg-white p-5 rounded-xl font-bold z-10 text-center">
        {title}
      </h1>
    </header>
  );
};

export default Banner;