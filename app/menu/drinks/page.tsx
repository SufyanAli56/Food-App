'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '@/app/lib/Store';


import HeroBanner from '@/app/components/heroBanner/HeroBanner';
import Drinks from '@/app/components/drinksMenu/Drinks';

type LanguageCode = 'en' | 'ar' | 'fr' | 'es';

interface Translations {
  title: string;
  subtitle: string;
  highlightText: string;
  ctaPrimaryText: string;
  ctaSecondaryText: string;
  dialingMessage: string;
  menuMessage: string;
}

const translations: Record<LanguageCode, Translations> = {
  en: {
    title: "Refresh Yourself with {highlight} Drinks",
    subtitle: "Traditional beverages & modern mixes served with passion",
    highlightText: "Sufi Sips",
    ctaPrimaryText: "Call to Order",
    ctaSecondaryText: "View Menu",
    dialingMessage: "Dialing...",
    menuMessage: "Opening drinks menu..."
  },
  ar: {
    title: "انتعش مع {highlight} مشروبات",
    subtitle: "مشروبات تقليدية وخلطات عصرية تقدم بشغف",
    highlightText: "سوفي سيبس",
    ctaPrimaryText: "اتصل للطلب",
    ctaSecondaryText: "عرض القائمة",
    dialingMessage: "جارٍ الاتصال...",
    menuMessage: "جارٍ فتح قائمة المشروبات..."
  },
  fr: {
    title: "Rafraîchissez-vous avec les boissons {highlight}",
    subtitle: "Boissons traditionnelles et mélanges modernes servis avec passion",
    highlightText: "Sufi Sips",
    ctaPrimaryText: "Appeler pour commander",
    ctaSecondaryText: "Voir le menu",
    dialingMessage: "Composition...",
    menuMessage: "Ouverture du menu des boissons..."
  },
  es: {
    title: "Refréscate con las bebidas {highlight}",
    subtitle: "Bebidas tradicionales y mezclas modernas servidas con pasión",
    highlightText: "Sufi Sips",
    ctaPrimaryText: "Llamar para pedir",
    ctaSecondaryText: "Ver menú",
    dialingMessage: "Marcando...",
    menuMessage: "Abriendo menú de bebidas..."
  }
};

export default function DrinksPage() {
  const currentLanguage = useSelector((state: RootState) => state.language.currentLanguage);
  const currentTranslations = translations[currentLanguage];

  return (
    <>
      <div className='bg-white'>
        <HeroBanner
          title={currentTranslations.title.replace('{highlight}', currentTranslations.highlightText)}
          subtitle={currentTranslations.subtitle}
          highlightText={currentTranslations.highlightText}
          backgroundImage="/drinks-banner.jpg"
          ctaPrimary={{
            text: currentTranslations.ctaPrimaryText,
            onClick: () => alert(currentTranslations.dialingMessage),
          }}
          ctaSecondary={{
            text: currentTranslations.ctaSecondaryText,
            onClick: () => alert(currentTranslations.menuMessage),
          }}
          showScrollIndicator={false}
        />
      <Drinks/>
      </div>
    </>
  );
}