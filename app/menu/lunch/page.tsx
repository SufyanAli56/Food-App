'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '@/app/lib/Store';

import HeroBanner from '@/app/components/heroBanner/HeroBanner';
import LunchMenu from '@/app/components/lunchMenu/LunchMenu';

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
    title: "Enjoy Your {highlight} Lunch",
    subtitle: "Delicious midday meals prepared with care",
    highlightText: "Sufi Bites",
    ctaPrimaryText: "Call to Order",
    ctaSecondaryText: "View Menu",
    dialingMessage: "Dialing...",
    menuMessage: "Opening lunch menu..."
  },
  ar: {
    title: "استمتع بغداء {highlight}",
    subtitle: "وجبات منتصف النهار اللذيذة المعدة بعناية",
    highlightText: "سوفي بايتس",
    ctaPrimaryText: "اتصل للطلب",
    ctaSecondaryText: "عرض القائمة",
    dialingMessage: "جارٍ الاتصال...",
    menuMessage: "جارٍ فتح قائمة الغداء..."
  },
  fr: {
    title: "Profitez de votre déjeuner {highlight}",
    subtitle: "Délicieux repas de midi préparés avec soin",
    highlightText: "Sufi Bites",
    ctaPrimaryText: "Appeler pour commander",
    ctaSecondaryText: "Voir le menu",
    dialingMessage: "Composition...",
    menuMessage: "Ouverture du menu déjeuner..."
  },
  es: {
    title: "Disfruta tu almuerzo {highlight}",
    subtitle: "Deliciosas comidas de mediodía preparadas con cuidado",
    highlightText: "Sufi Bites",
    ctaPrimaryText: "Llamar para pedir",
    ctaSecondaryText: "Ver menú",
    dialingMessage: "Marcando...",
    menuMessage: "Abriendo menú de almuerzo..."
  }
};

export default function LunchPage() {
  const currentLanguage = useSelector((state: RootState) => state.language.currentLanguage);
  const currentTranslations = translations[currentLanguage];

  return (
    <>
      <div className='bg-white'>
        <HeroBanner
          title={currentTranslations.title.replace('{highlight}', currentTranslations.highlightText)}
          subtitle={currentTranslations.subtitle}
          highlightText={currentTranslations.highlightText}
          backgroundImage="/lunch-banner.jpg"
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
      <LunchMenu/>
      </div>
    </>
  );
}
