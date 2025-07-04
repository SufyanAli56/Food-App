'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import type { RootState } from '../../lib/Store';

// Type definitions
type LanguageCode = 'en' | 'ar' | 'fr' | 'es';

type TranslationKey = 'title' | 'subtitle' | 'nameLabel' | 'emailLabel' | 
                     'messageLabel' | 'submitButton' | 'successTitle' | 
                     'successMessage' | 'placeholderName' | 'placeholderEmail' |
                     'placeholderMessage';

interface Translations {
  en: Record<TranslationKey, string>;
  ar: Record<TranslationKey, string>;
  fr: Record<TranslationKey, string>;
  es: Record<TranslationKey, string>;
}

const GetInTouch: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const currentLanguage = useSelector((state: RootState) => state.language.currentLanguage);

  const translations: Translations = {
    en: {
      title: "Get In Touch",
      subtitle: "We'd love to hear from you! Fill out the form below and we'll get back to you soon.",
      nameLabel: "Name",
      emailLabel: "Email",
      messageLabel: "Message",
      submitButton: "Send Message",
      successTitle: "✅ Your message has been sent!",
      successMessage: "We'll get back to you within 24 hours.",
      placeholderName: "Your name",
      placeholderEmail: "Your email",
      placeholderMessage: "Your message..."
    },
    ar: {
      title: "تواصل معنا",
      subtitle: "نحن نحب أن نسمع منك! املأ النموذج أدناه وسنعاود الاتصال بك قريبًا.",
      nameLabel: "الاسم",
      emailLabel: "البريد الإلكتروني",
      messageLabel: "الرسالة",
      submitButton: "إرسال الرسالة",
      successTitle: "✅ تم إرسال رسالتك!",
      successMessage: "سوف نرد عليك خلال 24 ساعة.",
      placeholderName: "اسمك",
      placeholderEmail: "بريدك الإلكتروني",
      placeholderMessage: "رسالتك..."
    },
    fr: {
      title: "Contactez-nous",
      subtitle: "Nous aimerions avoir de vos nouvelles! Remplissez le formulaire ci-dessous et nous vous répondrons bientôt.",
      nameLabel: "Nom",
      emailLabel: "Email",
      messageLabel: "Message",
      submitButton: "Envoyer le message",
      successTitle: "✅ Votre message a été envoyé!",
      successMessage: "Nous vous répondrons dans les 24 heures.",
      placeholderName: "Votre nom",
      placeholderEmail: "Votre email",
      placeholderMessage: "Votre message..."
    },
    es: {
      title: "Contáctenos",
      subtitle: "¡Nos encantaría saber de usted! Complete el formulario a continuación y nos pondremos en contacto con usted pronto.",
      nameLabel: "Nombre",
      emailLabel: "Correo electrónico",
      messageLabel: "Mensaje",
      submitButton: "Enviar mensaje",
      successTitle: "✅ ¡Su mensaje ha sido enviado!",
      successMessage: "Nos pondremos en contacto con usted dentro de 24 horas.",
      placeholderName: "Tu nombre",
      placeholderEmail: "Tu correo electrónico",
      placeholderMessage: "Tu mensaje..."
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="relative bg-white py-16 px-6 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-[#f8f3ec]"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Image on the left with cool frame */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative mb-12 lg:mb-0 lg:pr-8"
          >
            <div className="relative w-full h-[500px] overflow-hidden rounded-xl shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Contact us"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#5b3b1c]/10 to-[#b4884b]/10"></div>
            </div>
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="absolute -bottom-6 -left-6 w-24 h-24 border-4 border-[#b4884b] rounded-lg opacity-30"
            ></motion.div>
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute -top-6 -right-6 w-16 h-16 border-4 border-[#5b3b1c] rounded-lg opacity-30"
            ></motion.div>
          </motion.div>
          
          {/* Form that floats over with cool effects */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-[55%] xl:w-[50%] lg:ml-[-80px] relative"
          >
            <div className="bg-white p-8 sm:p-10 rounded-xl shadow-2xl border border-[#e8e0d5] transform -rotate-1 transition-all duration-300 hover:rotate-0 h-full">
              <div className="h-full flex flex-col">
                <div>
                  <motion.h2 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-3xl sm:text-4xl font-bold text-[#5b3b1c] mb-4 relative"
                  >
                    {translations[currentLanguage].title}
                    <motion.span 
                      initial={{ width: 0 }}
                      animate={{ width: '80px' }}
                      transition={{ delay: 0.6 }}
                      className="absolute bottom-0 left-0 w-20 h-1 bg-[#b4884b] rounded-full"
                    ></motion.span>
                  </motion.h2>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-gray-600 mb-8 text-lg"
                  >
                    {translations[currentLanguage].subtitle}
                  </motion.p>

                  {submitted && (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6 rounded"
                    >
                      <p className="font-medium">{translations[currentLanguage].successTitle}</p>
                      <p className="text-sm mt-1">{translations[currentLanguage].successMessage}</p>
                    </motion.div>
                  )}
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 flex-grow flex flex-col">
                  <div className="space-y-6 flex-grow">
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 }}
                      className="relative group"
                    >
                      <label htmlFor="name" className="block mb-2 font-medium text-gray-700 text-lg">
                        {translations[currentLanguage].nameLabel}
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={translations[currentLanguage].placeholderName}
                        className="w-full border-b-2 border-gray-300 rounded-t-md px-4 py-3 focus:outline-none focus:border-[#b4884b] transition-all bg-gray-50 text-lg"
                      />
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#b4884b] transition-all duration-300 group-hover:w-full"></div>
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 }}
                      className="relative group"
                    >
                      <label htmlFor="email" className="block mb-2 font-medium text-gray-700 text-lg">
                        {translations[currentLanguage].emailLabel}
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={translations[currentLanguage].placeholderEmail}
                        className="w-full border-b-2 border-gray-300 rounded-t-md px-4 py-3 focus:outline-none focus:border-[#b4884b] transition-all bg-gray-50 text-lg"
                      />
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#b4884b] transition-all duration-300 group-hover:w-full"></div>
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 }}
                      className="relative flex-grow flex flex-col group"
                    >
                      <label htmlFor="message" className="block mb-2 font-medium text-gray-700 text-lg">
                        {translations[currentLanguage].messageLabel}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={translations[currentLanguage].placeholderMessage}
                        className="w-full border-b-2 border-gray-300 rounded-t-md px-4 py-3 focus:outline-none focus:border-[#b4884b] transition-all bg-gray-50 text-lg flex-grow"
                      />
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#b4884b] transition-all duration-300 group-hover:w-full"></div>
                    </motion.div>
                  </div>

                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    type="submit"
                    className="relative overflow-hidden bg-[#b4884b] hover:bg-[#a3783e] text-white font-semibold px-6 py-3 w-full sm:w-60 rounded-md transition-all duration-300 group text-lg mt-auto"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      {translations[currentLanguage].submitButton}
                      <svg 
                        className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </span>
                    <span className="absolute inset-0 bg-[#5b3b1c] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </motion.button>
                </form>
              </div>
            </div>
            
            {/* Decorative elements */}
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1 }}
              className="absolute -z-10 -top-8 -right-8 w-32 h-32 rounded-full bg-[#f8f3ec]"
            ></motion.div>
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.1 }}
              className="absolute -z-10 -bottom-8 -left-8 w-20 h-20 rounded-full bg-[#f8f3ec]"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;