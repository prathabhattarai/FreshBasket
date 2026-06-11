import React from "react";

const Heading = ({ highlight, heading }) => {
  return (
    <div className="w-fit mx-auto text-center">
      {/* Main Heading */}
      <h2 className="text-zinc-800 md:text-5xl text-[2.5rem] font-bold">
        <span className="text-green-500">{highlight} </span>
        {heading}
      </h2>

      {/* Decorative underline (not important for SEO) */}
      <div
        className="w-34 h-1 bg-green-300 md:mt-6 mt-3 ml-auto"
        aria-hidden="true"
      />
    </div>
  );
};

export default Heading;