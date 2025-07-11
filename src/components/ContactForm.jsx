import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import * as Z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

export const ContactForm = () => {

    const { t } = useTranslation();

    const initialValues = {
        name: "",
        email: "",
        subject: "",
        message: "",
    };

    const contactFormSchema = Z.object({
        name: Z.string().nonempty(t('contact_warning.name')),
        email: Z.string().email(t('contact_warning.email_1')).nonempty(t('contact_warning.email_2')),
        subject: Z.string().nonempty(t('contact_warning.subject')),
        message: Z.string().nonempty(t('contact_warning.message')),
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
                <label htmlFor="name" className="label">{t('contact_name')}</label>
                <input {...register("name")} type="text" className="input" id="name" placeholder='Tommy' />
                {
                    errors.name && (
                        <span className='text-red-500'>{errors.name.message}</span>
                    )
                }
            </div>

            <div className="">
                <label htmlFor="email" className="label">{t('contact_email')}</label>
                <input {...register("email")} type="text" className="input" id="name" placeholder='tommy@gmail.com' />
                {
                    errors.email && (
                        <span className='text-red-500'>{errors.email.message}</span>
                    )
                }
            </div>

            <div className="">
                <label htmlFor="subject" className="label">{t('contact_subject')}</label>
                <input {...register("subject")} type="text" className="input" id="name" placeholder={t('contact_subject_placeholder')} />
                {
                    errors.subject && (
                        <span className='text-red-500'>{errors.subject.message}</span>
                    )
                }
            </div>

            <div className="">
                <label htmlFor="message" className="label">{t('contact_message')}</label>
                <textarea {...register("message")} rows={"5"} type="text" className="input" id="name" placeholder={t('contact_message_placeholder')} />
                {
                    errors.message && (
                        <span className='text-red-500'>{errors.message.message}</span>
                    )
                }
            </div>

            <button disabled={loading} type="submit" className='disable:opacity-70 cursor-pointer w-full py-4 bg-blue-50 text-white-50 font-semibold rounded-md hover:bg-blue-600 trasition-all duration-300'>
                {
                    loading ? t('contact_button_sending') : t('contact_button')
                }
            </button>
        </form>
    </div>
  )
}
