import Link from "next/link";

const ContactBlock = () => {
  return (
    <section id='contactBlock' className=' w-full rounded-xl pt-4 lg:px-1'>
      <div className='contactBlockContainer'>
        <div className='pt-3 text-center lg:mb-0 lg:text-left'>
          <h2 className='contactBlockTitle'>Interested in hiring me?</h2>
          <h4 className='text-white font-extralight dark:text-white'>
            I would love to chat with you!
          </h4>
        </div>
        <div className='mb-5 pt-4'>
          <Link
            href='/contact'
            className='custom-neumorphic-teal hover:custom-neumorphic-teal-pressed dark:custom-neumorphic-process hover:dark:custom-neumorphic-black-pressed text-md w-full min-w-[200px] cursor-pointer flex-col flex-wrap items-center justify-center rounded-md px-6 py-5 font-normal leading-5 shadow-2xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 text-white dark:text-custom-red md:flex md:text-lg'
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactBlock;
