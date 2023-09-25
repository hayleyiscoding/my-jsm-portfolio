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
      <div className='fancy-border-radius bg-custom-red -translate-x-1/10 right-4.5 custom-neumorphic-teal-pressed absolute top-18 md:top-10 h-[300px] w-[220px] rotate-45 md:rotate-90 dark:border-4 dark:border-white md:h-[290px] md:w-[360px]'></div>
      {/* Hayley Profile Picture */}
      <Image
        className={`blur-image ${
          imageLoaded ? "loaded" : ""
        } fancy-border-radius grayscale-40 dark:custom-neumorphic-black-pressed relative border-2 border-white p-1 pb-0 text-white dark:border-4 dark:border-white md:mx-auto w-[14rem] md:w-[19rem] 2xl:origin-bottom`}
        src={HayleyProfile}
        alt="Hayley's profile picture"
        onLoad={handleImageLoad}
        width={500}
        height={500}
      />
    </div>
  );
};

export default HeroImage;
