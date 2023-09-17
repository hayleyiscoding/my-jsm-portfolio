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
    <div className='relative md:order-2 md:mt-8 lg:order-2'>
      <div className='fancy-border-radius bg-custom-red -translate-x-1/10 rotate-270 absolute right-3.5 top-5 h-[160px] w-[200px] md:h-[260px] md:w-[320px]'></div>

      <Image
        className={`blur-image ${
          imageLoaded ? "loaded" : ""
        } fancy-border-radius lg:scale-120 grayscale-40 relative p-5 pb-0 text-white md:mx-auto md:w-[22rem] md:p-7 2xl:origin-bottom`}
        src={HayleyProfile}
        alt="Hayley's profile picture"
        onLoad={handleImageLoad}
      />
    </div>
  );
};

export default HeroImage;
