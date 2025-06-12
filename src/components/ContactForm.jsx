import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import * as Z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from '@emailjs/browser';

export const ContactForm = () => {

    const initialValues = {
        name: "",
        email: "",
        subject: "",
        message: "",
    };

    const contactFormSchema = Z.object({
        name: Z.string().nonempty("Name is Required"),
        email: Z.string().email("Invalid email").nonempty("Email is Required"),
        subject: Z.string().nonempty("Subject is Required"),
        message: Z.string().nonempty("Message is Required"),
    })

    const {register, handleSubmit, formState: {errors}, reset} = useForm({
        defaultValues: initialValues,
        resolver: zodResolver(contactFormSchema)
    });

    const [loading, setLoading] = useState(false);

    const onSubmit = async (data) => {
        setLoading(true);
        try{
            const payload = {
                title: data.subject,
                name: data.name,
                email: data.email,
                message: data.message,
                time: new Date().toDateString(),
            };
                const serviceID = import.meta.env.VITE_EMAIL_SERVICE_ID;
                const templateID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
                const userID = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

                await emailjs.send( serviceID, templateID, payload, {
                    publicKey: userID,
                } );

        } catch (error) {
            console.log("FAILE...", error);
            alert("Failed to send message");
        } finally {
            setLoading(false)
            reset(initialValues);
            alert("Sned message successfully");
        }
    };

  return (
    <div className="flex-center">
        <form onSubmit={handleSubmit(onSubmit)} className='w-full text-[#a7a7a7] flex flex-col gap-7' action="">
            <div className="">
                <label htmlFor="name" className="label">Name</label>
                <input {...register("name")} type="text" className="input" id="name" placeholder='Tommy' />
                {
                    errors.name && (
                        <span className='text-red-500'>{errors.name.message}</span>
                    )
                }
            </div>

            <div className="">
                <label htmlFor="email" className="label">Email adress</label>
                <input {...register("email")} type="text" className="input" id="name" placeholder='tommy@gmail.com' />
                {
                    errors.email && (
                        <span className='text-red-500'>{errors.email.message}</span>
                    )
                }
            </div>

            <div className="">
                <label htmlFor="subject" className="label">Subject</label>
                <input {...register("subject")} type="text" className="input" id="name" placeholder='Work Proposal for [Project/Task Name]' />
                {
                    errors.subject && (
                        <span className='text-red-500'>{errors.subject.message}</span>
                    )
                }
            </div>

            <div className="">
                <label htmlFor="message" className="label">Message</label>
                <textarea {...register("message")} rows={"5"} type="text" className="input" id="name" placeholder='Type here' />
                {
                    errors.message && (
                        <span className='text-red-500'>{errors.message.message}</span>
                    )
                }
            </div>

            <button disabled={loading} type="submit" className='disable:opacity-70 cursor-pointer w-full py-4 bg-blue-50 text-white-50 font-semibold rounded-md hover:bg-blue-600 trasition-all duration-300'>
                {
                    loading ? "Sending..." : "Send Message"
                }
            </button>
        </form>
    </div>
  )
}
