"use client";

import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";

import { testimonialData } from "@/constants";
import SectionHeader from "./SectionHeader";

const Testimonials = () => {
  return (
    <section
      id='testimonials'
      className='dark:bg-custom-black container mx-auto mb-5 rounded-xl bg-white pt-10 lg:py-10'
    >
      <div className='mb-5 mt-10 text-center '>
        <SectionHeader phrase2='Testimonials' />
      </div>
      <Swiper
        navigation={true}
        effect={"coverflow"}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        slidesPerView={"auto"}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Autoplay, EffectCoverflow, Pagination]}
        className='mySwiper m-6'
      >
        {testimonialData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className='swiper-slide rounded-xl px-10 text-center'>
              <div className='border-custom-red mx-auto max-w-[100px] rounded-[60px] border-b-8'>
                <Image
                  className='grayscale-40 mx-auto mt-10 max-w-[100px] rounded-[60px] border-4 border-transparent object-cover pt-12'
                  src={slide.avatar}
                  alt=''
                />
              </div>
              <blockquote className='mt-3 rounded-md px-4 py-6 opacity-80 sm:mt-8 md:px-0'>
                <p className='md:text-md text-custom-black leading-6text-opacity-70 px-8 text-sm font-light dark:text-white'>
                  {slide.testimonial}
                </p>
              </blockquote>
              <p className='text-md text-custom-black mt-6 font-semibold dark:text-gray-200 sm:mt-10'>
                {slide.name}
              </p>
              <p className='text-custom-red mb-10 mt-1 text-sm font-light '>
                {slide.company}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
