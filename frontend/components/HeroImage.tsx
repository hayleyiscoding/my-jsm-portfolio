import Image from "next/image";
import "animate.css";

import HayleyProfile from "../public/assets/hayley-profile.jpg";

const HeroImage = () => {
  return (
    <div className='relative md:order-2 mt-8 lg:mt-0'>
      {/* Blob */}
      <div className='blob animate__animated animate__fadeInRight'></div>

      {/* Photo */}
      <Image
        className='heroPhoto animate__animated animate__flipInY'
        src={HayleyProfile}
        alt="Hayley's profile picture"
        width={500}
        height={500}
      />
    </div>
  );
};

export default HeroImage;
