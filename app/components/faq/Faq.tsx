'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';
import type { RootState } from '../../lib/Store';

// Type definitions
type LanguageCode = 'en' | 'ar' | 'fr' | 'es';

type TranslationKey = 'title' | 'faq1_question' | 'faq1_answer' | 
                     'faq2_question' | 'faq2_answer' | 'faq3_question' | 
                     'faq3_answer' | 'faq4_question' | 'faq4_answer';

interface Translations {
  en: Record<TranslationKey, string>;
  ar: Record<TranslationKey, string>;
  fr: Record<TranslationKey, string>;
  es: Record<TranslationKey, string>;
}

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const currentLanguage = useSelector((state: RootState) => state.language.currentLanguage);

  const translations: Translations = {
    en: {
      title: "Frequently Asked Questions",
      faq1_question: "What is Sufi Bites?",
      faq1_answer: "Sufi Bites is a platform offering delicious, home-cooked meals inspired by traditional Sufi recipes.",
      faq2_question: "Do you offer delivery?",
      faq2_answer: "Yes, we provide fast and fresh delivery services across selected areas.",
      faq3_question: "Are your ingredients organic?",
      faq3_answer: "Most of our ingredients are locally sourced and organic where possible.",
      faq4_question: "Can I customize my order?",
      faq4_answer: "Absolutely! You can add notes or preferences while placing your order."
    },
    ar: {
      title: "أسئلة شائعة",
      faq1_question: "ما هو سوفي بايتس؟",
      faq1_answer: "سوفي بايتس هي منصة تقدم وجبات لذيذة محضرة في المنزل مستوحاة من وصفات صوفية تقليدية.",
      faq2_question: "هل تقدمون خدمة التوصيل؟",
      faq2_answer: "نعم، نقدم خدمة توصيل سريعة وطازجة في المناطق المحددة.",
      faq3_question: "هل مكوناتكم عضوية؟",
      faq3_answer: "معظم مكوناتنا محلية المصدر وعضوية حيثما أمكن ذلك.",
      faq4_question: "هل يمكنني تخصيص طلبي؟",
      faq4_answer: "بالتأكيد! يمكنك إضافة ملاحظات أو تفضيلات عند تقديم الطلب."
    },
    fr: {
      title: "Questions Fréquemment Posées",
      faq1_question: "Qu'est-ce que Sufi Bites?",
      faq1_answer: "Sufi Bites est une plateforme proposant des plats délicieux faits maison inspirés des recettes soufies traditionnelles.",
      faq2_question: "Offrez-vous la livraison?",
      faq2_answer: "Oui, nous proposons un service de livraison rapide et fraîche dans certaines zones.",
      faq3_question: "Vos ingrédients sont-ils biologiques?",
      faq3_answer: "La plupart de nos ingrédients sont locaux et biologiques dans la mesure du possible.",
      faq4_question: "Puis-je personnaliser ma commande?",
      faq4_answer: "Absolument! Vous pouvez ajouter des notes ou des préférences lors de votre commande."
    },
    es: {
      title: "Preguntas Frecuentes",
      faq1_question: "¿Qué es Sufi Bites?",
      faq1_answer: "Sufi Bites es una plataforma que ofrece comidas caseras deliciosas inspiradas en recetas sufíes tradicionales.",
      faq2_question: "¿Ofrecen entrega a domicilio?",
      faq2_answer: "Sí, ofrecemos un servicio de entrega rápida y fresca en áreas seleccionadas.",
      faq3_question: "¿Sus ingredientes son orgánicos?",
      faq3_answer: "La mayoría de nuestros ingredientes son de origen local y orgánicos cuando es posible.",
      faq4_question: "¿Puedo personalizar mi pedido?",
      faq4_answer: "¡Absolutamente! Puedes agregar notas o preferencias al realizar tu pedido."
    }
  };

  const faqData: FaqItem[] = [
    {
      question: translations[currentLanguage].faq1_question,
      answer: translations[currentLanguage].faq1_answer,
    },
    {
      question: translations[currentLanguage].faq2_question,
      answer: translations[currentLanguage].faq2_answer,
    },
    {
      question: translations[currentLanguage].faq3_question,
      answer: translations[currentLanguage].faq3_answer,
    },
    {
      question: translations[currentLanguage].faq4_question,
      answer: translations[currentLanguage].faq4_answer,
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center mb-12 text-[#5b3b1c]"
      >
        {translations[currentLanguage].title}
      </motion.h2>
      
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="border border-gray-200 rounded-xl shadow-sm overflow-hidden bg-white hover:shadow-md transition-shadow duration-300"
          >
            <motion.button
              onClick={() => toggleFaq(index)}
              className="w-full text-left px-6 py-5 flex justify-between items-center text-lg font-medium text-gray-800 hover:text-[#b4884b] transition-colors duration-200"
              whileHover={{ backgroundColor: '#f8f3ec' }}
            >
              <span className="text-start">{item.question}</span>
              <motion.span 
                className="text-2xl text-[#b4884b] ml-4"
                animate={{ rotate: openIndex === index ? 45 : 0 }}
                transition={{ duration: 0.2 }}
              >
                +
              </motion.span>
            </motion.button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 overflow-hidden"
                >
                  <div className="pb-5 text-gray-600 leading-relaxed">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Decorative elements */}
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute left-0 -bottom-20 w-32 h-32 rounded-full bg-[#f8f3ec] opacity-20 -z-10"
      ></motion.div>
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.7 }}
        className="absolute right-0 -top-20 w-40 h-40 rounded-full bg-[#f8f3ec] opacity-20 -z-10"
      ></motion.div>
    </section>
  );
};

export default Faq;

type FaqItem = {
  question: string;
  answer: string;
};