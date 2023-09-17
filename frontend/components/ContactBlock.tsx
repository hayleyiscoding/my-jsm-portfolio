import Link from "next/link";

const ContactBlock = () => {
  return (
    <section id='contactBlock' className='w-full rounded-xl lg:px-1 pt-4 -mb-4'>
      <div className='bg-custom-red flex flex-col items-center justify-between gap-6 rounded-xl p-8 lg:mb-0 lg:flex-row'>
        <div className='pt-3 text-center lg:mb-0 lg:text-left'>
          <h2 className=' text-2xl md:text-3xl font-normal text-white lg:text-4xl pb-1'>
            Interested in hiring me?
          </h2>
          <h4 className='font-extralight text-white'>
            I would love to chat with you!
          </h4>
        </div>
        <div className='mb-5 pt-4'>
          <Link
            href='/contact'
            className='custom-neumorphic-teal w-full min-w-[200px] cursor-pointer flex-col flex-wrap items-center justify-center rounded-md px-6 py-5 text-md md:text-lg font-normal leading-5 text-white shadow-2xl transition-all duration-200 hover:opacity-60 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 md:flex'
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactBlock;
