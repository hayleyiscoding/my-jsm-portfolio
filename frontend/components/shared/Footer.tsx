import Link from "next/link";

import { socialLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className='dark:bg-custom-black lg:mx-32 mt-5 rounded-xl px-7 py-5'>
      <div className='mx-auto'>
        <hr className='border-cream mt-5' />

        <div className='mt-5 sm:flex sm:items-center sm:justify-between'>
          <ul className='footerSocialDiv'>
            {socialLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.url}
                  target='_blank'
                  rel='noopener'
                  className='footerSocial'
                >
                  {link.icon}
                </Link>
              </li>
            ))}
          </ul>

          <p className='footerText'>
            <span className='text-white dark:text-custom-red leading-10 tracking-wider '>
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
