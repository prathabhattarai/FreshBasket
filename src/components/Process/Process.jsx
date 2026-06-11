import React from "react";
import Heading from "../Heading/Heading";
import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
  TbCircleNumber4Filled,
} from "react-icons/tb";
import { PiFactory, PiPlant } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import { BsTruck } from "react-icons/bs";

const steps = [
  {
    id: 1,
    number: <TbCircleNumber1Filled />,
    title: "Sourcing Fresh Products",
    para: "We carefully source fresh fruits, vegetables, dairy products, and groceries from trusted farms and suppliers.",
    icon: <PiPlant />,
  },
  {
    id: 2,
    number: <TbCircleNumber2Filled />,
    title: "Processing & Packaging",
    para: "Products are handled and packaged with care to maintain freshness, quality, and hygiene standards.",
    icon: <PiFactory />,
  },
  {
    id: 3,
    number: <TbCircleNumber3Filled />,
    title: "Quality Control",
    para: "Every product undergoes strict quality checks to ensure freshness, safety, and customer satisfaction.",
    icon: <SlBadge />,
  },
  {
    id: 4,
    number: <TbCircleNumber4Filled />,
    title: "Fast Delivery",
    para: "FreshBasket delivers groceries quickly and safely to your doorstep while maintaining product quality.",
    icon: <BsTruck />,
  },
];

const Process = () => {
  const renderSteps = steps.map((item) => (
    <article
      key={item.id}
      className={`md:flex-1 basis-[300px] ${
        item.id % 2 === 0 ? "md:-mt-100" : ""
      }`}
    >
      <span
        className="flex justify-center items-center w-18 h-18 mx-auto rounded-full text-8xl bg-zinc-800 text-white outline-[3px] outline-offset-7 outline-zinc-800 outline-dashed"
        aria-hidden="true"
      >
        {item.number}
      </span>

      <div className="flex items-center gap-x-5 mt-10">
        <span
          className="flex justify-center items-center text-3xl bg-gradient-to-b from-green-400 to-green-500 text-white w-15 h-15 rounded-full"
          aria-hidden="true"
        >
          {item.icon}
        </span>

        <div className="flex-1">
          <h3 className="text-zinc-800 text-2xl font-bold">
            {item.title}
          </h3>

          <p className="text-zinc-600 mt-2">
            {item.para}
          </p>
        </div>
      </div>
    </article>
  ));

  return (
    <section
      id="process"
      aria-labelledby="our-process"
      className="bg-white"
    >
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <div id="our-process" className="w-fit mr-auto">
          <Heading highlight="Our" heading="Process" />
        </div>

        <div className="flex flex-wrap gap-y-17 items-center justify-center md:mt-20 mt-10 md:pt-50">
          {renderSteps}
        </div>
      </div>
    </section>
  );
};

export default Process;