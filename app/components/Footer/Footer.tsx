"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { GiFoodTruck } from "react-icons/gi";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSelector } from 'react-redux';
import type { RootState } from '../../lib/Store';

// Type definitions
type LanguageCode = 'en' | 'ar' | 'fr' | 'es';

type TranslationKey = 'home' | 'menu' | 'about' | 'contact' | 'orderNow' | 
                     'breakfast' | 'lunch' | 'dinner' | 'drinks' |
                     'address' | 'hours' | 'followUs' | 'newsletter' |
                     'subscribe' | 'rights' | 'phone' | 'email' | 'links';

interface Translations {
  en: Record<TranslationKey, string>;
  ar: Record<TranslationKey, string>;
  fr: Record<TranslationKey, string>;
  es: Record<TranslationKey, string>;
}

interface MenuItem {
  href: string;
  label: string;
}

const Footer = () => {
  // State management
  const [email, setEmail] = useState('');
  const [isMounted, setIsMounted] = useState(false);
  
  // Redux hooks
  const currentLanguage = useSelector((state: RootState) => state.language.currentLanguage);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const translations: Translations = {
    en: {
      home: "Home",
      menu: "Menu",
      about: "About",
      contact: "Contact",
      orderNow: "Order Now",
      breakfast: "Breakfast",
      lunch: "Lunch",
      dinner: "Dinner",
      drinks: "Drinks",
      address: "123 Restaurant Street, Food City, FC 12345",
      hours: "Open Daily: 9:00 AM - 11:00 PM",
      followUs: "Follow Us",
      newsletter: "Subscribe to our newsletter",
      subscribe: "Subscribe",
      rights: "All rights reserved",
      phone: "Phone: (123) 456-7890",
      email: "Email: info@sufibites.com",
      links: "Quick Links"
    },
    ar: {
      home: "الرئيسية",
      menu: "قائمة الطعام",
      about: "من نحن",
      contact: "اتصل بنا",
      orderNow: "اطلب الآن",
      breakfast: "فطور",
      lunch: "غداء",
      dinner: "عشاء",
      drinks: "مشروبات",
      address: "شارع المطعم ١٢٣، مدينة الغذاء",
      hours: "مفتوح يومياً: ٩ صباحاً - ١١ مساءً",
      followUs: "تابعنا",
      newsletter: "اشترك في نشرتنا الإخبارية",
      subscribe: "اشتراك",
      rights: "جميع الحقوق محفوظة",
      phone: "الهاتف: ٤٥٦-٧٨٩٠ (١٢٣)",
      email: "البريد الإلكتروني: info@sufibites.com",
      links: "روابط سريعة"
    },
    fr: {
      home: "Accueil",
      menu: "Menu",
      about: "À propos",
      contact: "Contact",
      orderNow: "Commander",
      breakfast: "Petit-déjeuner",
      lunch: "Déjeuner",
      dinner: "Dîner",
      drinks: "Boissons",
      address: "123 Rue du Restaurant, Ville de Nourriture",
      hours: "Ouvert tous les jours: 9h00 - 23h00",
      followUs: "Suivez-nous",
      newsletter: "Abonnez-vous à notre newsletter",
      subscribe: "S'abonner",
      rights: "Tous droits réservés",
      phone: "Téléphone: (123) 456-7890",
      email: "Email: info@sufibites.com",
      links: "Liens rapides"
    },
    es: {
      home: "Inicio",
      menu: "Menú",
      about: "Nosotros",
      contact: "Contacto",
      orderNow: "Ordenar",
      breakfast: "Desayuno",
      lunch: "Almuerzo",
      dinner: "Cena",
      drinks: "Bebidas",
      address: "123 Calle del Restaurante, Ciudad de Comida",
      hours: "Abierto todos los días: 9:00 AM - 11:00 PM",
      followUs: "Síguenos",
      newsletter: "Suscríbete a nuestro boletín",
      subscribe: "Suscribirse",
      rights: "Todos los derechos reservados",
      phone: "Teléfono: (123) 456-7890",
      email: "Correo: info@sufibites.com",
      links: "Enlaces Rápidos"
    }
  };

  // Generate translated menu items
  const getTranslatedMenuItems = (): MenuItem[] => [
    { href: "/", label: translations[currentLanguage].home },
    { href: "/menu", label: translations[currentLanguage].menu },
    { href: "/about", label: translations[currentLanguage].about },
    { href: "/contact", label: translations[currentLanguage].contact },
  ];

  const menuItems = getTranslatedMenuItems();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement subscription logic here
    setEmail('');
  };

  if (!isMounted) return null;

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-black text-white pt-12 pb-6"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="flex items-center space-x-2"
            >
              <GiFoodTruck className="text-3xl text-red-600" />
              <span className="text-2xl font-extrabold text-red-600 tracking-tight">
                Sufi Bites
              </span>
            </motion.div>
            <p className="text-gray-300">
              {translations[currentLanguage].address}
            </p>
            <p className="text-gray-300">
              {translations[currentLanguage].hours}
            </p>
            <p className="text-gray-300">
              {translations[currentLanguage].phone}
            </p>
            <p className="text-gray-300">
              {translations[currentLanguage].email}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-red-600 pb-2 text-white">
              {translations[currentLanguage].links}
            </h3>
            <ul className="space-y-3">
              {menuItems.map((item) => (
                <motion.li 
                  key={item.href}
                  whileHover={{ x: 5 }}
                >
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-red-500 transition-colors duration-300 flex items-center"
                  >
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                    {item.label}
                  </Link>
                </motion.li>
              ))}
              {['breakfast', 'lunch', 'dinner'].map((meal) => (
                <motion.li 
                  key={meal}
                  whileHover={{ x: 5 }}
                >
                  <Link
                    href={`/menu/${meal}`}
                    className="text-gray-300 hover:text-red-500 transition-colors duration-300 flex items-center"
                  >
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                    {translations[currentLanguage][meal as keyof typeof translations[LanguageCode]]}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-red-600 pb-2 text-white">
              {translations[currentLanguage].newsletter}
            </h3>
            <p className="text-gray-300 mb-4">
              Stay updated with our latest offers and news.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col space-y-3">
              <motion.div whileHover={{ scale: 1.01 }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-600 placeholder-gray-400"
                  required
                />
              </motion.div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-red-500/20"
              >
                {translations[currentLanguage].subscribe}
              </motion.button>
            </form>
          </div>

          {/* Social Media */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold mb-4 border-b border-red-600 pb-2 text-white">
              {translations[currentLanguage].followUs}
            </h3>
            <div className="flex space-x-4">
              {[
                { icon: <FaFacebook className="w-6 h-6" />, color: "hover:text-red-500" },
                { icon: <FaTwitter className="w-6 h-6" />, color: "hover:text-red-500" },
                { icon: <FaInstagram className="w-6 h-6" />, color: "hover:text-red-500" },
                { icon: <FaYoutube className="w-6 h-6" />, color: "hover:text-red-500" }
              ].map((social, index) => (
                <motion.a 
                  key={index}
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`text-gray-300 ${social.color} transition-colors duration-300`}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Sufi Bites. {translations[currentLanguage].rights}
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;