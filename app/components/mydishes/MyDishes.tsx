"use client";
import React from 'react';
import { FaDrumstickBite, FaLeaf } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import type { RootState } from '../../lib/Store';
import { motion } from 'framer-motion';

type LanguageCode = 'en' | 'ar' | 'fr' | 'es';

interface Translations {
  heading: string;
  signatureTitle: string;
  signatureDescription: string;
  philosophyTitle: string;
  philosophyDescription: string;
}

const translations: Record<LanguageCode, Translations> = {
  en: {
    heading: "Our Popular Dishes",
    signatureTitle: "Our Signature Dish",
    signatureDescription:
      "At Sufi Bites, our signature Chicken Biryani is more than a meal – it's a cultural celebration. Slow-cooked with aromatic spices, saffron, and tender chicken, it's a favorite among thousands who crave authentic Pakistani taste.",
    philosophyTitle: "Desi Flavor Philosophy",
    philosophyDescription:
      "From spicy Nihari to melt-in-mouth Seekh Kebabs, we blend tradition and taste in every dish. Our philosophy is simple: use real ingredients, preserve true flavors, and cook with love — just like home.",
  },
  ar: {
    heading: "أطباقنا الشعبية",
    signatureTitle: "طبقنا المميز",
    signatureDescription:
      "في Sufi Bites، برياني الدجاج لدينا ليس مجرد وجبة - إنه احتفال ثقافي. يتم طهيه ببطء مع توابل عطرية وزعفران ودجاج طري، وهو المفضل لدى الآلاف الذين يتوقون إلى الطعم الباكستاني الأصيل.",
    philosophyTitle: "فلسفة النكهة الديسي",
    philosophyDescription:
      "من النهاري الحار إلى كباب السيك الذائب في الفم، نخلط بين التقاليد والطعم في كل طبق. فلسفتنا بسيطة: استخدم مكونات حقيقية، حافظ على النكهات الحقيقية، واطبخ بحب - تمامًا مثل المنزل.",
  },
  fr: {
    heading: "Nos Plats Populaires",
    signatureTitle: "Notre Plat Signature",
    signatureDescription:
      "Chez Sufi Bites, notre Biryani au Poulet signature est plus qu'un repas - c'est une célébration culturelle. Cuit lentement avec des épices aromatiques, du safran et du poulet tendre, c'est le préféré de milliers de personnes qui recherchent le goût authentique pakistanais.",
    philosophyTitle: "Philosophie de Saveur Desi",
    philosophyDescription:
      "Du Nihari épicé aux Seekh Kebabs fondants en bouche, nous mélangeons tradition et goût dans chaque plat. Notre philosophie est simple : utiliser de vrais ingrédients, préserver les vraies saveurs et cuisiner avec amour - comme à la maison.",
  },
  es: {
    heading: "Nuestros Platos Populares",
    signatureTitle: "Nuestro Plato Estrella",
    signatureDescription:
      "En Sufi Bites, nuestro Biryani de Pollo es más que una comida: es una celebración cultural. Cocido lentamente con especias aromáticas, azafrán y pollo tierno, es el favorito de miles que anhelan el auténtico sabor paquistaní.",
    philosophyTitle: "Filosofía de Sabor Desi",
    philosophyDescription:
      "Desde el picante Nihari hasta los Seekh Kebabs que se derriten en la boca, mezclamos tradición y sabor en cada plato. Nuestra filosofía es simple: usar ingredientes reales, preservar los sabores auténticos y cocinar con amor, como en casa.",
  },
};

const MyDishes = () => {
  const currentLanguage = useSelector(
    (state: RootState) => state.language.currentLanguage
  );
  const t = translations[currentLanguage];

  return (
    <div className="w-full bg-white mx-auto px-4 md:px-8 py-2">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
        {t.heading}
        <div className="flex justify-center mt-2">
          <div className="w-20 h-1 bg-red-600 rounded-full"></div>
        </div>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Text */}
        <motion.div
          className="space-y-10"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-start gap-4">
            <div className="text-red-600 text-3xl">
              <FaDrumstickBite />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                {t.signatureTitle}
              </h3>
              <p className="text-gray-700 mt-1">{t.signatureDescription}</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="text-red-600 text-3xl">
              <FaLeaf />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                {t.philosophyTitle}
              </h3>
              <p className="text-gray-700 mt-1">{t.philosophyDescription}</p>
            </div>
          </div>
        </motion.div>

        {/* Right: Images with Animation */}
        <div className="relative w-full h-[380px] md:h-[400px] flex items-center justify-center">
          <motion.img
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
            src="https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=500&q=80"
            alt="Chicken Biryani"
            className="absolute top-0 left-0 w-[44%] object-cover rounded-xl shadow-xl z-40"
          />

          <motion.img
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            src="https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&w=500&q=80"
            alt="Nihari"
            className="absolute top-10 left-10 w-[55%] object-cover rounded-xl shadow-xl z-30"
          />

          <motion.img
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            src="/Nihari.jpg"
            alt="Seekh Kebab"
            className="absolute top-20 left-20 w-[66%] object-cover rounded-xl shadow-xl z-20"
          />

          <motion.img
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            src="/Halwa Puri .jpg"
            alt="Halwa Puri"
            className="absolute top-28 left-32 w-[77%] object-cover rounded-xl shadow-xl z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default MyDishes;
