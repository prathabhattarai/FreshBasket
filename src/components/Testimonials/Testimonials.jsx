import React, { useState } from "react";
import Heading from "../Heading/Heading";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import Customer1 from "../../assets/Grocery Website Assets/customer1.jpg";
import Customer2 from "../../assets/Grocery Website Assets/customer2.jpg";
import Customer3 from "../../assets/Grocery Website Assets/customer3.jpg";
import Customer4 from "../../assets/Grocery Website Assets/customer4.jpg";
import Customer5 from "../../assets/Grocery Website Assets/customer5.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const review = [
  {
    id: 1,
    name: "Emily Johnson",
    profession: "Food Blogger",
    rating: 5,
    para: "FreshBasket provides fresh fruits, vegetables, and grocery delivery services that are reliable and affordable. The quality is always excellent, and every order arrives fresh.",
    image: Customer1,
  },
  {
    id: 2,
    name: "David Smith",
    profession: "Chef",
    rating: 5,
    para: "As a chef, I depend on high-quality ingredients. FreshBasket consistently delivers fresh vegetables, fruits, herbs, and pantry essentials that meet professional standards.",
    image: Customer2,
  },
  {
    id: 3,
    name: "Alya Zahra",
    profession: "Model",
    rating: 5,
    para: "Shopping online with FreshBasket has made grocery shopping convenient and stress-free. Their fresh produce, organic products, and quick delivery are outstanding.",
    image: Customer3,
  },
  {
    id: 4,
    name: "Carlos Mendes",
    profession: "Fitness Coach",
    rating: 5,
    para: "I appreciate FreshBasket's healthy food selection and fresh organic products. It helps me maintain a balanced lifestyle while saving time on shopping.",
    image: Customer4,
  },
  {
    id: 5,
    name: "Natcha Phongchai",
    profession: "Nutritionist",
    rating: 5,
    para: "FreshBasket offers premium-quality groceries at affordable prices. Their commitment to freshness, nutrition, and customer satisfaction is truly impressive.",
    image: Customer5,
  },
];

const Testimonials = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <section
      id="testimonials"
      aria-labelledby="customer-testimonials"
      className="bg-white"
    >
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        {/* Section Heading */}
        <div id="customer-testimonials">
          <Heading highlight="Customers" heading="Saying" />
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-end mt-5 py-5 gap-x-3">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => swiperRef?.slidePrev()}
            className="text-2xl text-zinc-800 rounded-lg flex justify-center items-center w-11 h-11 bg-zinc-100 hover:bg-gradient-to-b hover:from-green-400 hover:to-green-500 hover:text-white cursor-pointer transition-all duration-300"
          >
            <IoIosArrowBack />
          </button>

          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => swiperRef?.slideNext()}
            className="text-2xl text-zinc-800 rounded-lg flex justify-center items-center w-11 h-11 bg-zinc-100 hover:bg-gradient-to-b hover:from-green-400 hover:to-green-500 hover:text-white cursor-pointer transition-all duration-300"
          >
            <IoIosArrowForward />
          </button>
        </div>

        {/* Testimonials Slider */}
        <Swiper
          onSwiper={setSwiperRef}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          className="mySwiper"
        >
          {review.map((item) => (
            <SwiperSlide
              key={item.id}
              className="bg-zinc-100 rounded-xl p-8 min-h-[320px]"
            >
              {/* Customer Info */}
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-full border-3 border-white outline-2 outline-red-200 outline-offset-4 overflow-hidden">
                  <img
                    src={item.image}
                    alt={`${item.name} customer review`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-zinc-800">
                    {item.name}
                  </h3>

                  <p className="text-zinc-600">{item.profession}</p>

                  <div
                    className="flex text-yellow-400 mt-3 text-xl gap-1"
                    aria-label={`${item.rating} star rating`}
                  >
                    {Array.from({ length: item.rating }, (_, index) => (
                      <FaStar key={index} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Review */}
              <div className="mt-10">
                <p className="text-zinc-600 leading-relaxed">
                  {item.para}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;