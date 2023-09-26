"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";

import { testimonialData } from "@/constants";
import { SectionHeader, TestimonialData } from "../components/index";

const Testimonials = () => {
  return (
    <section id='testimonials' className='sliderContainer'>
      {/* Header */}
      <header className='mb-5 mt-10 text-center '>
        <SectionHeader phrase2='What' phrase3=' They Say!' />
      </header>

      {/* Slider */}
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
        {/* Slider Cards */}
        {testimonialData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <TestimonialData
              avatar={slide.avatar}
              testimonial={slide.testimonial}
              name={slide.name}
              company={slide.company}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
