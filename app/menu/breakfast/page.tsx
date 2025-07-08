'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '@/app/lib/Store';
import HeroBanner from '@/app/components/HeroBanner/HeroBanner';

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
    title: "Start Your Day with {highlight} Breakfast",
    subtitle: "Traditional morning delights served with love",
    highlightText: "Sufi Bites",
    ctaPrimaryText: "Call to Order",
    ctaSecondaryText: "View Menu",
    dialingMessage: "Dialing...",
    menuMessage: "Opening breakfast menu..."
  },
  ar: {
    title: "ابدأ يومك مع {highlight} فطور",
    subtitle: "أطباق الصباح التقليدية تقدم بحب",
    highlightText: "سوفي بايتس",
    ctaPrimaryText: "اتصل للطلب",
    ctaSecondaryText: "عرض القائمة",
    dialingMessage: "جارٍ الاتصال...",
    menuMessage: "جارٍ فتح قائمة الفطور..."
  },
  fr: {
    title: "Commencez votre journée avec le petit-déjeuner {highlight}",
    subtitle: "Délices matinaux traditionnels servis avec amour",
    highlightText: "Sufi Bites",
    ctaPrimaryText: "Appeler pour commander",
    ctaSecondaryText: "Voir le menu",
    dialingMessage: "Composition...",
    menuMessage: "Ouverture du menu petit-déjeuner..."
  },
  es: {
    title: "Comienza tu día con el desayuno {highlight}",
    subtitle: "Delicias matutinas tradicionales servidas con amor",
    highlightText: "Sufi Bites",
    ctaPrimaryText: "Llamar para pedir",
    ctaSecondaryText: "Ver menú",
    dialingMessage: "Marcando...",
    menuMessage: "Abriendo menú de desayuno..."
  }
};

export default function BreakfastPage() {
  const currentLanguage = useSelector((state: RootState) => state.language.currentLanguage);
  const currentTranslations = translations[currentLanguage];

  return (
    <div className='bg-white'>
      <HeroBanner
        title={currentTranslations.title.replace('{highlight}', currentTranslations.highlightText)}
        subtitle={currentTranslations.subtitle}
        highlightText={currentTranslations.highlightText}
        backgroundImage="/breakfast-banner.jpg"
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
    </div>
  );
}