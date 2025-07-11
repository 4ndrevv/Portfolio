import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { ContactForm } from '../components/ContactForm'
import { ContactExperience } from '../components/ContactExperience'
import { useTranslation } from 'react-i18next'

export const Contact = () => {
    const { t } = useTranslation();
  return (
    <section id="contact" className="flex-center relative md:p-0 px-5">
        <div className="w-full h-full container md:my-40 my-20">
            <TitleHeader 
                title={t('contact')}
                number="06"
                text={t('sub_contact')}
            />

            <div className="mt-20">
                <div className="grid grid-cols-12">
                    <div className="md:col-span-5 col-span-12">
                        <ContactForm />
                    </div>
                    <div className="md:col-span-7 col-span-12">
                        <div className="w-full h-full md:m-0 -mt-32 ">
                            <ContactExperience />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
