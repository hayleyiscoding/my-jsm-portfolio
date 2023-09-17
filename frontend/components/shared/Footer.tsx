import Link from "next/link";

import { socialLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className='dark:bg-custom-black mt-5 rounded-xl px-7 py-5'>
      <div className='mx-auto'>
        <hr className='border-cream mt-5' />

        <div className='mt-5 sm:flex sm:items-center sm:justify-between'>
          <ul className='flex items-center justify-center space-x-6 sm:order-2 sm:justify-end'>
            {socialLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.url}
                  target='_blank'
                  rel='noopener'
                  className='text-custom-black focus:ring-primary focus:ring-offset-secondary inline-flex rounded transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 dark:text-white'
                >
                  {link.icon}
                </Link>
              </li>
            ))}
          </ul>

          <p className='text-custom-black mt-6 text-center font-sans text-sm font-normal text-opacity-50 dark:text-white sm:order-1 sm:mt-0 sm:text-left'>
            <span className='text-custom-red leading-10 tracking-wider '>
              Designed and developed with ❤️ by Hayley
            </span>
            <br />
            hayleyiscoding (@) gmail.com | ©2023
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
