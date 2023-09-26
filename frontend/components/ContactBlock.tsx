import Link from "next/link";

const ContactBlock = () => {
  return (
    <section id='contactBlock' className=' w-full rounded-xl pt-4 lg:px-1'>
      <div className='contactBlockContainer'>
        {/* Header */}
        <header className='pt-3 text-center lg:mb-0 lg:text-left'>
          <h2 className='contactBlockTitle'>Interested in hiring me?</h2>
          <h4 className='text-white font-extralight dark:text-white text-sm md:text-lg'>
            I would love to chat with you!
          </h4>
        </header>

        {/* Button */}
        <div className='mb-5 pt-4'>
          <Link href='/contact' className='contactBlockButton'>
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactBlock;
