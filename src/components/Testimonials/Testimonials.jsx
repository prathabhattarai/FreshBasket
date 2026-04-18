import React, { useState } from "react";
import Heading from "../Heading/Heading";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import Customer1 from "../../assets/Grocery Website Assets/customer1.jpg";
import Customer2 from "../../assets/Grocery Website Assets/customer2.jpg";
import Customer3 from "../../assets/Grocery Website Assets/customer3.jpg";
import Customer4 from "../../assets/Grocery Website Assets/customer4.jpg";
import Customer5 from "../../assets/Grocery Website Assets/customer5.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Testimonials = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20 ">
        <Heading highlight="Customers" heading="Saying" />

        <div className=" flex justify-end mt-5 py-5 gap-x-3 ">
          <button
            type="button"
            onClick={() => swiperRef?.slidePrev()}
            className="text-2xl text-zinc-800 rounded-lg flex justify-center items-center w-11 h-11 bg-zinc-100 hover:bg-gradient-to-b hover:from-green-400 hover:to-green-500 hover:text-white cursor-pointer"
          >
            <IoIosArrowBack />
          </button>

          <button
            type="button"
            onClick={() => swiperRef?.slideNext()}
            className="text-2xl text-zinc-800 rounded-lg flex justify-center items-center w-11 h-11 bg-zinc-100 hover:bg-gradient-to-b hover:from-green-400 hover:to-green-500 hover:text-white cursor-pointer"
          >
            <IoIosArrowForward />
          </button>
        </div>

        <Swiper
          onSwiper={setSwiperRef}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
          className="mySwiper"
        >
          {review.map((item) => {
            return (
              <SwiperSlide
                key={item.id}
                className="bg-zinc-100 rounded-xl p-8 min-h-[200px]"
              >
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-full bg-red-500 border-3 border-white outline-2 outline-red-200 outline-offset-4 overflow-hidden">
                    <img src={item.image} className="w-full h-full " />
                  </div>
                  <div className="min-h-[10px]">
                    <h5 className="text-xl font-bold text-zinc-800">
                      {item.name}
                    </h5>
                    <p className="text-zinc-600">{item.profession}</p>
                    <span className="flex text-yellow-400 mt-3 text-xl gap-1">
                      {Array.from({ length: item.rating }, (_, index) => (
                        <FaStar />
                      ))}
                    </span>
                  </div>
                </div>
                <div className="mt-10 min-h-[15vh]">
                  <p className="text-zinc-600">{item.para}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;

const review = [
  {
    id: 1,
    name: "Emily Johnson",
    profession: "Food Blogger",
    rating: 3,
    para: "FreshBasket is my go-to store for all grocery needs. Their produce is always fresh, and the delivery is super fast. I love the user-friendly interface and variety of organic options!",
    image: Customer1,
  },
  {
    id: 2,
    name: "David Smith",
    profession: "Chef",
    rating: 3,
    para: "As a chef, quality ingredients are everything. FreshBasket consistently delivers the best vegetables, herbs, and pantry staples. Highly recommended!",
    image: Customer2,
  },
  {
    id: 3,
    name: "Alya Zahra",
    profession: "Model",
    rating: 3,
    para: "Shopping online with FreshBasket has saved me so much time. I trust them for my family's weekly groceries—always fresh, affordable, and reliable.",
    image: Customer3,
  },
  {
    id: 4,
    name: "Carlos Mendes",
    profession: "Fitness Coach",
    rating: 3,
    para: "I appreciate the selection of healthy foods and clean-label products. FreshBasket has been a great partner in my wellness journey!",
    image: Customer4,
  },
  {
    id: 5,
    name: "Natcha Phongchai",
    profession: "Nutritionist",
    rating: 3,
    para: "FreshBasket offers high-quality groceries at reasonable prices. Their organic section is impressive, and their customer service is top-notch.",
    image: Customer5,
  },
];
