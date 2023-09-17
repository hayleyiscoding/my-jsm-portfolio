"use client";

import { useState, useRef } from "react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

import SectionHeader from "./SectionHeader";

const serviceId = process.env.SERVICE_ID;
const templateId = process.env.TEMPLATE_ID;
const publicKey = process.env.PUBLIC_KEY;
console.log(publicKey);

const ContactForm = () => {
  const [hasEmailSent, setHasEmailSent] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current || !serviceId || !templateId) return;

    setIsLoading(true);

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result: EmailJSResponseStatus) => {
        setHasEmailSent(true);
        setIsLoading(false);
        setTimeout(() => setHasEmailSent(false), 3000);
        resetForm();
        console.log(result.text);
        console.log("Email sent");
      },
      (error) => {
        setIsError(true);
        setTimeout(() => setIsError(false), 3000);
        resetForm();
        console.log(error.text);
      }
    );
  };

  const resetForm = () => {
    if (!form.current) return;
    const inputs = form.current.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
    }
  };

  return (
    <section
      id='contact'
      className='dark:custom-neumorphic-projects relative mt-6 h-auto'
    >
      <div className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto mb-8 max-w-2xl text-center'>
          <div className='mb-8 mt-6 pt-0 text-center md:mb-2'>
            <SectionHeader phrase1={`Get in `} phrase2={"Touch"} phrase3='!' />
          </div>
          <p className='md:text-md text-custom-black mx-auto max-w-xl px-5 text-center text-sm font-light leading-6 text-opacity-70 dark:text-white lg:-mt-6'>
            I&apos;d love to hear from you! If you have any questions, comments
            or feedback, please use the form below, or contact me on LinkedIn
            where I am most active. My email address is hayleyiscoding (@)
            gmail.com. Thanks!
          </p>
        </div>

        <div className='mx-auto max-w-2xl overflow-hidden rounded-xl'>
          <div className='px-6'>
            <form
              ref={form}
              onSubmit={sendEmail}
              className='dark:bg-custom-black mt-2 p-2'
            >
              <div className='grid grid-cols-1 gap-x-4 gap-y-1 sm:grid-cols-2'>
                <div>
                  <label
                    htmlFor='from_name'
                    className='text-custom-black text-base font-light dark:text-white'
                  >
                    Your name
                  </label>
                  <div className='relative '>
                    <input
                      type='text'
                      name='from_name'
                      id='from_name'
                      placeholder='Enter your name'
                      className='border-b-custom-red mb-6 block w-full rounded-md border-b bg-white p-4 text-white caret-blue-600 transition-all duration-200 placeholder:text-gray-500 focus:border-blue-600 focus:outline-none dark:bg-black md:mb-0'
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor='user-email'
                    className='text-custom-black text-base font-light dark:text-white'
                  >
                    Email address
                  </label>
                  <div className='relative mt-5'>
                    <input
                      type='email'
                      name='user-email'
                      id='user-email'
                      placeholder='Enter your email address'
                      className='border-b-custom-red block w-full rounded-md border-b bg-white p-4 text-white caret-blue-600 transition-all duration-200 placeholder:text-gray-500 focus:border-blue-600 focus:outline-none dark:bg-black'
                    />
                  </div>
                </div>

                <div className='mt-5 sm:col-span-2'>
                  <label
                    htmlFor=''
                    className='text-custom-black text-base font-light dark:text-white'
                  >
                    Message
                  </label>
                  <div className='relative mt-2 shadow-xl'>
                    <textarea
                      name='message'
                      id='message'
                      placeholder='Write your message'
                      className='border-b-custom-red mt-[20px] block w-full resize-y rounded-md border-b bg-white p-4 font-light text-white caret-blue-600 transition-all duration-200 placeholder:text-gray-500 focus:border-blue-600 focus:outline-none dark:bg-black'
                      rows={4}
                      maxLength={500}
                    ></textarea>
                  </div>
                </div>

                {/* Error */}
                {isError ? (
                  <div className='bg-custom-black h-24'>
                    <div className='flex h-full w-full items-end justify-end px-4 py-5 sm:p-6'>
                      <div className='bg-custom-red w-full max-w-sm overflow-hidden rounded-lg border border-white shadow-lg'>
                        <div className='p-3'>
                          <div className='flex items-center justify-between'>
                            <svg
                              className='h-5 w-5'
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                              strokeWidth='2'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M6 18L18 6M6 6l12 12'
                              ></path>
                            </svg>
                            <p className='ml-3 text-sm font-medium text-white'>
                              Error! Please try again.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}

                <div className='mb-32 sm:col-span-2'>
                  <button
                    type='submit'
                    value='Send'
                    className='text-md dark:bg-custom-red bg-custom-red absolute mt-8 inline-flex cursor-pointer items-center justify-center rounded-md border border-white px-10 py-3 font-light leading-5 text-white shadow-xl transition-all duration-200 hover:text-white hover:opacity-70 focus:outline-none focus:ring-2  focus:ring-black focus:ring-offset-2'
                  >
                    Send
                    <svg
                      className={`${
                        isLoading
                          ? "ml-2 inline-block h-6 w-6 animate-spin motion-reduce:animate-[spin_1.5s_linear_infinite]"
                          : "ml-2 h-6 w-6"
                      }`}
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth='2'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M13 7l5 5m0 0l-5 5m5-5H6'
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </form>

            {/* Notification */}
            {hasEmailSent ? (
              <div className='bg-custom-black z-5 absolute -ml-3 h-24 md:-ml-6'>
                <div className='h-full w-full py-5 sm:p-6'>
                  <div className='w-full max-w-sm overflow-hidden rounded-lg border border-white bg-green-500 shadow-lg'>
                    <div className='p-3'>
                      <div className='flex items-center justify-between'>
                        <svg
                          className='h-6 w-6 shrink-0 bg-green-500 text-white'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                          strokeWidth='2'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                          />
                        </svg>
                        <p className='ml-3 text-sm font-medium text-white'>
                          Email sent successfully!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
