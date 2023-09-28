"use client";

import emailjs from "@emailjs/browser";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { heroInfo, socialLinks } from "@/constants";
import {
  ButtonWithSpinner,
  SectionHeader,
  CopyButton,
} from "../components/index";

const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

const contactSchema = z.object({
  name: z.string().nonempty({ message: "Name is required" }),
  email: z.string().email({ message: "Invalid email format" }),
  message: z
    .string()
    .nonempty({ message: "Message is required" })
    .max(500, { message: "Message exceeds 500 characters" }),
});

const ContactForm = () => {
  // Toast Messages
  const messageSentToast = () => toast("Message Sent!");
  const errorToast = () => toast("Something went wrong");

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const { isSubmitting } = form.formState;

  async function onSubmit(data: z.infer<typeof contactSchema>) {
    try {
      const templateParams = {
        name: data.name,
        email: data.email,
        message: data.message,
      };

      if (!serviceId || !templateId || !publicKey) return errorToast();

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      messageSentToast();
      form.reset();

      console.log("Email sent");
    } catch (err) {
      console.error("Something went wrong!", err);

      errorToast();
    }
  }

  return (
    <section className='contactFormSection'>
      <div className='my-10'>
        <Card className='flex flex-col lg:flex-row'>
          {/* Form Header */}
          <div className='basis-1/2 space-y-2 px-5 py-4'>
            <SectionHeader phrase2='Get in Touch!' />
            <div className='pt-4 lg:-mt-20'>
              <div className='mb-5 pr-6 text-white opacity-90 lg:-mt-10'>
                I&apos;d love to hear from you! If you have any questions,
                comments or feedback, please use the form below - or contact me
                on LinkedIn where I am most active. Thanks!
              </div>
            </div>

            <div className='max-w-[250px]'>
              <div className='heroEmail'>
                {heroInfo.email}
                <CopyButton text={heroInfo.email} />
              </div>
            </div>
            <ul className='flex gap-4 py-4'>
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
          </div>

          {/* Form */}
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className='mt-4 flex-1 basis-1/2 space-y-8 lg:mt-16'
            >
              <CardContent className='grid gap-4 pb-0'>
                {/* Name Input */}
                <FormField
                  control={form.control}
                  name='name'
                  render={({ field }) => (
                    <FormItem className='mb-[10px] grid gap-2'>
                      <FormLabel
                        htmlFor='name'
                        className='signInInputLabel dark:text-custom-teal text-white'
                      >
                        Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          id='name'
                          type='text'
                          placeholder='Enter your name'
                          className='nameInput'
                        />
                      </FormControl>
                      <FormMessage className='formMessage' />
                    </FormItem>
                  )}
                />

                {/* Email Input */}
                <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                    <FormItem className='mb-[10px] grid gap-2'>
                      <FormLabel
                        htmlFor='email'
                        className='signInInputLabel dark:text-custom-teal text-white'
                      >
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          id='email'
                          type='email'
                          placeholder='Enter your email address'
                          className='emailInput'
                        />
                      </FormControl>
                      <FormMessage className='formMessage' />
                    </FormItem>
                  )}
                />

                {/* Message Input */}
                <FormField
                  control={form.control}
                  name='message'
                  render={({ field }) => (
                    <FormItem className='mb-[10px] grid gap-2'>
                      <FormLabel
                        htmlFor='message'
                        className='signInInputLabel dark:text-custom-teal text-white'
                      >
                        Message
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          id='message'
                          placeholder='Enter your message here'
                          className='inputField contactTextArea'
                          rows={7}
                        />
                      </FormControl>
                      <FormMessage className='formMessage' />
                    </FormItem>
                  )}
                />
              </CardContent>

              {/* Button */}
              <CardFooter className='flex flex-col'>
                <ButtonWithSpinner
                  isLoading={isSubmitting}
                  loadingText='Sending...'
                  text='Send'
                />
                <ToastContainer
                  position='top-right'
                  hideProgressBar
                  newestOnTop={false}
                  closeOnClick
                  theme='light'
                />
              </CardFooter>
            </form>
          </Form>
        </Card>
      </div>
    </section>
  );
};

export default ContactForm;
