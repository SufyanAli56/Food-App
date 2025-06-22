"use client";
import React, { useState } from "react";
import Link from "next/link";
import { GiFoodTruck } from "react-icons/gi";
import { FiChevronDown } from "react-icons/fi";



import US from 'country-flag-icons/react/3x2/US';
import SA from 'country-flag-icons/react/3x2/SA';
import FR from 'country-flag-icons/react/3x2/FR';
import ES from 'country-flag-icons/react/3x2/ES';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../lib/Store'; // Updated path
import { setLanguage } from '../../lib/languageSlice'; // Updated path

// Type definitions
type LanguageCode = 'en' | 'ar' | 'fr' | 'es';

interface Language {
  code: LanguageCode;
  name: string;
  flag: React.ReactNode;
}

type TranslationKey = 'home' | 'menu' | 'about' | 'contact' | 'orderNow' | 
                     'breakfast' | 'lunch' | 'dinner' | 'drinks';

interface Translations {
  en: Record<TranslationKey, string>;
  ar: Record<TranslationKey, string>;
  fr: Record<TranslationKey, string>;
  es: Record<TranslationKey, string>;
}

interface MenuItem {
  href: string;
  label: string;
  subItems?: {
    href: string;
    label: string;
  }[];
}

const Navbar = () => {
  // State management
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  
  // Redux hooks
  const dispatch = useDispatch();
  const currentLanguage = useSelector((state: RootState) => state.language.currentLanguage);

  // Language and translation data
  const languages: Language[] = [
    { code: "en", name: "English", flag: <US className="w-5 h-5 mr-2" /> },
    { code: "ar", name: "العربية", flag: <SA className="w-5 h-5 mr-2" /> },
    { code: "fr", name: "Français", flag: <FR className="w-5 h-5 mr-2" /> },
    { code: "es", name: "Español", flag: <ES className="w-5 h-5 mr-2" /> },
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
      drinks: "Drinks"
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
      drinks: "مشروبات"
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
      drinks: "Boissons"
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
      drinks: "Bebidas"
    }
  };

  // Generate translated menu items
  const getTranslatedMenuItems = (): MenuItem[] => [
    { href: "/", label: translations[currentLanguage].home },
    { 
      href: "/menu", 
      label: translations[currentLanguage].menu,
      subItems: [
        { href: "/menu/breakfast", label: translations[currentLanguage].breakfast },
        { href: "/menu/lunch", label: translations[currentLanguage].lunch },
        { href: "/menu/dinner", label: translations[currentLanguage].dinner },
        { href: "/menu/drinks", label: translations[currentLanguage].drinks }
      ]
    },
    { href: "/about", label: translations[currentLanguage].about },
    { href: "/contact", label: translations[currentLanguage].contact },
  ];

  const menuItems = getTranslatedMenuItems();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <GiFoodTruck className="text-3xl text-orange-500 group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-3xl font-extrabold text-orange-600 tracking-tight">
              Sufi Bites
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <ul className="flex space-x-6">
              {menuItems.map((item) => (
                <li key={item.href} className="relative group">
                  <div className="flex items-center">
                    <Link
                      href={item.href}
                      className={`px-3 py-2 text-gray-700 hover:text-orange-600 transition-colors duration-300 text-lg ${
                        activeMenu === item.href ? "text-orange-600" : ""
                      }`}
                      onMouseEnter={() => {
                        setActiveMenu(item.href);
                        if (item.subItems) setIsMenuOpen(true);
                      }}
                      onMouseLeave={() => {
                        if (!item.subItems) setActiveMenu("");
                      }}
                    >
                      {item.label}
                      <span 
                        className={`absolute bottom-0 left-3 h-0.5 bg-orange-600 transition-all duration-300 ${
                          activeMenu === item.href ? "w-[calc(100%-1.5rem)]" : "w-0"
                        }`}
                      />
                    </Link>
                    {item.subItems && (
                      <FiChevronDown className={`ml-1 text-gray-500 transition-transform ${
                        isMenuOpen && activeMenu === item.href ? "rotate-180" : ""
                      }`} />
                    )}
                  </div>

                  {/* Submenu Dropdown */}
                  {item.subItems && (
                    <div 
                      className={`absolute left-0 mt-0 w-48 bg-white shadow-lg rounded-md py-1 z-10 ${
                        isMenuOpen && activeMenu === item.href ? "block" : "hidden"
                      }`}
                      onMouseEnter={() => setIsMenuOpen(true)}
                      onMouseLeave={() => {
                        setIsMenuOpen(false);
                        setActiveMenu("");
                      }}
                    >
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>

            {/* Language Dropdown */}
            <div className="relative ml-4">
              <button
                className="flex items-center space-x-1 px-3 py-2 text-gray-700 hover:text-orange-600 transition-colors"
                onClick={() => setIsLangOpen(!isLangOpen)}
              >
                {languages.find(lang => lang.code === currentLanguage)?.flag}
                <FiChevronDown className={`ml-1 transition-transform ${
                  isLangOpen ? "rotate-180" : ""
                }`} />
              </button>

              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md py-1 z-10">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className={`flex items-center w-full text-left px-4 py-2 text-sm ${
                        currentLanguage === lang.code
                          ? "bg-orange-100 text-orange-600"
                          : "text-gray-700 hover:bg-orange-50"
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

            {/* Order Button */}
            <Link
              href="/order"
              className="ml-4 bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 rounded-full font-semibold text-lg shadow-md hover:shadow-orange-200 transition-all duration-300"
            >
              {translations[currentLanguage].orderNow}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <div className="relative">
              <button
                className="flex items-center text-gray-700"
                onClick={() => setIsLangOpen(!isLangOpen)}
              >
                {languages.find(lang => lang.code === currentLanguage)?.flag}
              </button>
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md py-1 z-10">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className={`flex items-center w-full text-left px-4 py-2 text-sm ${
                        currentLanguage === lang.code
                          ? "bg-orange-100 text-orange-600"
                          : "text-gray-700 hover:bg-orange-50"
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

            <button
              className="text-gray-700 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-b-lg py-2">
            <ul className="space-y-2 px-4">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block px-3 py-2 text-gray-700 hover:text-orange-600 transition-colors ${
                      activeMenu === item.href ? "text-orange-600" : ""
                    }`}
                    onClick={() => {
                      setActiveMenu(item.href);
                      if (!item.subItems) setIsMenuOpen(false);
                    }}
                  >
                    <div className="flex justify-between items-center">
                      {item.label}
                      {item.subItems && (
                        <FiChevronDown className={`ml-1 transition-transform ${
                          activeMenu === item.href ? "rotate-180" : ""
                        }`} />
                      )}
                    </div>
                    <span 
                      className={`block h-0.5 bg-orange-600 transition-all duration-300 ${
                        activeMenu === item.href ? "w-full" : "w-0"
                      }`}
                    />
                  </Link>

                  {/* Mobile Submenu */}
                  {item.subItems && activeMenu === item.href && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-3 py-2 text-gray-600 hover:text-orange-600 transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>

            <div className="px-4 py-3">
              <Link
                href="/order"
                className="block w-full text-center bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 rounded-full font-semibold shadow-md hover:shadow-orange-200 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {translations[currentLanguage].orderNow}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;