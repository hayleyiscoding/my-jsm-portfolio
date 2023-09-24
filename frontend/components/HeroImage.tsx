"use client";

import Image from "next/image";
import { useState } from "react";

import HayleyProfile from "../public/assets/hayley-profile.jpg";

const HeroImage = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className='relative md:order-2 lg:order-2'>
      {/* Blob */}
      <div className='fancy-border-radius bg-custom-red -translate-x-1/10 right-4.5 custom-neumorphic-teal-pressed absolute top-20 h-[260px] w-[240px] rotate-90 dark:border-4 dark:border-white md:h-[360px] md:w-[450px]'></div>
      {/* Hayley Profile Picture */}
      <Image
        className={`blur-image ${
          imageLoaded ? "loaded" : ""
        } fancy-border-radius lg:scale-105 grayscale-40 dark:custom-neumorphic-black-pressed relative border-2 border-white p-1 pb-0 text-white dark:border-4 dark:border-white md:mx-auto w-[14rem] md:w-[20rem] 2xl:origin-bottom`}
        src={HayleyProfile}
        alt="Hayley's profile picture"
        onLoad={handleImageLoad}
      />
    </div>
  );
};

export default HeroImage;
