'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../lib/Store';

// Translation types
type LanguageCode = 'en' | 'ar' | 'fr' | 'es';

interface BannerTranslations {
  title: string;
  subtitle: string;
  menuButton: string;
  bookButton: string;
}

const bannerTranslations: Record<LanguageCode, BannerTranslations> = {
  en: {
    title: 'Sufi Bites',
    subtitle: 'Authentic flavors, unforgettable dining experience',
    menuButton: 'View Menu',
    bookButton: 'Book a Table'
  },
  ar: {
    title: 'سوفي بايتس',
    subtitle: 'نكهات أصيلة، تجربة طعام لا تنسى',
    menuButton: 'عرض القائمة',
    bookButton: 'حجز طاولة'
  },
  fr: {
    title: 'Sufi Bites',
    subtitle: 'Saveurs authentiques, expérience culinaire inoubliable',
    menuButton: 'Voir le Menu',
    bookButton: 'Réserver une Table'
  },
  es: {
    title: 'Sufi Bites',
    subtitle: 'Sabores auténticos, experiencia gastronómica inolvidable',
    menuButton: 'Ver Menú',
    bookButton: 'Reservar Mesa'
  }
};

const HomeBanner = () => {
  const currentLanguage = useSelector((state: RootState) => state.language.currentLanguage as LanguageCode);
  const translations = bannerTranslations[currentLanguage];

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/Video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 font-serif tracking-tight">
          {translations.title}
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">
          {translations.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full font-medium transition-colors">
            {translations.menuButton}
          </button>
          <button className="bg-white hover:bg-gray-100 text-amber-800 px-6 py-3 rounded-full font-medium transition-colors">
            {translations.bookButton}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
