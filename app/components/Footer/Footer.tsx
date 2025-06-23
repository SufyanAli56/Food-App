// components/Footer/Footer.tsx
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { GiFoodTruck } from "react-icons/gi";
import { FiChevronDown } from "react-icons/fi";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

import US from 'country-flag-icons/react/3x2/US';
import SA from 'country-flag-icons/react/3x2/SA';
import FR from 'country-flag-icons/react/3x2/FR';
import ES from 'country-flag-icons/react/3x2/ES';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../lib/Store';
import { setLanguage } from '../../lib/languageSlice';

// Type definitions
type LanguageCode = 'en' | 'ar' | 'fr' | 'es';

interface Language {
  code: LanguageCode;
  name: string;
  flag: React.ReactNode;
}

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
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [email, setEmail] = useState('');
  
  // Redux hooks
  const dispatch = useDispatch();
  const currentLanguage = useSelector((state: RootState) => state.language.currentLanguage);

  // Language and translation data
  const languages: Language[] = [
    { code: "en", name: "English", flag: <US className="w-4 h-4 mr-2" /> },
    { code: "ar", name: "العربية", flag: <SA className="w-4 h-4 mr-2" /> },
    { code: "fr", name: "Français", flag: <FR className="w-4 h-4 mr-2" /> },
    { code: "es", name: "Español", flag: <ES className="w-4 h-4 mr-2" /> },
  ];

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

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <GiFoodTruck className="text-3xl text-orange-500" />
              <span className="text-2xl font-extrabold text-orange-600 tracking-tight">
                Sufi Bites
              </span>
            </div>
            <p className="text-gray-400">
              {translations[currentLanguage].address}
            </p>
            <p className="text-gray-400">
              {translations[currentLanguage].hours}
            </p>
            <p className="text-gray-400">
              {translations[currentLanguage].phone}
            </p>
            <p className="text-gray-400">
              {translations[currentLanguage].email}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-orange-600 pb-2">
              {translations[currentLanguage].links}
            </h3>
            <ul className="space-y-3">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/menu/breakfast"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  {translations[currentLanguage].breakfast}
                </Link>
              </li>
              <li>
                <Link
                  href="/menu/lunch"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  {translations[currentLanguage].lunch}
                </Link>
              </li>
              <li>
                <Link
                  href="/menu/dinner"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  {translations[currentLanguage].dinner}
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-orange-600 pb-2">
              {translations[currentLanguage].newsletter}
            </h3>
            <p className="text-gray-400 mb-4">
              {translations[currentLanguage].newsletter}
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-600"
                required
              />
              <button
                type="submit"
                className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300"
              >
                {translations[currentLanguage].subscribe}
              </button>
            </form>
          </div>

          {/* Language and Social */}
          <div className="space-y-6">
            {/* Language Selector */}
            <div className="relative inline-block">
              <button
                className="flex items-center space-x-1 px-4 py-2 bg-gray-800 rounded-lg text-white hover:bg-gray-700 transition-colors"
                onClick={() => setIsLangOpen(!isLangOpen)}
              >
                {languages.find(lang => lang.code === currentLanguage)?.flag}
                <span className="ml-1">
                  {languages.find(lang => lang.code === currentLanguage)?.name}
                </span>
                <FiChevronDown className={`ml-1 transition-transform ${
                  isLangOpen ? "rotate-180" : ""
                }`} />
              </button>

              {isLangOpen && (
                <div className="absolute bottom-full left-0 mb-2 w-full bg-gray-800 shadow-lg rounded-md py-1 z-10">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className={`flex items-center w-full text-left px-4 py-2 text-sm ${
                        currentLanguage === lang.code
                          ? "bg-orange-600 text-white"
                          : "text-gray-300 hover:bg-gray-700"
                      }`}
                      onClick={() => {
                        dispatch(setLanguage(lang.code));
                        setIsLangOpen(false);
                      }}
                    >
                      {lang.flag}
                      <span className="ml-2">{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-lg font-semibold mb-4 border-b border-orange-600 pb-2">
                {translations[currentLanguage].followUs}
              </h3>
              <div className="flex space-x-4">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  <FaFacebook className="w-6 h-6" />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  <FaTwitter className="w-6 h-6" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  <FaInstagram className="w-6 h-6" />
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  <FaYoutube className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Sufi Bites. {translations[currentLanguage].rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;